<template>
    <div
        class="flex items-center"
    >
        <div
            class="md:mr-2 inline-flex items-center rounded-lg px-2 h-8 bg-white dark:bg-gray-800 shadow"
        >
            <ToolbarButton
                @click.prevent="$emit('refresh')"
                type="refresh"
                :class="{ disabled: loading }"
                v-tooltip="__('Refresh')"
            />

            <ToolbarButton
                @click.prevent="$refs.uploadFileInput.click()"
                type="upload"
                v-tooltip="__('Upload')"
            />

            <input
                ref="uploadFileInput"
                type="file"
                class="hidden"
                multiple="true"
                @change="uploadFilesByButton"
            />

            <ToolbarButton
                @click.prevent="$emit('createFolder')"
                type="folder-add"
                v-tooltip="__('Create folder')"
            />

            <ToolbarButton
                v-if="view == 'list'"
                @click.prevent="viewAs('grid')"
                type="view-grid"
                v-tooltip="__('View as Grid')"
            />

            <ToolbarButton
                v-if="view == 'grid'"
                @click.prevent="viewAs('list')"
                type="view-list"
                v-tooltip="__('View as List')"
            />

            <ToolbarButton
                @click.prevent="$emit('update:multiSelecting', !multiSelecting)"
                type="clipboard-check"
                :class="{ 'text-green-500': multiSelecting }"
                v-tooltip="__('Select Multiply')"
            >
                <span v-if="selectedFiles.length > 0 && false">
                    {{ selectedFiles.length }}
                </span>
            </ToolbarButton>

            <ToolbarButton
                v-if="multiSelecting && selectedFiles.length > 0"
                @click.prevent="$emit('multiDelete')"
                type="trash"
                class="text-red-500"
                v-tooltip="__('Delete selected')"
            />
        </div>

        <Dropdown
            v-if="disks.length"
            class="hover:bg-gray-100 dark:hover:bg-gray-600 rounded md:mr-2"
        >
            <DropdownTrigger class="toolbar-button whitespace-nowrap px-2">
                {{ disk }}
            </DropdownTrigger>

            <template #menu>
                <DropdownMenu
                    class="divide-y divide-gray-100 dark:divide-gray-800 divide-solid"
                    width="auto"
                >
                    <DropdownMenuItem
                        v-for="singleDisk in disks"
                        :key="singleDisk"
                        class="px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                        :class="{ active: disk === singleDisk }"
                        @click="$emit('update:disk', singleDisk)"
                    >
                        {{ singleDisk }}
                    </DropdownMenuItem>
                </DropdownMenu>
            </template>
        </Dropdown>

        <Dropdown
            v-if="pageLimits.length > 0 && files.total > 0"
            class="hover:bg-gray-100 dark:hover:bg-gray-600 rounded md:mr-2"
        >
            <DropdownTrigger class="toolbar-button whitespace-nowrap px-2">
                {{ files.perPage }}
            </DropdownTrigger>

            <template #menu>
                <DropdownMenu
                    class="divide-y divide-gray-100 dark:divide-gray-800 divide-solid"
                    width="auto"
                >
                    <DropdownMenuItem
                        v-for="singleLimit in pageLimits"
                        :key="singleLimit"
                        class="px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                        :class="{ active: files.perPage === singleLimit }"
                        @click="$emit('update:perPage', singleLimit)"
                    >
                        {{ singleLimit }}
                    </DropdownMenuItem>
                </DropdownMenu>
            </template>
        </Dropdown>

        <Dropdown
            v-if="Object.keys(filters).length"
            class="hover:bg-gray-100 dark:hover:bg-gray-600 rounded md:mr-2"
        >
            <DropdownTrigger class="toolbar-button whitespace-nowrap px-2">
                {{ filter || __('Filter by ...') }}
            </DropdownTrigger>

            <template #menu>
                <DropdownMenu
                    class="divide-y divide-gray-100 dark:divide-gray-800 divide-solid"
                    width="auto"
                >
                    <DropdownMenuItem
                        class="px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                        :class="{ active: !filter }"
                        @click="$emit('update:filter', null)"
                    >
                        {{ __('Filter by ...') }}
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        v-for="singleFilter in Object.keys(filters)"
                        :key="singleFilter"
                        class="px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                        :class="{ active: filter === singleFilter }"
                        @click="$emit('update:filter', singleFilter)"
                    >
                        {{ singleFilter }}
                    </DropdownMenuItem>
                </DropdownMenu>
            </template>
        </Dropdown>

        <div class="relative flex items-center h-9 ml-auto">
            <Icon
                type="search"
                width="20"
                class="absolute ml-2 text-gray-400"
                :style="{ top: '6px' }"
            />

            <RoundInput
                class="appearance-none g-white dark:bg-gray-800 shadow h-8 w-full dark:focus:bg-gray-800"
                :placeholder="__('Search')"
                spellcheck="false"
                :aria-label="__('Search')"
                type="text"
                @input="e => searchItems(e.target.value)"
            />
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';
    import ToolbarButton from './ToolbarButton'

    export default {
        components: {
            ToolbarButton,
        },

        props: {
            card: {
                type: Boolean,
                default: () => false,
                required: false,
            },
            search: {
                type: String,
                default: () => '',
                required: false,
            },
            disk: {
                type: String,
                default: () => '',
                required: true,
            },
            files: {
                type: Array,
                default: () => [],
                required: true,
            },
            disks: {
                type: Array,
                required: false,
                default: () => [],
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
            selectedFiles: {
                type: Array,
                required: false,
                default: () => [],
            },
            pageLimits: {
                type: Array,
                required: false,
                default: () => [],
            },
            view: {
                type: String,
                required: false,
                default: () => '',
            },
        },

        methods: {
            viewAs(type) {
                this.$emit('update:view', type);

                localStorage.setItem('nova-filemanager-view', type);
            },

            searchItems: _.debounce(function (value) {
                this.$emit("update:search", value)
            }, 300),

            uploadFilesByButton(e)
            {
                this.$emit('uploadFiles', Array.from(e.target.files));
            },
        },
    };
</script>
