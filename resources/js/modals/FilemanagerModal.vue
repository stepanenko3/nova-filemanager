<template>
    <Modal :show="active" maxWidth="">
        <div
            class="mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            style="max-width: 1200px"
        >
            <ModalHeader class="flex items-center justify-between">
                <div>
                    {{ __('FileManager') }}
                </div>

                <OutlineButton @click="closeModal">
                    <Icon type="x" width="16" height="16" />
                </OutlineButton>
            </ModalHeader>

            <Manager
                ref="manager"
                :home="home"
                :files="files"
                :path="path"
                :current="currentPath"
                :parent="parent"
                :selector="value"
                :popupLoaded="true"
                :loading="loadingfiles"
                :search="search"
                :filter="filter"
                :filters="filteredExtensions"
                :buttons="buttons"
                @goToFolderManager="goToFolder"
                @goToFolderManagerNav="goToFolderNav"
                @refresh="refreshCurrent"
                @selectFile="setFileValue"
                @showInfoItem="showInfoItem"
                @uploadFiles="uploadFiles"
                @rename="openRenameModal"
                @delete="openDeleteModal"
            />
        </div>
    </Modal>

    <RenameModal ref="renameModal" @refresh="refreshCurrent" />

    <ConfirmDeleteModal ref="confirmDelete" @refresh="refreshCurrent" />
</template>

<script>
    import _ from 'lodash';
    import URI from 'urijs';
    import api from '../api';
    import Manager from '../components/Manager';
    import Upload from '../components/Upload';
    import UploadProgress from '../components/UploadProgress';

    import ConfirmDeleteModal from './ConfirmDeleteModal';
    import RenameModal from './RenameModal';

    export default {
        props: {
            resource: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            active: {
                type: Boolean,
                default: false,
                required: true,
            },
            value: {
                type: String,
                required: true,
            },
            currentPath: {
                type: String,
                required: true,
            },
            defaultFolder: {
                type: String,
                required: true,
            },
            home: {
                type: String,
                required: false,
                default: '/',
            },
            filter: {
                type: String,
                required: false,
                default: null,
            },
            buttons: {
                default: () => [],
                required: true,
            },
            rules: {
                type: Array,
                default: () => [],
                required: false,
            },
        },

        components: {
            ConfirmDeleteModal,
            RenameModal,

            Manager,
            Upload,
            UploadProgress,
        },

        data: () => ({
            loaded: false,
            loadingfiles: false,
            activeDisk: null,
            activeDiskBackups: [],
            backupStatusses: [],
            showCreateFolder: false,
            files: [],
            parent: {},
            path: [],
            filesToUpload: [],
            firstTime: true,
            search: '',
            filters: [],
            filterBy: '',
            showFilters: false,
        }),

        computed: {
            filteredExtensions() {
                const filter = _.get(this.filters, this.filterBy);

                if (filter) {
                    return filter;
                }

                return [];
            },
        },

        methods: {
            getData(folder) {
                this.files = [];
                this.parent = {};
                this.path = [];
                this.loadingfiles = true;

                api.getDataField(this.resource, this.name, folder, this.filter)
                    .then((result) => {
                        this.files = result.files;
                        this.path = result.path;
                        this.filters = result.filters;

                        if (folder != this.defaultFolder) {
                            this.parent = result.parent;
                        }

                        this.loadingfiles = false;
                    })
                    .catch(() => {
                        this.loadingfiles = false;
                        this.filters = [];
                        Nova.error(this.__('Error reading the folder. Please check your logs'));
                    });
            },

            showModalCreateFolder() {
                this.$emit('open-modal');
            },

            refreshCurrent() {
                this.getData(this.currentPathFolder);
            },

            goToFolder(path) {
                let pathDefault = this.defaultFolder.split('/');

                if (path == pathDefault[0]) {
                    this.getData(this.defaultFolder);
                    this.currentPathFolder = this.defaultFolder;
                } else {
                    this.getData(path);
                    this.currentPathFolder = path;
                }
            },

            goToFolderNav(path) {
                this.getData(path);
                this.currentPathFolder = path;
                if (this.currentPathFolder == '/') {
                    // history.pushState(null, null, '?path=' + path);
                } else {
                    // history.pushState(null, null, '?path=' + path);
                }
            },

            closeModal() {
                this.$emit('close-modal');
            },

            setFileValue(file) {
                this.closeModal();
                this.$emit('setFileValue', file);
            },

            uploadFilesByButton(e) {
                this.$refs.manager.uploadFiles({ files: Array.from(e.target.files) });
            },

            showInfoItem(item) {
                this.$emit('showInfoItem', item);
            },

            uploadFiles(files, type) {
                this.$emit('uploadFiles', files, type);
            },

            openRenameModal(type, path) {
                this.$refs.renameModal.openModal(type, path);
            },

            openDeleteModal(type, path) {
                this.$refs.confirmDelete.openModal(type, path);
            },

            searchItems: _.debounce(function (e) {
                this.search = e.target.value;
            }, 300),
        },

        watch: {
            active(val) {
                if (val) {
                    const currentUrl = new URI();

                    if (currentUrl.hasQuery('path')) {
                        const params = currentUrl.query(true);

                        this.currentPath = params.path;
                    }

                    this.getData(this.currentPath);
                }
            },

            currentPathFolder(val) {
                this.$emit('update-current-path', val);
            },

            filters() {
                if (this.filters) {
                    const size = _.size(this.filters);

                    if (size > 1) {
                        this.showFilters = true;

                        return true;
                    }
                }

                this.showFilters = false;
            },
        },
    };
</script>

<style scoped>
    .buttons-actions {
        padding-left: 1rem;
        padding-right: 1rem;
        border-left: 1px solid rgb(221, 221, 221);
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }

    .btn-small {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        padding-top: 0.3rem;
        fill: currentColor;
    }

    .manual_upload>input[type='file'] {
        display: none;
    }
</style>
