<template>
    <div ref="filemanager-container">
        <Heading class="mb-6">
            {{ __('Filemanager') }}
        </Heading>

        <DetailModal
            ref="detailPopup"
            :info="info"
            :active="activeInfo"
            :disk="disk"

            @close="closePreview"
            @rename="openRenameModal"
            @delete="openDeleteModal"
            @duplicate="openConfirmDuplicateModal"
        />

        <CreateFolderModal
            :active="showCreateFolder"
            :path="path"
            :disk="disk"
            @close="closeModalCreateFolder"
            @refresh="refreshCurrent"
        />

        <RenameModal
            ref="renameModal"
            :disk="disk"
            @refresh="refreshCurrent"
        />

        <ConfirmDuplicateModal
            ref="duplicateModal"
            :disk="disk"
            @refresh="refreshCurrent"
        />

        <ConfirmDeleteModal
            ref="confirmDelete"
            :disk="disk"
            @refresh="refreshCurrent"
        />

        <ConfirmMultiDeleteModal
            ref="confirmMultiDelete"
            :disk="disk"
            :selectedFiles="selectedFiles"
            @refresh="refreshCurrent"
        />

        <div class="relative" id="filemanager-manager">
            <Manager
                ref="manager"

                :card="true"

                :loading="loading"
                :path="path"
                :search="search"
                :disk="disk"
                :disks="disks"
                :files="files"
                :breadcrumbs="breadcrumbs"
                :directories="directories"
                :filter="filter"
                :filters="filters"
                :multiSelecting="multiSelecting"
                :selectedFiles="selectedFiles"
                :pageLimits="pageLimits"

                @refresh="refresh"
                @goToFolder="goToFolder"
                @goToPage="goToPage"
                @select="select"
                @delete="openDeleteModal"
                @rename="openRenameModal"
                @multiDelete="openMultiDeleteModal"
                @createFolder="showModalCreateFolder"
                @showInfo="showInfo"

                @update:search="setSearch"
                @update:disk="setDisk"
                @update:filter="setFilter"
                @update:perPage="setPerPage"
                @update:multiSelecting="multiSelecting = $event"
            />

            <!-- <UploadProgress
                ref="uploader"
                :current="currentPath"
                @removeFile="removeFileFromUpload"
            ></UploadProgress> -->
        </div>
    </div>
</template>

