<template>
    <div
        v-if="active"
        class="fixed inset-0 z-50 bg-gray-500 dark:bg-gray-900 opacity-75"
        @click.prevent="handleClose"
    />

    <div
        class="filemanager-preview flex flex-col justify-start bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
        :class="{
            'filemanager-preview--active': active,
            'filemanager-preview--full': full,
        }"
    >
        <div class="flex items-center px-2 py-1">
            <ToolbarButton @click.prevent="handleClose">
                <Icon type="x" width="18" height="18" />
            </ToolbarButton>

            <ToolbarButton
                @click.prevent="full = !full"
                :class="{ 'text-green-500': full }"
            >
                <Icon type="arrows-expand" width="18" height="18" />
            </ToolbarButton>

            <div class="flex items-center ml-auto">
                <ToolbarButton
                    class="md:col-span-4 text-green-500"
                    v-if="popup"
                    @click="select"
                >
                    <Icon
                        type="check-circle"
                        width="18"
                        height="18"
                    />
                </ToolbarButton>

                <a
                    class="md:col-span-4 flex"
                    :href="`/nova-vendor/nova-filemanager/files/download?disk=${this.disk}&path=${this.info.path}`"
                >
                    <ToolbarButton class="flex-grow">
                        <Icon type="download" width="18" height="18" />
                    </ToolbarButton>
                </a>

                <ToolbarButton
                    @click.prevent="rename"
                >
                    <Icon type="pencil-alt" width="18" height="18" />
                </ToolbarButton>

                <ToolbarButton
                    @click.prevent="duplicate"
                >
                    <Icon type="duplicate" width="18" height="18" />
                </ToolbarButton>

                <ToolbarButton
                    @click.prevent="deleteFile"
                    class="text-red-500"
                >
                    <Icon type="trash" width="18" height="18" />
                </ToolbarButton>
            </div>
        </div>

        <div class="filemanager-preview__content" v-if="info">
            <div class="px-4 font-bold text-sm py-2">
                {{ info.name }}
            </div>

            <table class="table table-fixed text-left w-full">
                <tr v-if="info.mime">
                    <td class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900" style="width:115px">
                        {{ __('Mime') }}:
                    </td>
                    <td class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900 break-word whitespace-normal line-4" style="width: 100%">
                        {{ info.mime }}
                    </td>
                </tr>

                <tr v-if="info.lastModifiedReadable">
                    <td class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                        {{ __('Midified At') }}:
                    </td>
                    <td class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                        {{ info.lastModifiedReadable }}
                    </td>
                </tr>

                <tr v-if="info.sizeReadable">
                    <td class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                        {{ __('Size') }}:
                    </td>
                    <td class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                        {{ info.sizeReadable }}
                    </td>
                </tr>

                <template v-if="info.meta">
                    <tr v-if="info.meta.width && info.meta.height">
                        <td class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                            {{ __('Dimensions') }}:
                        </td>
                        <td class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                            {{ info.meta.width }}x{{ info.meta.height }}
                        </td>
                    </tr>

                    <tr v-if="info.meta.aspectRatio">
                        <td class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                            {{ __('Aspect Ratio') }}:
                        </td>
                        <td class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                            {{ info.meta.aspectRatio }}
                        </td>
                    </tr>
                </template>

                <tr v-if="info.url">
                    <td class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                        {{ __('Url') }}:
                    </td>
                    <td class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900 break-word whitespace-normal line-4">
                        <div class="inline-flex items-start leading-4">
                            <Icon
                                width="16"
                                height="16"
                                type="clipboard"
                                @click="copyTextToClipboard"
                                class="mr-2 cursor-pointer hover:opacity-50 flex-shrink-0"
                            />

                            <span>
                                {{ info.url }}
                            </span>
                        </div>
                    </td>
                </tr>
            </table>

            <DetailView class="w-full bg-gray-100 dark:bg-gray-900" :field="info" />
        </div>
    </div>
</template>

<script>
    import api from '../api';
    import MimeIconsEnum from '../tools/MimeIconsEnum'
    import ToolbarButton from '../components/ToolbarButton'
    import ConfirmationButton from '../components/ConfirmationButton'
    import DetailView from '../modules/DetailView'

    export default {
        props: {
            active: {
                type: Boolean,
                default: false,
                required: true,
            },
            info: {
                type: Object,
                default: function () {
                    return { name: '' };
                },
                required: true,
            },
            disk: {
                type: String,
                default: '',
                required: true,
            },
            popup: {
                type: Boolean,
                default: false,
                required: false,
            },
        },

        components: {
            ToolbarButton: ToolbarButton,
            ConfirmationButton: ConfirmationButton,
            DetailView: DetailView,
        },

        data() {
            return {
                full: false,
                mimeIcons: MimeIconsEnum,
            };
        },

        methods: {
            handleClose() {
                this.$emit('close', true);
            },

            rename() {
                this.$emit('rename', 'file', this.info.path);
            },

            deleteFile() {
                this.$emit('delete', 'file', this.info.path);
            },

            duplicate() {
                this.$emit('duplicate', 'file', this.info.path);
            },

            select() {
                this.handleClose();
                this.$emit('select', this.info);
            },

            fallbackCopyTextToClipboard(text) {
                var textArea = document.createElement('textarea');
                textArea.value = text;

                // Avoid scrolling to bottom
                textArea.style.top = '0';
                textArea.style.left = '0';
                textArea.style.position = 'fixed';

                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();

                let status = null;
                try {
                    var successful = document.execCommand('copy');
                    status = !!successful;

                    var msg = successful ? 'successful' : 'unsuccessful';
                    console.log('Fallback: Copying text command was ' + msg);
                } catch (err) {
                    status = false;
                    console.error('Fallback: Oops, unable to copy', err);
                }

                document.body.removeChild(textArea);
                return status;
            },

            copyTextToClipboard() {
                if (!navigator.clipboard) {
                    if (!this.fallbackCopyTextToClipboard(this.info.url)) return;

                    Nova.success(this.__('Text copied to clipboard'));
                }

                navigator.clipboard.writeText(this.info.url).then(
                    () => Nova.success(this.__('Text copied to clipboard')),
                    (err) => console.error('Async: Could not copy text: ', err)
                );
            },
        },
    };
</script>

<style>
    .filemanager-preview {
        position: fixed;
        top: 8px;
        right: 8px;
        height: calc(100% - 16px);
        width: 420px;
        max-width: calc(100% - 16px);
        z-index: 50;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transform: translate3d(32px, 0, 0);
        transition: transform .3s, opacity .3s, visibility .3s;
    }

    .filemanager-preview--active {
        opacity: 1;
        visibility: visible;
        pointer-events: all;
        transform: translate3d(0, 0, 0);
    }

    .filemanager-preview--full {
        width: calc(100% - 16px);
    }

    .filemanager-preview__content {
        overflow-y: auto;
        overflow-x: hidden;
        flex-shrink: 1;
        flex-grow: 1;
    }

    .z-50 {
        z-index: 50;
    }

    .table-fixed {
        table-layout: fixed;
    }

    .break-word {
        word-break: break-word;
    }

    .whitespace-normal {
        white-space: normal;
    }

    .leading-4 {
        line-height: 16px;
    }
</style>
