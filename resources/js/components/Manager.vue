<template>
    <div
        ref="fileManagerContainer"
        id="filemanager-manager-container"
        v-cloak
    >
        <div class="flex p-4 flex-wrap border-b border-gray-200 dark:border-gray-700">
            <OutlineButton
                @click="$emit('refresh')"
                class="mr-2"
                :class="{ rotate: loading }"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path class="heroicon-ui"
                        d="M6 18.7V21a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7.1A7 7 0 0 0 19 12a1 1 0 1 1 2 0 9 9 0 0 1-15 6.7zM18 5.3V3a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h2.9A7 7 0 0 0 5 12a1 1 0 1 1-2 0 9 9 0 0 1 15-6.7z" />
                </svg>
            </OutlineButton>

            <label
                v-if="buttons.upload_button"
                class="mr-2"
            >
                <DefaultButton>
                    {{ __('Upload') }}
                </DefaultButton>
                <input
                    type="file"
                    class="hidden"
                    multiple="true"
                    @change="uploadFilesByButton"
                />
            </label>

            <DefaultButton
                v-if="buttons.create_folder"
                @click="$emit('createFolder')"
                class="mr-2"
            >
                {{ __('Create folder') }}
            </DefaultButton>

            <OutlineButton
                v-if="view == 'list'"
                @click="viewAs('grid')"
                class="mr-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path class="heroicon-ui"
                        d="M5 3h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v4h4V5H5zm10-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v4h4V5h-4zM5 13h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2zm0 2v4h4v-4H5zm10-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2zm0 2v4h4v-4h-4z" />
                </svg>
            </OutlineButton>

            <OutlineButton
                v-if="view == 'grid'"
                @click="viewAs('list')"
                class="mr-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                    <path
                        d="M1 4h2v2H1V4zm4 0h14v2H5V4zM1 9h2v2H1V9zm4 0h14v2H5V9zm-4 5h2v2H1v-2zm4 0h14v2H5v-2z" />
                </svg>
            </OutlineButton>

            <OutlineButton
                v-if="buttons.select_multiple"
                @click="multiSelecting = !multiSelecting"
                class="mr-2"
            >
                <svg class="w-6 h-6 fill-current pt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <circle cx="6.5" cy="6.75" r="1.5" />
                    <path
                        d="M17.75 10.25A6.25 6.25 0 1024 16.5a6.257 6.257 0 00-6.25-6.25zm3.163 5.028L18.13 18.99a1.46 1.46 0 01-1.076.583h-.107a1.454 1.454 0 01-1.035-.434l-1.435-1.436a.75.75 0 011.06-1.06l1.234 1.234a.251.251 0 00.2.072.247.247 0 00.182-.1l2.563-3.475a.751.751 0 111.2.9z" />
                    <path
                        d="M0 3.25v7a1.981 1.981 0 001.957 2h7.858a1 1 0 000-2H2.5a.5.5 0 01-.5-.5l-.037-6a.5.5 0 01.5-.5H21.5a.5.5 0 01.5.5v3.5a1 1 0 002 0v-4a1.981 1.981 0 00-1.956-2H1.957A1.982 1.982 0 000 3.25z" />
                    <circle cx="12.5" cy="6.75" r="1.5" />
                </svg>
                <span v-if="selectedFiles.length > 0" class="ml-2 text-sm">
                    {{ selectedFiles.length }}
                </span>
            </OutlineButton>

            <DangerButton
                v-if="multiSelecting && selectedFiles.length > 0"
                @click="$emit('multiDelete')"
                class="mr-2"
            >
                <Icon type="trash" width="20" height="20" />
            </DangerButton>

            <SelectControl
                v-if="showFilters"
                class="mr-2"
                size="lg"
                :options="Object.keys(filters).map(key => ({ value: key, label: key }))"
                v-model:selected="filterBy"
                @input="filterBy = $event.target.value"
                @change="filterFiles"
            >
                <option value="">
                    {{ __('Filter by ...') }}
                </option>
            </SelectControl>

            <input
                class="form-control form-input form-input-bordered py-3 ml-auto"
                type="search"
                v-model="search"
                :placeholder="this.__('Search')"
                @input="searchItems"
            />
        </div>

        <div class="px-4 mt-4 mb-2">
            <nav class="bg-gray-100 dark:bg-gray-900 rounded-lg w-full py-3 px-4">
                <ol class="flex text-90">
                    <li>
                        <span class="font-bold cursor-pointer" @click="goToFolderNav(home)">
                            {{ __('Home') }}
                        </span>
                    </li>

                    <li v-if="pathsLength > 0">
                        <span class="px-2">/</span>
                    </li>

                    <template v-for="(folder, index) in path" :key="index">
                        <template v-if="checkIsLastItem(index)">
                            <li v-bind:key="index">
                                <span href="#">{{ folder.name }}</span>
                            </li>
                        </template>
                        <template v-else>
                            <li v-bind:key="index">
                                <span
                                    href="#"
                                    class="cursor-pointer font-bold"
                                    @click="goToFolder(folder.path)"
                                >
                                    {{ folder.name }}
                                </span>
                            </li>
                            <li v-bind:key="index+'_separator'">
                                <span class="px-2">/</span>
                            </li>
                        </template>
                    </template>
                </ol>
            </nav>
        </div>

        <div
            v-if="uploadingFiles"
            class="overflow-y-auto p-4"
        >
            <div class="h-40 flex flex-wrap items-center rounded-lg border-2 border-gray-200 dark:border-gray-700 border-dashed">
                <Heading level="1" class="w-full text-center py-4">
                    {{ __('Drop your files here!') }}
                </Heading>
            </div>
        </div>

        <div v-else class="p-2 overflow-y-auto flex flex-wrap">
            <Heading
                v-if="files.error"
                level="3"
                class="w-full text-center py-4 px-2"
            >
                {{ __('You don\'t have permissions to view this folder') }}
            </Heading>

            <div v-if="loading" class="flex items-center justify-center flex-grow py-4 px-2">
                <Loader />
            </div>

            <div
                v-else-if="!files.length"
                class="w-full h-full flex flex-col items-center justify-center py-4"
            >
                <Heading
                    level="3"
                    class="w-full text-center mb-4"
                >
                    {{ __(`No ${filter || 'files or folders'} in current directory`) }}
                </Heading>

                <DangerButton
                    v-if="buttons.delete_folder && !filter"
                    @click="removeDirectory"
                >
                    {{ __('Remove directory') }}
                </DangerButton>
            </div>

            <template v-if="!files.error">
                <template v-if="view == 'grid'">
                    <div
                        v-if="parent.id"
                        :class="filemanagerClass"
                        :key="parent.id"
                    >
                        <Folder
                            v-drag-and-drop:folder
                            :ref="'folder_' + parent.id"
                            :file="parent"
                            :data-key="parent.id"
                            :class="{'loading': loadingInfo}"
                            @goToFolderEvent="goToFolder"
                        />
                    </div>

                    <div
                        v-for="file in filteredFiles"
                        :key="file.id"
                        :class="filemanagerClass"
                    >
                        <template v-if="file.type == 'file'">
                            <ImageLoader
                                :ref="'file_' + file.id"
                                :file="file"
                                :key="file.id"
                                :data-key="file.id"
                                :view="view"
                                :multiSelecting="multiSelecting"
                                :selectedFiles="selectedFiles"
                                :deletePermission="buttons.delete_file"
                                :renamePermission="buttons.rename_file"
                                :class="{'loading': loadingInfo}"
                                @missing="(value) => missing = value"
                                @showInfo="showInfo"
                                @rename="rename"
                                @delete="deleteData"
                                @select="select"
                            />
                        </template>
                        <template v-if="file.type == 'dir'">
                            <Folder
                                :ref="'folder_' + file.id"
                                :file="file"
                                :key="file.id"
                                :data-key="file.id"
                                :view="view"
                                :multiSelecting="multiSelecting"
                                :selectedFiles="selectedFiles"
                                :deletePermission="buttons.delete_folder"
                                :renamePermission="buttons.rename_folder"
                                :class="{'loading': loadingInfo}"
                                @goToFolderEvent="goToFolder"
                                @rename="rename"
                                @delete="deleteData"
                                @select="select"
                            />
                        </template>
                    </div>
                </template>

                <div class="p-2 w-full" v-else-if="view == 'list'">
                    <table class="w-full table-default" v-if="files.length > 0">
                        <thead>
                            <tr>
                                <th
                                    width="30"
                                    v-if="multiSelecting"
                                    class="text-center p-2 whitespace-nowrap uppercase text-gray-500 text-xs tracking-wide"
                                ></th>
                                <th width="50" class="text-center p-2 whitespace-nowrap uppercase text-gray-500 text-xs tracking-wide"></th>
                                <th class="p-2 whitespace-nowrap uppercase text-gray-500 text-xs tracking-wide">
                                    {{ __('Name') }}
                                </th>
                                <th class="text-center p-2 whitespace-nowrap uppercase text-gray-500 text-xs tracking-wide">
                                    {{ __('Size') }}
                                </th>
                                <th class="text-center p-2 whitespace-nowrap uppercase text-gray-500 text-xs tracking-wide">
                                    {{ __('Last Modification') }}
                                </th>
                                <th class="text-center p-2 whitespace-nowrap uppercase text-gray-500 text-xs tracking-wide"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="parent.id">
                                <Folder
                                    :ref="'folder_' + parent.id"
                                    :key="parent.id"
                                    :data-key="parent.id"
                                    :file="parent"
                                    :view="view"
                                    :multiSelecting="multiSelecting"
                                    :class="{'loading': loadingInfo}"
                                    @goToFolderEvent="goToFolder"
                                />
                            </template>

                            <template v-for="file in filteredFiles">
                                <template v-if="file.type == 'dir'">
                                    <Folder
                                        :ref="'folder_' + file.id"
                                        :file="file"
                                        :key="file.id"
                                        :data-key="file.id"
                                        :view="view"
                                        :multiSelecting="multiSelecting"
                                        :selectedFiles="selectedFiles"
                                        :deletePermission="buttons.delete_folder"
                                        :renamePermission="buttons.rename_folder"
                                        :class="{'loading': loadingInfo}"
                                        @goToFolderEvent="goToFolder"
                                        @rename="rename"
                                        @delete="deleteData"
                                        @select="select"
                                    />
                                </template>
                                <template v-if="file.type == 'file'">
                                    <ImageLoader
                                        :ref="'file_' + file.id"
                                        :file="file"
                                        :key="file.id"
                                        :data-key="file.id"
                                        :view="view"
                                        :multiSelecting="multiSelecting"
                                        :selectedFiles="selectedFiles"
                                        :deletePermission="buttons.delete_file"
                                        :renamePermission="buttons.rename_file"
                                        :class="{'loading': loadingInfo}"
                                        @missing="(value) => missing = value"
                                        @showInfo="showInfo"
                                        @rename="rename"
                                        @delete="deleteData"
                                        @select="select"
                                    />
                                </template>
                            </template>
                        </tbody>
                    </table>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';
    import filesize from 'filesize';
    import MD5 from 'md5';
    import api from '../api';
    import ImageLoader from '../modules/ImageLoader';
    import Folder from '../modules/Folder';
    import { DragAndDrop } from '../tools/DragAndDrop';

    export default {
        components: {
            ImageLoader,
            Folder,
        },

        props: {
            files: {
                default: () => [],
                required: true,
            },
            path: {
                default: () => [],
                required: true,
            },
            current: {
                type: String,
                default: '/',
                required: true,
            },
            parent: {
                type: Object,
                required: true,
            },
            loading: {
                type: Boolean,
                default: false,
                required: true,
            },
            popupLoaded: {
                type: Boolean,
                default: false,
                required: false,
            },
            home: {
                type: String,
                required: false,
                default: '/',
            },
            search: {
                type: String,
                required: false,
                default: '',
            },
            filter: {
                type: String,
                required: false,
            },
            filters: {
                type: Array,
                required: false,
                default: () => [],
            },
            multiSelecting: {
                type: Boolean,
                default: false,
                required: false,
            },
            selectedFiles: {
                type: Array,
                default: () => [],
                required: false,
            },
            buttons: {
                default: () => [],
                required: true,
            },
        },

        data: () => ({
            view: 'grid',
            info: {},
            activeInfo: false,
            eventsLoaded: false,
            cssDragAndDrop: null,
            filesToUpload: [],
            filesFromDrop: [],
            filesDropProcessed: false,
            loadingInfo: false,
            busy: false,
            currentDraggedFile: null,
            uploadingFiles: false,
            firstUploadFolder: null,

            search: '',
            filterBy: '',
            filteredExtensions: [],
            showFilters: false,
        }),

        directives: {
            'drag-and-drop': DragAndDrop,
        },

        methods: {
            viewAs(type) {
                this.view = type;
                localStorage.setItem('nova-filemanager-view', type);
            },

            goToFolder(path) {
                this.$emit('goToFolderManager', path);
            },

            goToFolderNav(path) {
                this.$emit('goToFolderManagerNav', path);
            },

            checkIsLastItem(index) {
                return _.size(this.path) == parseInt(index) + 1 ? true : false;
            },

            removeDirectory() {
                return api.removeDirectory(this.current).then(result => {
                    if (result == true) {
                        Nova.success(this.__('Folder removed successfully'));
                        this.$emit('goToFolderManager', this.getParentFolder());
                    } else {
                        Nova.error(this.__('Error removing the folder. Please check permissions'));
                    }
                });
            },

            showInfo(file) {
                file.loading = true;
                return api
                    .getInfo(file.path)
                    .then(result => {
                        this.$emit('showInfoItem', result);
                        file.loading = false;
                    })
                    .catch(error => {
                        file.loading = false;
                        let errorMessage = this.__('Error opening the file. Check your logs');
                        if (error.response.data) {
                            errorMessage = error.response.data.message;
                        }

                        Nova.error(errorMessage);
                    });
            },

            closePreview() {
                this.activeInfo = false;
                this.info = {};
            },

            refresh() {
                this.$emit('refresh');
            },

            selectFile(file) {
                this.$emit('selectFile', file);
            },

            setDragAndDropEvents() {
                if (this.buttons.upload_drag == false) {
                    return false;
                }

                let filemanagerContainer = document.querySelector('#filemanager-manager-container');

                filemanagerContainer.addEventListener('dragenter', e => {
                    e.preventDefault();
                    if (this.currentDraggedFile === null) {
                        this.uploadingFiles = true;
                        this.cssDragAndDrop = 'inside';

                        let dropperContainer = document.querySelector('.drop-files');
                        this.droppedListener(dropperContainer);
                    }
                });

                filemanagerContainer.addEventListener('dragleave', e => {
                    e.preventDefault();
                    this.uploadingFiles = false;
                    this.cssDragAndDrop = 'outside';
                });

                filemanagerContainer.addEventListener('dragover', e => {
                    e.preventDefault();
                    if (this.currentDraggedFile === null) {
                        this.uploadingFiles = true;
                        this.cssDragAndDrop = 'inside';
                        let dropperContainer = document.querySelector('.drop-files');
                        this.droppedListener(dropperContainer);
                    }
                });
            },

            droppedListener(element) {
                if (element) {
                    element.removeEventListener('drop', this.droppedListener);
                    element.addEventListener('drop', this.dropNewFiles, false);
                }
            },

            async dropNewFiles(e) {
                e.preventDefault();
                this.cssDragAndDrop = 'drop';
                this.uploadingFiles = false;

                let files = await this.getFilesAsync(e.dataTransfer);

                this.uploadFiles(files);
            },

            async getFilesAsync(dataTransfer) {
                const files = [];
                const folders = [];

                this.firstUploadFolder = null;
                for (let i = 0; i < dataTransfer.items.length; i++) {
                    let item = dataTransfer.items[i];
                    let entry = item.webkitGetAsEntry();

                    if (entry.isDirectory) {
                        if (this.firstUploadFolder == null) {
                            this.firstUploadFolder = entry.name;
                        }

                        if (item.kind === 'file') {
                            if (typeof item.webkitGetAsEntry === 'function') {
                                let entryContent = await this.readEntryContentAsync(entry);
                                folders.push(...entryContent);
                            }
                            let file = item.getAsFile();
                            if (file) {
                                files.push(file);
                            }
                        }
                    } else {
                        let file = item.getAsFile();
                        if (file) {
                            files.push(file);
                        }
                    }
                }

                return { files: files, folders: folders };
            },

            readEntryContentAsync(entry) {
                return new Promise(resolve => {
                    let reading = 0;
                    const contents = [];
                    readEntry(entry);
                    function readEntry(entry) {
                        if (isFile(entry)) {
                            reading++;
                            entry.file(file => {
                                reading--;
                                file.filepath = entry.fullPath.replace('/' + entry.name, '');
                                contents.push(file);
                                if (reading === 0) {
                                    resolve(contents);
                                }
                            });
                        } else if (isDirectory(entry)) {
                            readReaderContent(entry.createReader());
                        }
                    }
                    function readReaderContent(reader) {
                        reading++;
                        reader.readEntries(function (entries) {
                            reading--;
                            for (const entry of entries) {
                                readEntry(entry);
                            }
                            if (reading === 0) {
                                resolve(contents);
                            }
                        });
                    }
                    function isDirectory(entry) {
                        return entry.isDirectory;
                    }
                    function isFile(entry) {
                        return entry.isFile;
                    }
                });
            },

            uploadFilesByButton(e)
            {
                this.uploadFiles({ files: Array.from(e.target.files) });
            },

            uploadFiles(data) {
                let files = this.formatFiles(data.files || []);
                let folders = this.formatFiles(data.folders || []);

                if (files.length > 0) {
                    this.$emit('uploadFiles', files, 'files');
                }

                if (folders.length > 0) {
                    this.$emit('uploadFiles', folders, 'folders', this.firstUploadFolder);
                }
            },

            formatFiles(files) {
                let arrayFiles = [];

                files.forEach(file => {
                    if (file.name != '.DS_Store') {
                        arrayFiles.push({
                            id: MD5(file.name),
                            preview: this.getPreview(file),
                            type: file.type,
                            name: file.name,
                            size: filesize(file.size),
                            upload: true,
                            progress: 0,
                            error: false,
                            file: file,
                        });
                    }
                });

                return arrayFiles;
            },

            getPreview(file) {
                if (this.isImage(file)) {
                    return URL.createObjectURL(file);
                }

                return file.name.split('.').pop();
            },

            isImage(file) {
                return file.type.includes('image'); //returns true or false
            },

            moveFile(oldPath, newPath) {
                return api
                    .moveFile(oldPath, newPath)
                    .then(result => {
                        if (result.success == true) {
                            this.refresh();
                            Nova.success(this.__('File moved successfully'));
                        } else {
                            Nova.error(this.__('Error opening the file. Check your permissions'));
                        }
                    })
                    .catch(error => {
                        Nova.error(error.response.data.message);
                    });
            },

            getFileById(type, id) {
                if (id == 'folder_back') {
                    return this.$refs[type + '_' + id];
                }

                let found = this.files.find(file => file.id == id);

                if (found) {
                    return this.$refs[type + '_' + id][0];
                }
            },

            getParentFolder() {
                let pathData = this.current.split('/');
                pathData.pop();

                return pathData.join('/');
            },

            rename(type, path) {
                this.$emit('rename', type, path);
            },

            deleteData(type, path) {
                this.$emit('delete', type, path);
            },

            select(file) {
                this.$emit('select', file);
            },

            filterFiles() {
                let extensions = _.get(this.filters, this.filterBy);

                if (extensions == null) {
                    this.filteredExtensions = [];
                }

                if (extensions != null && extensions.length > 0) {
                    this.filteredExtensions = extensions;
                }
            },

            searchItems: _.debounce(function (e) {
                this.search = e.target.value;
            }, 300),
        },

        watch: {
            filters() {
                if (this.filters) {
                    let size = _.size(this.filters);
                    if (size > 1) {
                        this.showFilters = true;
                        return true;
                    }
                }

                this.showFilters = false;
            },
        },

        created() {
            if (localStorage.getItem('nova-filemanager-view')) {
                const view = localStorage.getItem('nova-filemanager-view');

                if (['grid', 'list'].includes(view)) {
                    this.view = view;
                } else {
                    localStorage.setItem('nova-filemanager-view', 'grid');
                }
            }
        },

        updated () {
            //
        },

        mounted() {
            if (!this.eventsLoaded) {
                this.$nextTick(function () {
                    setTimeout(() => {
                        this.setDragAndDropEvents();
                        // this.dragFilesEvents();
                        this.eventsLoaded = true;
                    }, 500);
                });
            }
        },

        computed: {
            pathsLength() {
                return _.size(this.path);
            },

            filesCount() {
                return _.size(this.files);
            },

            filemanagerClass() {
                if (this.view == 'grid') {
                    return 'w-1/2 md:w-1/6 px-2 mb-3';
                } else {
                    return 'w-full px-2 mb-3';
                }
            },

            filemanagerIconClass() {
                if (this.view == 'grid') {
                    return 'h-40';
                } else {
                    return '';
                }
            },

            filteredFiles() {
                let filtered = this.files;

                if (this.search) {
                    filtered = this.files.filter(m => m.name.toLowerCase().indexOf(this.search) > -1);
                }

                if (this.showFilters && this.filteredExtensions.length > 0) {
                    filtered = _.filter(filtered, file => {
                        if (file.type == 'dir') {
                            return true;
                        }

                        return _.includes(this.filteredExtensions, file.ext.toLowerCase());
                    });
                }

                return filtered;
            },
        },
    };
</script>

<style>
    @media(min-width:768px) {
        .md\:w-1\/6 {
            width: 16.6666666667%;
        }
    }

    .h-40 {
        height: 10rem;
    }

    .border-dashed {
        border-style: dashed;
    }
</style>