<script>
    import URI from 'urijs';
    import _ from 'lodash';
    import api from '../api';

    import CreateFolderModal from '../modals/CreateFolderModal';
    import ConfirmDeleteModal from '../modals/ConfirmDeleteModal';
    import ConfirmMultiDeleteModal from '../modals/ConfirmMultiDeleteModal';
    import RenameModal from '../modals/RenameModal';
    import DetailModal from '../modals/DetailModal';
    import ConfirmDuplicateModal from '../modals/ConfirmDuplicateModal';

    import UploadProgress from '../components/UploadProgress';
    import Manager from '../components/Manager';

    export default {
        components: {
            CreateFolderModal,
            RenameModal,
            ConfirmDeleteModal,
            ConfirmMultiDeleteModal,
            DetailModal,
            ConfirmDuplicateModal,

            Manager: Manager,
            UploadProgress: UploadProgress,
        },

        data: () => ({
            loading: true,
            path: '/',
            search: '',
            disk: null,
            disks: [],
            files: {},
            breadcrumbs: [],
            directories: [],
            filter: null,
            filters: [],
            multiSelecting: false,
            selectedFiles: [],
            pageLimits: [],
            info: {},
            showInfo: false,

            showCreateFolder: false,
        }),

        async created() {
            await this.getDisks();
            await this.refresh();
        },

        methods: {
            getDisks() {
                return api
                    .getDisks()
                    .then((result) => {
                        this.disks = result;
                    })
                    .catch(() => {
                        Nova.error(this.__('Error reading the folder. Please check your logs'));
                    });
            },

            refresh() {
                return this.getData(
                    this.path,
                    this.disk,
                    this.files.currentPage || 1,
                    this.files.perPage || 15,
                    this.search,
                    this.filter,
                );
            },

            getData(path = '/', disk = null, page = 1, perPage = 10, search = null, filter = null) {
                this.loading = true;

                return api
                    .getData(
                        path,
                        disk,
                        page,
                        perPage,
                        search,
                        filter,
                    )
                    .then((result) => {
                        this.path = result.path;
                        this.disk = result.disk;

                        this.breadcrumbs = result.breadcrumbs;
                        this.directories = result.directories;
                        this.filters = result.filters;
                        this.files = result.files;
                        this.pageLimits = result.pageLimits;

                        this.loading = false;
                    })
                    .catch(() => {
                        this.loading = false;
                        Nova.error(this.__('Error reading the folder. Please check your logs'));
                    });
            },

            goToFolder(path) {
                if (this.path === path) {
                    return;
                }

                this.files.currentPage = 1;
                this.path = path;
                this.filter = null;
                this.search = '';

                this.refresh();
            },

            goToPage(page) {
                if (this.files.currentPage === page) {
                    return;
                }

                this.getData(
                    this.path,
                    this.disk,
                    page,
                    this.files.perPage || 15,
                    this.search,
                    this.filter,
                );
            },

            reset() {
                this.breadcrumbs = [];
                this.directories = [];
                this.filters = [];
                this.files = [];
                this.loading = false;
            },

            setDisk(disk) {
                if (this.disk === disk) {
                    return;
                }

                this.reset();

                this.path = '/';
                this.filter = null;
                this.search = '';

                this.selectedFiles = [];

                this.disk = disk;
                this.refresh();
            },

            setFilter(filter) {
                if (this.filter === filter) {
                    return;
                }

                this.files.currentPage = 1;
                this.filter = filter;
                this.refresh();
            },

            setSearch(search) {
                if (this.search === search) {
                    return;
                }

                this.files.currentPage = 1;
                this.search = search;
                this.refresh();
            },

            setPerPage(perPage) {
                if (this.files.perPage === perPage) {
                    return;
                }

                this.files.currentPage = 1;

                this.getData(
                    this.path,
                    this.disk,
                    this.files.currentPage || 1,
                    perPage,
                    this.search,
                    this.filter,
                );
            },

            select(file) {
                const findIndex = _.findIndex(this.selectedFiles, file);

                if (findIndex >= 0) {
                    this.selectedFiles.splice(findIndex, 1);
                    return;
                }

                this.selectedFiles.push(file);
            },

            showModalCreateFolder() {
                this.showCreateFolder = true;
            },

            closeModalCreateFolder() {
                this.showCreateFolder = false;
            },

            refreshCurrent() {
                this.closePreview();
                this.refreshMultiSelected();
                this.refresh();
            },

            // refreshCurrentAfterUpload() {
            //     this.getData(this.currentPath);
            //     this.filesToUpload = [];
            // },

            // goToFolderNav(path) {
            //     this.getData(path);
            //     this.currentPath = path;
            //     if (this.currentPath == '/') {
            //         history.pushState(null, null, '?path=' + path);
            //     } else {
            //         history.pushState(null, null, '?path=' + path);
            //     }
            // },

            showInfo(item) {
                this.activeInfo = true;
                this.info = item;
            },

            closePreview() {
                this.info = {};
                this.activeInfo = false;
            },

            fileRenamed(item) {
                this.info = item;
            },

            // uploadFiles(files, type, firstFolderName) {
            //     this.filesToUpload = files;
            //     this.uploadType = type;
            //     this.folderUploadedName = firstFolderName;
            //     this.$refs.uploader.startUploadingFiles(files, type);
            // },

            // removeFileFromUpload(uploadedFileId) {
            //     let index = this.filesToUpload.map((item) => item.id).indexOf(uploadedFileId);

            //     if (index > -1) {
            //         this.filesToUpload.splice(index, 1);
            //     }

            //     if (this.filesToUpload.length === 0) {
            //         if (this.uploadType == 'folders') {
            //             this.callFolderEvent(this.folderUploadedName);
            //         }

            //         this.folderUploadedName = null;
            //         this.uploadType = null;
            //         this.refreshCurrent();
            //     }
            // },

            openConfirmDuplicateModal(type, path) {
                this.$refs.duplicateModal.openModal(type, path);
            },

            openRenameModal(type, path) {
                this.$refs.renameModal.openModal(type, path);
            },

            openDeleteModal(type, path) {
                this.$refs.confirmDelete.openModal(type, path);
            },

            openMultiDeleteModal() {
                this.$refs.confirmMultiDelete.openModal();
            },

            refreshMultiSelected() {
                this.multiSelecting = false;
                this.selectedFiles = [];
            },

            // callFolderEvent(path) {
            //     api.eventFolderUploaded(this.currentPath + '/' + path);
            // },
        },

        watch: {
            // currentPath() {
            //     this.multiSelecting = false;
            //     this.selectedFiles = [];
            // },
        },
    };
</script>
