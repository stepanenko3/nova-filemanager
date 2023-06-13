import { defineStore } from 'pinia'
import { isEmpty, range } from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import { Modal, OptionValue, QueueEntry, QueueEntryStatus, ModalPayload } from '../@types'
import Resumable from 'resumablejs'
import { csrf } from '../helpers/csrf'
import { MODALS } from '../constants'
import { RemovableRef, useLocalStorage } from '@vueuse/core'

function __(key: string) {
    return key
}

interface State {
    loading: boolean
    isUploading: boolean
    isFetchingDisks: boolean
    selecting: boolean
    multiple: boolean
    //
    modals: Array<Modal>
    //
    showFolders: boolean
    showFiles: boolean
    //
    page: number
    perPage: number
    path: string
    search: string
    //
    sort: string
    disk: RemovableRef<any>
    period: string
    //
    perPageOptions: number[],
    sorts: Array<OptionValue>
    disks: Array<string>
    periods: Array<OptionValue>
    //
    queue: QueueEntry[]
    selection: Array<any>
    data: any
    selectionConfirms: number
    // config
    chunkSize: number
}

const useBrowserStore = defineStore('nova-filemanager/browser', {
    state: (): State => ({
        // status
        loading: false,
        isUploading: false,
        isFetchingDisks: false,
        selecting: false,
        multiple: true,

        // showing states
        showFolders: true,
        showFiles: true,

        // browser state
        page: 1,
        perPage: 10,
        path: '/',
        search: '',
        sort: '',
        disk: useLocalStorage('pinia/nova-file-manager/browser/disk', ''),
        period: '',

        //
        selection: [],
        modals: [],
        queue: [],
        selectionConfirms: 0,

        perPageOptions: range(10, 50, 10),
        sorts: [
            { value: '', label: __('Sort by') },
            { value: 'date', label: __('Date Asc') },
            { value: 'date-desc', label: __('Date Desc') },
            { value: 'name', label: __('Name Asc') },
            { value: 'name-desc', label: __('Name Desc') },
            { value: 'size', label: __('Size Asc') },
            { value: 'size-desc', label: __('Size Desc') },
        ],
        disks: [],
        periods: [
            { value: '', label: __('Filter by date') },
            { value: '24 hours', label: __('24 hours') },
            { value: '7 days', label: __('7 days') },
            { value: '1 month', label: __('1 month') },
            { value: '6 months', label: __('6 months') },
            { value: '1 year', label: __('1 year') },
        ],

        //
        data: {},

        // config
        chunkSize: 50 * 1024 * 1024,
    }),

    actions: {
        async init() {
            if (isEmpty(this.disks)) {
                await this.getDisks()
            }

            if (isEmpty(this.data)) {
                await this.fetch()
            }
        },

        confirmSelection() {
            this.selectionConfirms++
        },

        /**
         * Data Updaters
         */

        setPage(value: number) {
            this.page = value;

            this.fetch();
        },

        setPerPage(value: number) {
            this.perPage = value;
            this.page = 1;

            this.fetch();
        },

        setPath(value: string) {
            this.path = value;
            this.page = 1;

            this.fetch();
        },

        setSearch(value: string) {
            this.search = value;
            this.page = 1;

            this.fetch();
        },

        setSort(value: string) {
            this.sort = value;

            this.fetch();
        },

        setDisk(value: string) {
            this.path = '/'
            this.page = 1
            this.search = ''
            this.disk = value;

            this.fetch();
        },

        setPeriod(value: string) {
            this.period = value;
            this.page = 1;

            this.fetch();
        },

        /**
         * Modals
         */

        openModal(name: string, payload: ModalPayload = null) {
            this.modals.push({
                id: uuidv4(),
                name,
                payload,
            });
        },

        closeModal(id: string) {
            this.modals = this.modals.filter(modal => modal.id !== id)
        },

        closeModalsByName(name: string) {
            this.modals = this.modals.filter(modal => modal.name !== name)
        },

        closeModals() {
            this.modals = [];
        },

        /**
         * Selection
         */

        select(subject: any) {
            if (isEmpty(this.selection)) {
                this.selection = [subject]

                return
            }

            this.selection.push(subject)
        },

        unselect(subject: any) {
            this.selection = this.selection?.filter(item => item.id !== subject.id)
        },

        setSelection(subjects: Array<any>) {
            this.selection = subjects
        },

        clearSelection() {
            this.setSelection([])
        },

        toggleSelection(subject: any) {
            if (this.isSelected(subject)) {
                this.unselect(subject)

                return
            }

            if (!this.multiple) {
                this.clearSelection()
            }

            this.select(subject)
        },

        /**
         * Queues
         */


        /**
         * Add a file to the upload queue
         */
        queueFile({ file }: { file: File }) {
            this.queue.push({
                id: file.name,
                ratio: 0,
                status: null,
                file,
                isImage: file.type.includes('image') ?? false,
            })
        },

        /**
         * Clear the current upload queue
         */
        clearQueue() {
            this.queue = []
        },

        updateQueue({ id, ratio = 100, status = null }: { id: string; ratio?: number; status?: QueueEntryStatus }) {
            this.queue = this.queue.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        status,
                        ratio,
                    }
                }

                return item
            })

            const done = this.queue.reduce((carry, item) => carry && item.ratio === 100, true)

            if (done && this.queue.length) {
                setTimeout(async () => {
                    this.closeModalsByName(MODALS.QUEUE);
                    this.clearQueue()

                    this.isUploading = false

                    await this.fetch()
                }, 1000)
            }
        },


        /**
         * Fetches
         */

        async getDisks() {
            this.isFetchingDisks = true;

            return Nova.request()
                .get("/nova-vendor/nova-file-manager/disks/available")
                .then((response: any) => {
                    this.disks = response.data

                    if (!this.disk) {
                        this.disk = this.disks[0]
                    }
                })
                .catch((error: any) => Nova.error(error.response.data.message || 'Something went wrong'))
                .finally(() => this.isFetchingDisks = false);
        },

        async fetch() {
            this.loading = true;

            return Nova.request()
                .get("/nova-vendor/nova-file-manager", {
                    params: {
                        page: this.page,
                        perPage: this.perPage,
                        path: this.path,
                        search: this.search,
                        sort: this.sort,
                        disk: this.disk,
                        period: this.period,
                    },
                })
                .then((response: any) => {
                    this.page = response.data.pagination.current_page;
                    this.disk = response.data.disk;
                    this.data = response.data;

                    this.loading = false;
                })
                .catch((error) => {
                    this.loading = false;

                    Nova.error(error.response.data.message || 'Something went wrong');
                });
        },

        upload(files: File[]) {
            if (this.isUploading) {
                return;
            }

            if (!this.modals.find(modal => modal.name === MODALS.QUEUE)) {
                this.openModal(
                    MODALS.QUEUE
                );
            }

            this.isUploading = true

            const uploader = new Resumable({
                chunkSize: this.chunkSize,
                simultaneousUploads: 1,
                maxChunkRetries: 10,
                testChunks: false,
                target: '/nova-vendor/nova-file-manager/files/upload',
                query: {
                    path: this.path ?? '/',
                    disk: this.disk,
                },
                headers: {
                    Accept: 'application/json',
                    'X-CSRF-TOKEN': csrf(),
                },
            })

            files.forEach(file => {
                uploader.addFile(file)

                this.queueFile({ file })
            })

            uploader.on('fileAdded', () => uploader.upload())

            uploader.on('fileSuccess', file => {
                this.updateQueue({
                    id: file.fileName,
                    status: true,
                })
            })

            uploader.on('fileProgress', file => {
                this.updateQueue({
                    id: file.fileName,
                    ratio: Math.floor(file.progress(false) * 100),
                })
            })

            uploader.on('error', (file, message) => {
                console.log(file, message);

            })

            uploader.on('fileError', (file, message) => {
                this.updateQueue({
                    id: file.fileName,
                    status: false,
                })

                window.Nova.error(JSON.parse(message).message)
            })
        },

        async renameFile(from: string, to: string) {
            return Nova.request()
                .post("/nova-vendor/nova-file-manager/files/rename", {
                    disk: this.disk,
                    from: from,
                    to: to,
                })
                .then((response: any) => {
                    this.selection = this.selection.filter(value => value.path !== from)

                    this.closeModals();
                    this.fetch();

                    if (response.data.message) {
                        Nova.success(response.data.message);
                    }

                    return response;
                })
                .catch((error: any) => Nova.error(error.response.data.message || 'Something went wrong'));
        },

        async deleteFiles(paths: string[] = []) {
            if (paths.length === 0) {
                return
            }

            return Nova.request()
                .post("/nova-vendor/nova-file-manager/files/delete", {
                    disk: this.disk,
                    paths: paths,
                })
                .then((response: any) => {
                    this.selection = this.selection.filter(value => !paths.includes(value.path))

                    this.closeModals();
                    this.fetch();

                    if (response.data.message) {
                        Nova.success(response.data.message);
                    }

                    return response;
                })
                .catch((error: any) => Nova.error(error.response.data.message || 'Something went wrong'));
        },

        async unarchive(path: string) {
            this.loading = true;

            return Nova.request()
                .post("/nova-vendor/nova-file-manager/files/unzip", {
                    disk: this.disk,
                    path: path,
                })
                .then((response: any) => {
                    this.loading = false;

                    this.closeModals();
                    this.fetch();

                    if (response.data.message) {
                        Nova.success(response.data.message);
                    }

                    return response;
                })
                .catch((error: any) => {
                    this.loading = false;

                    Nova.error(error.response.data.message || 'Something went wrong');
                });
        },

        async duplicate(path: string) {
            this.loading = true;

            return Nova.request()
                .post("/nova-vendor/nova-file-manager/files/duplicate", {
                    disk: this.disk,
                    path: path,
                })
                .then((response: any) => {
                    this.loading = false;

                    this.closeModals();
                    this.fetch();

                    if (response.data.message) {
                        Nova.success(response.data.message);
                    }

                    return response;
                })
                .catch((error: any) => {
                    this.loading = false;

                    Nova.error(error.response.data.message || 'Something went wrong');
                });
        },

        async createFolder(path: string) {
            return Nova.request()
                .post("/nova-vendor/nova-file-manager/folders/create", {
                    disk: this.disk,
                    path: path,
                })
                .then((response: any) => {
                    this.closeModals();
                    this.fetch();

                    if (response.data.message) {
                        Nova.success(response.data.message);
                    }

                    return response;
                })
                .catch((error: any) => Nova.error(error.response.data.message || 'Something went wrong'));
        },

        async renameFolder(from: string, to: string) {
            return Nova.request()
                .post("/nova-vendor/nova-file-manager/folders/rename", {
                    disk: this.disk,
                    from: from,
                    to: to,
                })
                .then((response: any) => {
                    this.closeModals();
                    this.fetch();

                    if (response.data.message) {
                        Nova.success(response.data.message);
                    }

                    return response;
                })
                .catch((error: any) => Nova.error(error.response.data.message || 'Something went wrong'));
        },

        async deleteFolder(path: string) {
            return Nova.request()
                .post("/nova-vendor/nova-file-manager/folders/delete", {
                    disk: this.disk,
                    path: path,
                })
                .then((response: any) => {
                    this.closeModals();
                    this.fetch();

                    if (response.data.message) {
                        Nova.success(response.data.message);
                    }

                    return response;
                })
                .catch((error: any) => Nova.error(error.response.data.message || 'Something went wrong'));
        },
    },

    getters: {
        isSelected() {
            return (subject: any) => !!this.selection?.find(item => item.id === subject.id)
        },

        isProcessing(): boolean {
            return this.loading || this.isUploading || this.isFetchingDisks
        },
    },
})

export default useBrowserStore
