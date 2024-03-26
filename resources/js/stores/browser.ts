import { defineStore } from 'pinia'
import { isEmpty, range } from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import { QueueEntry, QueueEntryStatus, ModalPayload } from '../@types'
import Resumable from 'resumablejs'
import { csrf } from '../helpers/csrf'
import { MODALS } from '../constants'
import { useLocalStorage } from '@vueuse/core'
import { ComputedRef, Ref, computed, ref } from 'vue'

function __(key: string) {
    return key
}

type SelectOption = {
    value: string;
    label: string;
};

const useBrowserStore = defineStore('nova-filemanager/browser', () => {
    // status
    const loading: Ref<boolean> = ref(false);
    const uploading: Ref<boolean> = ref(false);
    const fetchingDisks: Ref<boolean> = ref(false);
    const selecting: Ref<boolean> = ref(false);
    const multiple: Ref<boolean> = ref(false);

    // showing states
    const showFolders: Ref<boolean> = ref(true);
    const showFiles: Ref<boolean> = ref(true);

    // browser state
    const page: Ref<number> = ref(1);
    const perPage: Ref<number> = ref(10);
    const path: Ref<string> = ref('/');
    const search: Ref<string> = ref('');
    const sort: Ref<string> = ref('');
    const period: Ref<string> = ref('');
    const disk: Ref<string> = useLocalStorage('pinia/nova-file-manager/browser/disk', '');

    //
    const selection: Ref<any[]> = ref([]);
    const modals: Ref<ModalPayload[]> = ref([]);
    const queue: Ref<QueueEntry[]> = ref([]);
    const selectionConfirms: Ref<number> = ref(0);

    const perPageOptions: Ref<number[]> = ref(range(10, 50, 10));
    const sorts: Ref<SelectOption[]> = ref([
        { value: '', label: __('Sort by') },
        { value: 'date', label: __('Date Asc') },
        { value: 'date-desc', label: __('Date Desc') },
        { value: 'name', label: __('Name Asc') },
        { value: 'name-desc', label: __('Name Desc') },
        { value: 'size', label: __('Size Asc') },
        { value: 'size-desc', label: __('Size Desc') },
    ]);
    const disks: Ref<any[]> = ref([]);
    const periods: Ref<SelectOption[]> = ref([]);

    const data: Ref<any> = ref({});

    // Config
    const chunkSize: Ref<number> = ref(50 * 1024 * 1024);

    async function init() {
        if (isEmpty(disks.value)) {
            await getDisks()
        }

        if (isEmpty(data.value)) {
            await fetchData()
        }
    }

    function confirmSelection() {
        selectionConfirms.value++
    }

    /**  Data Updaters */

    function setPage(value: number) {
        page.value = value;

        fetchData();
    }

    function setPerPage(value: number) {
        perPage.value = value;
        page.value = 1;

        fetchData();
    }

    function setPath(value: string) {
        path.value = value;
        page.value = 1;

        fetchData();
    }

    function setSearch(value: string) {
        search.value = value;
        page.value = 1;

        fetchData();
    }

    function setSort(value: string) {
        sort.value = value;

        fetchData();
    }

    function setDisk(value: string) {
        path.value = '/'
        page.value = 1
        search.value = ''
        disk.value = value;

        fetchData();
    }

    function setPeriod(value: string) {
        period.value = value;
        page.value = 1;

        fetchData();
    }


    /** Modals */

    function openModal(name: string, payload: ModalPayload = null) {
        modals.value.push({
            id: uuidv4(),
            name,
            payload,
        });
    }

    function closeModal(id: string) {
        modals.value = modals.value
            .filter((modal: ModalPayload) => modal.id !== id)
    }

    function closeModalsByName(name: string) {
        modals.value = modals.value
            .filter((modal: ModalPayload) => modal.name !== name)
    }

    function closeModals() {
        modals.value = [];
    }


    /** Selection */

    function select(subject: any) {
        if (isEmpty(selection.value)) {
            selection.value = [subject]

            return
        }

        selection.value.push(subject)
    }

    function unselect(subject: any) {
        selection.value = selection.value
            ?.filter(item => item.id !== subject.id);
    }

    function setSelection(subjects: any[]) {
        selection.value = subjects;
    }

    function clearSelection() {
        setSelection([])
    }

    function isSelected(subject: any) {
        return !!selection.value?.find(item => item.id === subject.id)
    }

    function toggleSelection(subject: any) {
        if (isSelected(subject)) {
            unselect(subject)

            return
        }

        if (!multiple.value) {
            clearSelection()
        }

        select(subject)
    }

    /** Queues */

    const isProcessing: ComputedRef<boolean> = computed(() => loading.value || uploading.value || fetchingDisks.value);

    /** Add a file to the upload queue */
    function queueFile({ file }: { file: File }) {
        queue.value.push({
            id: file.name,
            ratio: 0,
            status: null,
            file,
            isImage: file.type.includes('image') ?? false,
        })
    }

    /** Clear the current upload queue */
    function clearQueue() {
        queue.value = []
    }

    function updateQueue({ id, ratio = 100, status = null }: { id: string; ratio?: number; status?: QueueEntryStatus }) {
        queue.value = queue.value.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    status,
                    ratio,
                }
            }

            return item
        })

        const done = queue.value.reduce((carry: boolean, item: QueueEntry) => carry && item.ratio === 100, true)

        if (done && queue.value.length) {
            setTimeout(async () => {
                closeModalsByName(MODALS.QUEUE);
                clearQueue()

                uploading.value = false

                await fetchData();
            }, 1000)
        }
    }

    /** Fetches */

    function upload(files: File[]) {
        if (uploading.value) {
            return;
        }

        if (!modals.value.find(modal => modal.name === MODALS.QUEUE)) {
            openModal(
                MODALS.QUEUE
            );
        }

        uploading.value = true

        const uploader = new Resumable({
            chunkSize: chunkSize.value,
            simultaneousUploads: 1,
            maxChunkRetries: 10,
            testChunks: false,
            target: '/nova-vendor/nova-file-manager/files/upload',
            query: {
                path: path.value ?? '/',
                disk: disk.value,
            },
            headers: {
                Accept: 'application/json',
                'X-CSRF-TOKEN': csrf(),
            },
        })

        files.forEach((file: File) => {
            uploader.addFile(file)

            queueFile({ file })
        })

        uploader.on('fileAdded', () => uploader.upload())

        uploader.on('fileSuccess', file => {
            updateQueue({
                id: file.fileName,
                status: true,
            })
        })

        uploader.on('fileProgress', file => {
            updateQueue({
                id: file.fileName,
                ratio: Math.floor(file.progress(false) * 100),
            })
        })

        uploader.on('error', (file, message) => {
            console.log(file, message);

        })

        uploader.on('fileError', (file, message) => {
            updateQueue({
                id: file.fileName,
                status: false,
            })

            Nova.error(JSON.parse(message).message)
        })
    }

    async function getDisks() {
        fetchingDisks.value = true;

        const response = await fetch(
            "/nova-vendor/nova-file-manager/disks/available"
        );

        const data = await response.clone().json();

        if (response.ok) {
            disks.value = data

            if (!disk.value) {
                disk.value = disks.value[0]
            }
        } else {
            Nova.error(
                `${response.status}: ${data.message || "Something went wrong"
                }`
            );
        }

        fetchingDisks.value = false;
    }

    async function fetchData() {
        loading.value = true;

        const body: any = {
            page: page.value,
            perPage: perPage.value,
            path: path.value,
            search: search.value,
            sort: sort.value,
            disk: disk.value,
            period: period.value,
        };

        return await fetch(
            `/nova-vendor/nova-file-manager?${new URLSearchParams(body).toString()}`,
            {
                method: 'GET',
                headers: {
                    "X-CSRF-TOKEN": csrf(),
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json",
                },
            },
        )
            .then(async (response) => {
                const parsedData = await response.clone().json();

                if (response.ok) {
                    page.value = parsedData.pagination.current_page;
                    disk.value = parsedData.disk;
                    data.value = parsedData;
                } else {
                    Nova.error(
                        `${response.status}: ${parsedData.message || "Something went wrong"}`
                    );
                }
            })
            .finally((response: any) => {
                loading.value = false;

                return response;
            });
    }

    async function renameFile(from: string, to: string) {
        return await sendRequest(
            "/nova-vendor/nova-file-manager/files/rename",
            'POST',
            {
                disk: disk.value,
                from: from,
                to: to,
            },
        )
            .then((response) => {
                if (response.ok) {
                    selection.value = selection.value.filter(value => value.path !== from)
                }
            });
    }

    async function deleteFiles(paths: string[] = []) {
        if (paths.length === 0) {
            return
        }

        return await sendRequest(
            "/nova-vendor/nova-file-manager/files/delete",
            'POST',
            {
                disk: disk.value,
                paths: paths,
            },
        )
            .then((response) => {
                if (response.ok) {
                    selection.value = selection.value
                        .filter(value => !paths.includes(value.path))
                }
            });
    }

    async function unarchive(path: string) {
        return await sendRequest(
            "/nova-vendor/nova-file-manager/files/unzip",
            'POST',
            {
                disk: disk.value,
                path: path,
            },
        );
    }


    async function duplicate(path: string) {
        return await sendRequest(
            "/nova-vendor/nova-file-manager/files/duplicate",
            'POST',
            {
                disk: disk.value,
                path: path,
            },
        );
    }

    async function createFolder(path: string) {
        return await sendRequest(
            "/nova-vendor/nova-file-manager/folders/create",
            'POST',
            {
                disk: disk.value,
                path: path,
            },
        );
    }

    async function renameFolder(from: string, to: string) {
        return await sendRequest(
            "/nova-vendor/nova-file-manager/folders/rename",
            'POST',
            {
                disk: disk.value,
                from: from,
                to: to,
            },
        );
    }

    async function deleteFolder(path: string) {
        return await sendRequest(
            "/nova-vendor/nova-file-manager/folders/delete",
            'POST',
            {
                disk: disk.value,
                path: path,
            },
        );
    }

    async function sendRequest(url: string, method: string = 'POST', body: any) {
        loading.value = true;

        const requestUrl = method === 'GET'
            ? `${url}?${new URLSearchParams(body).toString()}`
            : url;

        return await fetch(
            requestUrl,
            {
                method: method,
                headers: {
                    "X-CSRF-TOKEN": csrf(),
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json",
                },
                body: method === 'GET'
                    ? null
                    : JSON.stringify(body),
            },
        )
            .then(async (response) => {
                const data = await response.clone().json();

                if (response.ok) {
                    closeModals();
                    fetchData();

                    if (data.message) {
                        Nova.success(data.message);
                    }
                } else {
                    Nova.error(
                        `${response.status}: ${data.message || "Something went wrong"}`
                    );
                }

                return response;
            })
            .finally((response) => {
                loading.value = false;

                return response;
            });
    }

    return {
        init,
        //
        isProcessing,
        loading,
        uploading,
        fetchingDisks,
        selecting,
        multiple,
        //
        showFiles,
        showFolders,
        //
        page,
        perPage,
        path,
        search,
        sort,
        period,
        disk,
        //
        selection,
        modals,
        queue,
        selectionConfirms,
        //
        perPageOptions,
        sorts,
        disks,
        periods,
        //
        data,
        //
        chunkSize,
        //

        confirmSelection,
        setPage,
        setPerPage,
        setPath,
        setSearch,
        setSort,
        setDisk,
        setPeriod,
        //
        openModal,
        closeModal,
        closeModalsByName,
        closeModals,
        //
        select,
        unselect,
        setSelection,
        clearSelection,
        isSelected,
        toggleSelection,
        //
        queueFile,
        clearQueue,
        updateQueue,
        //
        getDisks,
        fetchData,
        upload,
        renameFile,
        deleteFiles,
        unarchive,
        duplicate,
        createFolder,
        renameFolder,
        deleteFolder,
    };
})

export default useBrowserStore
