<template>
    <ManagerToolbar
        class="mb-4"
        :class="{ 'disabled': loading }"
        :card="card"
        :search="search"
        :disk="disk"
        :disks="disks"
        :filter="filter"
        :filters="filters"
        :loading="loading"
        :multiSelecting="multiSelecting"
        :selectedFiles="selectedFiles"
        :pageLimits="pageLimits"
        :view="view"
        :files="files"

        @refresh="refresh"
        @createFolder="$emit('createFolder')"
        @multiDelete="$emit('multiDelete')"
        @uploadFiles="uploadFiles"

        @update:search="$emit('update:search', $event)"
        @update:disk="$emit('update:disk', $event)"
        @update:filter="$emit('update:filter', $event)"
        @update:multiSelecting="$emit('update:multiSelecting', $event)"
        @update:perPage="$emit('update:perPage', $event)"
        @update:view="view = $event"
    />

    <nav
        class="mb-4 w-full"
        :class="{ 'disabled': loading }"
        v-if="breadcrumbs.length > 0"
    >
        <ol class="flex items-center text-xs">
            <li @click="goToFolder('/')" class="h-6 flex items-center cursor-pointer">
                <Icon type="home" width="16" height="16" />
            </li>

            <li v-if="breadcrumbs.length > 0">
                <span class="px-2">/</span>
            </li>

            <template v-for="part in breadcrumbs" :key="part.id">
                <template v-if="part.current">
                    <li v-bind:key="part.id">
                        <span href="#">{{ part.name }}</span>
                    </li>
                </template>
                <template v-else>
                    <li v-bind:key="part.id">
                        <span
                            href="#"
                            class="cursor-pointer font-bold"
                            @click="goToFolder(part.path)"
                        >
                            {{ part.name }}
                        </span>
                    </li>
                    <li v-bind:key="part.id + '_separator'">
                        <span class="px-2">/</span>
                    </li>
                </template>
            </template>
        </ol>
    </nav>

    <component
        :is="card ? 'Card' : null"
        class="relative overflow-hidden"

        @dragover.prevent="dragging = true"
        @dragleave.prevent="dragging = false"
        @drop.prevent="dropFiles"
    >
        <div
            class="absolute inset-0 flex items-center justify-center z-50 bg-white dark:bg-gray-800 pointer-events-none rounded-lg border-dashed border-2 border-gray-200 dark:border-gray-700"
            :class="{
                'hidden': !dragging,
            }"
        >
            <Icon type="upload" class="mr-4" width="48" height="48" />
            <span>
                Drop your files here
            </span>
        </div>

        <div
            v-if="loading"
            class="absolute inset-0 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center flex-grow z-50"
        >
            <Loader />
        </div>

        <div
            :class="{ 'p-4': card }"
        >
            <div
                v-if="!files.total && !directories.length"
                class="w-full h-full flex flex-col items-center justify-center py-4"
            >
                <Heading
                    level="3"
                    class="w-full text-center mb-4"
                >
                    {{ __(`No ${filter || 'files or folders'} in current directory`) }}
                </Heading>

                <DangerButton
                    v-if="!filter"
                    @click="removeDirectory"
                >
                    {{ __('Remove directory') }}
                </DangerButton>
            </div>

            <template v-else-if="view == 'grid'">
                <template v-if="directories.length > 0">
                    <Heading level="5" class="mb-2">
                        {{ __('Folders') }}
                    </Heading>

                    <div
                        class="grid md:grid-cols-4 gap-4"
                        :class="{ 'mb-4': files.total > 0 }"
                    >
                        <template
                            v-for="dir in directories"
                            :key="dir.id"
                        >
                            <Folder
                                :ref="'folder_' + dir.id"
                                :dir="dir"
                                :data-key="dir.id"
                                :view="view"
                                :multiSelecting="multiSelecting"
                                :selectedFiles="selectedFiles"
                                :class="{ 'loading': loading }"

                                @goToFolder="goToFolder"
                                @rename="rename"
                                @delete="deleteData"
                                @select="select"
                            />
                        </template>
                    </div>
                </template>

                <template v-if="files.total > 0">
                    <Heading level="5" class="mb-2">
                        {{ __('Files') }}
                    </Heading>

                    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <template
                            v-for="file in files.data"
                            :key="file.id"
                        >
                            <File
                                :ref="'file_' + file.id"
                                :file="file"
                                :data-key="file.id"
                                :view="view"
                                :multiSelecting="multiSelecting"
                                :selectedFiles="selectedFiles"
                                :class="{ 'loading': loading }"

                                @missing="(value) => missing = value"
                                @showInfo="showInfo"
                                @rename="rename"
                                @delete="deleteData"
                                @select="select"
                            />
                        </template>
                    </div>
                </template>
            </template>

            <div v-else-if="view == 'list'" class="w-full">
                <table class="w-full table-default">
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
                        <tr v-if="directories.length">
                            <th>
                                <Heading level="5" class="text-left">
                                    {{ __('Folders') }}
                                </Heading>
                            </th>
                            <th colspan="5"></th>
                        </tr>

                        <template
                            v-for="dir in directories"
                            :key="dir.id"
                        >
                            <Folder
                                :ref="'folder_' + dir.id"
                                :dir="dir"
                                :data-key="dir.id"
                                :view="view"
                                :multiSelecting="multiSelecting"
                                :selectedFiles="selectedFiles"
                                :class="{ 'loading': loading }"

                                @goToFolder="goToFolder"
                                @rename="rename"
                                @delete="deleteData"
                                @select="select"
                            />
                        </template>

                        <tr v-if="files.total">
                            <th>
                                <Heading level="5" class="text-left">
                                    {{ __('Files') }}
                                </Heading>
                            </th>
                            <th colspan="5"></th>
                        </tr>

                        <template
                            v-for="file in files.data"
                            :key="file.id"
                        >
                            <File
                                :ref="'file_' + file.id"
                                :file="file"
                                :data-key="file.id"
                                :view="view"
                                :multiSelecting="multiSelecting"
                                :selectedFiles="selectedFiles"
                                :class="{ 'loading': loading }"

                                @missing="(value) => missing = value"
                                @showInfo="showInfo"
                                @rename="rename"
                                @delete="deleteData"
                                @select="select"
                            />
                        </template>
                    </tbody>
                </table>
            </div>
        </div>

        <ManagerPagination
            :files="files"
            :loading="loading"
            @goToPageEvent="goToPage"
        />
    </component>
