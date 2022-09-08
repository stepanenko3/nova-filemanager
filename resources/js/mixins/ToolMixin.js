import _ from 'lodash';
import api from '../api';

import CreateFolderModal from '../modals/CreateFolderModal';
import ConfirmDeleteModal from '../modals/ConfirmDeleteModal';
import ConfirmMultiDeleteModal from '../modals/ConfirmMultiDeleteModal';
import RenameModal from '../modals/RenameModal';
import DetailModal from '../modals/DetailModal';
import ConfirmDuplicateModal from '../modals/ConfirmDuplicateModal';

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
    },

    data: () => ({
        loading: true,
        path: '/',
        search: '',
        disk: null,
        files: {},
        breadcrumbs: [],
        directories: [],
        filter: null,
        filters: [],
        multiSelecting: false,
        selectedFiles: [],
        pageLimits: [],
        info: null,

        card: true,
        savePath: true,
    }),

    async created() {
        const params = new URLSearchParams(window.location.search);

        if (params) {
            if (params.has('path')) this.path = params.get('path');
            if (params.has('disk')) this.disk = params.get('disk');
            if (params.has('page')) this.files.currentPage = params.get('page');
            if (params.has('perPage')) this.files.perPage = params.get('perPage');
            if (params.has('search')) this.search = params.get('search');
            if (params.has('filter')) this.filter = params.get('filter');
        }

        if (localStorage.getItem('nova-filemanager-view')) {
            const view = localStorage.getItem('nova-filemanager-view');

            if (['grid', 'list'].includes(view)) {
                this.view = view;
            } else {
                localStorage.setItem('nova-filemanager-view', 'grid');
            }
        }

        await this.refresh();
    },

    methods: {
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

        getData(
            path = '/',
            disk = null,
            page = 1,
            perPage = 10,
            search = null,
            filter = null,
        ) {
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

                    if (this.savePath) {
                        const obj = {
                            path: this.path,
                            disk: this.disk,
                            page: this.files.currentPage,
                            perPage: this.files.perPage,
                            search: this.search,
                            filter: this.filter,
                        };

                        const asArray = Object.entries(obj);

                        const filtered = asArray.filter(([key, value]) => value !== null && value !== undefined && value !== '');

                        const justStrings = Object.fromEntries(filtered);

                        const params = new URLSearchParams(justStrings);

                        history.pushState(null, null, `?${params.toString()}`);
                    }
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

        refreshCurrent() {
            this.closePreview();
            this.refreshMultiSelected();
            this.refresh();
        },

        showInfo(item) {
            this.info = item;
        },

        closePreview() {
            this.info = null;
        },

        openModalCreateFolder() {
            this.$refs.createFolderModal.openModal();
        },

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
    },
}
