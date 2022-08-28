<template>
    <div ref="filemanager-container">
        <Heading class="mb-6">
            {{ __('Filemanager') }}
        </Heading>

        <DetailModal
            ref="detailPopup"
            :info="info"
            :active="activeInfo"
            :buttons="buttons"
            @closePreview="closePreview"
            @refresh="refreshCurrent"
            @rename="fileRenamed"
        />

        <CreateFolderModal
            :active="showCreateFolder"
            :current="currentPath"
            @closeCreateFolderModal="closeModalCreateFolder"
            @refresh="refreshCurrent"
        />

        <RenameModal ref="renameModal" @refresh="refreshCurrent" />

        <ConfirmDeleteModal ref="confirmDelete" @refresh="refreshCurrent" />

        <ConfirmMultiDeleteModal
            ref="confirmMultiDelete"
            :selectedFiles="selectedFiles"
            @refresh="refreshCurrent"
        />

        <Card class="relative" id="filemanager-manager">
            <Manager
                ref="manager"
                :files="files"
                :path="path"
                :current="currentPath"
                :parent="parent"
                :loading="loadingfiles"
                :filters="filters"
                :selectedFiles="selectedFiles"
                :buttons="buttons"
                :multiSelecting="multiSelecting"
                @updated:multiSelecting="multiSelecting = $event"
                @goToFolderManager="goToFolder"
                @goToFolderManagerNav="goToFolderNav"
                @refresh="refreshCurrent"
                @uploadFiles="uploadFiles"
                @showInfoItem="showInfoItem"
                @rename="openRenameModal"
                @delete="openDeleteModal"
                @multiDelete="openMultiDeleteModal"
                @select="select"
                @createFolder="showModalCreateFolder"
            />

            <UploadProgress
                ref="uploader"
                :current="currentPath"
                @removeFile="removeFileFromUpload"
            ></UploadProgress>
        </Card>
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

    import UploadProgress from '../components/UploadProgress';
    import Manager from '../components/Manager';

    export default {
        components: {
            CreateFolderModal,
            RenameModal,
            ConfirmDeleteModal,
            ConfirmMultiDeleteModal,
            DetailModal,

            Manager: Manager,
            UploadProgress: UploadProgress,
        },

        data: () => ({
            loaded: false,
            loadingfiles: false,
            activeDisk: null,
            activeDiskBackups: [],
            backupStatusses: [],
            showCreateFolder: false,
            currentPath: '/',
            files: [],
            parent: {},
            path: [],
            info: {},
            filesToUpload: [],
            uploadType: null,
            folderUploadedName: null,
            activeInfo: false,
            filters: [],
            multiSelecting: false,
            selectedFiles: [], // { type: 'folder/file', path: '...'' }
            buttons: [],
        }),

        async created() {
            let currentUrl = new URI();

            if (currentUrl.hasQuery('path')) {
                let params = currentUrl.query(true);
                this.currentPath = params.path;
            }

            await this.getData(this.currentPath);

            this.loaded = true;
        },

        methods: {
            getData(pathToList) {
                this.files = [];
                this.parent = {};
                this.path = [];
                this.loadingfiles = true;
                return api
                    .getData(pathToList)
                    .then((result) => {
                        this.files = result.files;
                        this.path = result.path;
                        this.filters = result.filters;
                        this.parent = result.parent;
                        this.buttons = result.buttons;

                        this.loadingfiles = false;
                    })
                    .catch(() => {
                        this.loadingfiles = false;
                        this.filters = [];
                        Nova.error(this.__('Error reading the folder. Please check your logs'));
                    });
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
                this.getData(this.currentPath);
            },

            refreshCurrentAfterUpload() {
                this.getData(this.currentPath);
                this.filesToUpload = [];
            },

            goToFolder(path) {
                this.getData(path);
                this.currentPath = path;
                history.pushState(null, null, '?path=' + path);
            },

            goToFolderNav(path) {
                this.getData(path);
                this.currentPath = path;
                if (this.currentPath == '/') {
                    history.pushState(null, null, '?path=' + path);
                } else {
                    history.pushState(null, null, '?path=' + path);
                }
            },

            showInfoItem(item) {
                this.activeInfo = true;
                this.info = item;
            },

            closePreview() {
                this.info = {};
                this.activeInfo = false;
                this.popupDetailsLoaded = false;
            },

            fileRenamed(item) {
                this.info = item;
            },

            uploadFiles(files, type, firstFolderName) {
                this.filesToUpload = files;
                this.uploadType = type;
                this.folderUploadedName = firstFolderName;
                this.$refs.uploader.startUploadingFiles(files, type);
            },

            removeFileFromUpload(uploadedFileId) {
                let index = this.filesToUpload.map((item) => item.id).indexOf(uploadedFileId);

                if (index > -1) {
                    this.filesToUpload.splice(index, 1);
                }

                if (this.filesToUpload.length === 0) {
                    if (this.uploadType == 'folders') {
                        this.callFolderEvent(this.folderUploadedName);
                    }

                    this.folderUploadedName = null;
                    this.uploadType = null;
                    this.refreshCurrent();
                }
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

            callFolderEvent(path) {
                api.eventFolderUploaded(this.currentPath + '/' + path);
            },

            select(file) {
                const findIndex = _.findIndex(this.selectedFiles, file);

                if (findIndex >= 0) {
                    this.selectedFiles.splice(findIndex, 1);
                    return;
                }
                this.selectedFiles.push(file);
            },
        },

        watch: {
            currentPath() {
                this.multiSelecting = false;
                this.selectedFiles = [];
            },
        },
    };
</script>

<style scoped>
    .manual_upload > input[type='file'] {
        display: none;
    }

    .btn-small {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        padding-top: 0.3rem;
        fill: currentColor;
    }

    .rotate svg {
        animation: fa-spin 2s infinite linear;
    }

    @keyframes fa-spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(359deg);
        }
    }
</style>