</template>

<script>
    import _ from 'lodash';
    import filesize from 'filesize';
    import MD5 from 'md5';
    import api from '../api';
    import File from '../modules/File';
    import Folder from '../modules/Folder';
    import ToolbarButton from './ToolbarButton'
    import ManagerToolbar from './ManagerToolbar'
    import ManagerPagination from './ManagerPagination'
    import NProgress from 'nprogress'

    export default {
        components: {
            File,
            Folder,
            ToolbarButton,
            ManagerToolbar,
            ManagerPagination,
        },

        props: {
            card: {
                type: Boolean,
                default: () => false,
                required: false,
            },
            path: {
                type: String,
                default: () => '',
                required: true,
            },
            disk: {
                type: String,
                default: () => '',
                required: true,
            },
            breadcrumbs: {
                type: Array,
                required: false,
                default: () => [],
            },
            directories: {
                type: Array,
                required: false,
                default: () => [],
            },
            search: {
                type: String,
                required: false,
                default: () => '',
            },
            filter: {
                type: String,
                required: false,
                default: () => '',
            },
            filters: {
                type: Array,
                required: false,
                default: () => [],
            },
            files: {
                type: Array,
                default: () => [],
                required: true,
            },
            pageLimits: {
                type: Array,
                default: () => [],
                required: true,
            },
            selectedFiles: {
                type: Array,
                default: () => [],
                required: false,
            },
            loading: {
                type: Boolean,
                default: () => false,
                required: true,
            },
            multiSelecting: {
                type: Boolean,
                default: () => false,
                required: false,
            },
        },

        data: () => ({
            view: 'grid',
            dragging: false,
            disks: [],
        }),

        methods: {
            goToFolder(path) {
                this.$emit('goToFolder', path);
            },

            removeDirectory() { // TODO: folderDelete
                return api.removeDirectory(this.current).then(result => {
                    if (result == true) {
                        Nova.success(this.__('Folder removed successfully'));
                        this.$emit('goToFolder', this.getParentFolder());
                    } else {
                        Nova.error(this.__('Error removing the folder. Please check permissions'));
                    }
                });
            },

            showInfo(file) {
                this.$emit('showInfo', file);
            },

            closePreview() {
                this.activeInfo = false;
                this.info = {};
            },

            refresh() {
                this.$emit('refresh');
            },

            goToPage(page) {
                this.$emit('goToPage', page);
            },

            selectFile(file) {
                this.$emit('selectFile', file);
            },

            async dropFiles(e) {
                this.dragging = false;

                await this.uploadFiles(e.dataTransfer.files);
            },

            async uploadFiles(files) {
                this.uploadedFilesCount = 0;

                if (files.length <= 0) {
                    return;
                }

                NProgress.set(0);

                const percentsPerFile = 100 / files.length;

                for (const file of files) {
                    await this.uploadFile(file, percentsPerFile);
                }

                NProgress.done();

                const message = `${this.__('Files uploaded')} ${this.uploadedFilesCount} of ${files.length}`;

                if (this.uploadedFilesCount >= files.length) {
                    Nova.success(message);
                } else {
                    Nova.error(message);
                }

                this.$emit('refresh', true);
            },

            uploadFile(file, percentsPerFile) {
                return api.fileUpload(this.disk, this.path, file, (e) => {
                    const fileProgress = parseInt(Math.round((e.loaded / e.total) * 100));

                    const progress = (this.uploadedFilesCount * percentsPerFile) + (percentsPerFile / 100 * fileProgress);

                    NProgress.set(progress / 100);
                })
                .then(() => this.uploadedFilesCount++);
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
        },

        async created() {
            await this.getDisks();

            if (localStorage.getItem('nova-filemanager-view')) {
                const view = localStorage.getItem('nova-filemanager-view');

                if (['grid', 'list'].includes(view)) {
                    this.view = view;
                } else {
                    localStorage.setItem('nova-filemanager-view', 'grid');
                }
            }
        },
    };
</script>

<style>
.grid {
    display: grid;
}

.gap-4 {
    gap: 1rem;
}

.grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.border-dashed {
    border-style: dashed;
}

@media(min-width: 768px) {
    .md\:grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .md\:grid-cols-5 {
        grid-template-columns: repeat(5, minmax(0, 1fr));
    }
}
</style>
