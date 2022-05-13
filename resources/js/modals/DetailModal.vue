<template>
    <Modal :show="active" @closing="handleClose" @close-via-escape="handleClose" maxWidth="">
        <div
            class="mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            style="max-width: 1080px"
        >
            <ModalHeader class="flex items-center justify-between">
                <div>
                    {{ __('Preview of') }}
                    <span class="text-primary-500">
                        {{ info.name }}
                    </span>
                </div>

                <OutlineButton @click="closePreview">
                   <Icon type="x" width="16" height="16" />
                </OutlineButton>
            </ModalHeader>

            <div class="flex flex-col md:flex-row">
                <DetailView class="w-full md:w-3/5 flex-shrink-0 " :field="info" />
                <div class="w-full md:w-2/5 p-4 bg-gray-100 dark:bg-gray-900">
                    <div class="w-full mb-2">
                        <div class="mb-1">{{ __('Name') }}:</div>
                        <div class="w-full mt-1 flex items-center">
                            <span
                                class="flex-grow bg-white dark:bg-gray-800 rounded-lg px-2 py-1 truncate"
                                v-if="!editingName"
                            >
                                {{ info.name }}
                            </span>

                            <template v-if="buttons.rename_file">
                                <Icon
                                    v-if="!editingName"
                                    width="16"
                                    height="16"
                                    type="pencil-alt"
                                    @click="editName"
                                    class="ml-2 cursor-pointer hover:opacity-50 flex-shrink-0"
                                />

                                <template v-else-if="editingName">
                                    <input
                                        type="text"
                                        v-bind:ref="'inputName'"
                                        v-model="nameNoExtension"
                                        class="w-full bg-white dark:bg-gray-800 rounded-lg px-2 py-1"
                                    />

                                    <Icon
                                        width="16"
                                        height="16"
                                        type="check-circle"
                                        @click="rename"
                                        class="ml-2 text-green-500 cursor-pointer hover:opacity-50 flex-shrink-0"
                                    />

                                    <Icon
                                        width="16"
                                        height="16"
                                        type="x-circle"
                                        @click="editingName = !editingName"
                                        class="ml-2 cursor-pointer hover:opacity-50 flex-shrink-0"
                                    />
                                </template>
                            </template>
                        </div>
                    </div>

                    <div class="w-full flex items-center mb-2" v-if="info.mime">
                        <span class="mr-2"> {{ __('Mime Type') }}: </span>
                        <span class="bg-white dark:bg-gray-800 rounded-lg px-2 py-1 break-all">
                            {{ info.mime }}
                        </span>
                    </div>

                    <div class="w-full flex items-center mb-2" v-if="info.date">
                        <span class="mr-2"> {{ __('Last Modification') }}: </span>
                        <span class="bg-white dark:bg-gray-800 rounded-lg px-2 py-1">
                            {{ info.date }}
                        </span>
                    </div>

                    <div class="w-full flex items-center mb-2" v-if="info.size">
                        <span class="mr-2"> {{ __('Size') }}: </span>
                        <span class="bg-white dark:bg-gray-800 rounded-lg px-2 py-1">
                            {{ info.size }}
                        </span>
                    </div>

                    <div class="w-full flex items-center mb-2" v-if="info.dimensions">
                        <span class="mr-2"> {{ __('Dimensions') }}: </span>
                        <span class="bg-white dark:bg-gray-800 rounded-lg px-2 py-1">
                            {{ info.dimensions }}
                        </span>
                    </div>

                    <div class="w-full mb-4" v-if="info.url">
                        <div class="mb-1">{{ __('Url') }}:</div>
                        <div class="w-full mt-1 flex items-center">
                            <div
                                class="flex-grow bg-white dark:bg-gray-800 rounded-lg px-2 py-1 truncate"
                            >
                                {{ info.url }}
                            </div>

                            <Icon
                                width="16"
                                height="16"
                                type="clipboard"
                                @click="copyTextToClipboard"
                                class="ml-2 cursor-pointer hover:opacity-50 flex-shrink-0"
                            />
                        </div>
                    </div>

                    <div class="grid md:grid-cols-12 gap-4">
                        <DefaultButton class="md:col-span-4" v-if="popup" @click="selectFile">
                            <Icon
                                type="check-circle"
                                class="mr-1"
                                width="18"
                                height="18"
                            />

                            {{ __('Choose') }}
                        </DefaultButton>

                        <a
                            class="md:col-span-4 flex"
                            v-if="buttons.download_file"
                            :href="`/nova-vendor/stepanenko3/nova-filemanager/actions/download-file?file=${this.info.path}`"
                        >
                            <DefaultButton class="flex-grow">
                                <Icon
                                    type="download"
                                    class="mr-1"
                                    width="18"
                                    height="18"
                                />

                                {{ __('Download') }}
                            </DefaultButton>
                        </a>

                        <ConfirmationButton
                            class="md:col-span-4"
                            v-if="buttons.delete_file"
                            :messages="[__('Delete'), __('Are you sure?'), __('Deleting...')]"
                            @success="removeFile"
                        >
                            <template v-slot:start>
                                <Icon type="trash" class="mr-1" width="18" height="18" />
                            </template>
                            <template v-slot:finish>
                                <Icon type="check" class="mr-1" width="18" height="18" />
                            </template>
                        </ConfirmationButton>

                        <ConfirmationButton
                            class="md:col-span-4"
                            v-if="buttons.duplicate_file || true"
                            :messages="[__('Duplicate'), __('Are you sure?'), __('Duplicating...')]"
                            @success="duplicate"
                        >
                            <template v-slot:start>
                                <Icon type="duplicate" class="mr-1" width="18" height="18" />
                            </template>
                            <template v-slot:finish>
                                <Icon type="check" class="mr-1" width="18" height="18" />
                            </template>
                        </ConfirmationButton>
                    </div>
                </div>
            </div>
        </div>
    </Modal>
</template>

<script>
    import api from '../api';
    import MimeIconsEnum from '../tools/MimeIconsEnum'
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
            popup: {
                type: Boolean,
                default: false,
                required: false,
            },
            buttons: {
                default: () => [],
                required: true,
            },
        },

        components: {
            ConfirmationButton: ConfirmationButton,
            DetailView: DetailView,
        },

        emits: ['refresh', 'closePreview', 'rename', 'selectFile'],

        data() {
            return {
                loaded: false,
                currentInfo: {},
                zipLoaded: false,
                cmOptions: {
                    tabSize: 2,
                    theme: 'dracula',
                    lineNumbers: true,
                    line: true,
                    readOnly: true,
                },
                editingName: false,
                nameNoExtension: null,
                nameWidth: null,
                inputElement: null,
                correctName: null,
                mimeIcons: MimeIconsEnum,
            };
        },

        methods: {
            closePreview() {
                this.correctName = null;
                this.editingName = false;
                this.$emit('closePreview', true);
            },

            removeFile() {
                this.closePreview();

                return api.removeFile(this.info.path).then((result) => {
                    if (result == true) {
                        Nova.success(this.__('File removed successfully'));
                        this.$emit('refresh');
                    } else {
                        Nova.error(this.__('Error removing the file. Please check permissions'));
                    }
                });
            },

            duplicate() {
                this.closePreview();

                return api.duplicate(this.info.path).then((result) => {
                    if (result.success == true) {
                        this.$emit('refresh');
                        Nova.success(this.__('File duplicated successfully'));
                    } else {
                        Nova.error(this.__('Error duplicating the file. Please check permissions'));
                    }
                });
            },

            rename() {
                this.correctName = this.nameNoExtension + '.' + this.info.ext;

                return api.rename(this.info.path, this.correctName).then((result) => {
                    if (result.success == true) {
                        this.editingName = false;
                        this.$emit('rename', result.data);
                        this.$emit('refresh');
                        Nova.success(this.__('File renamed successfully'));
                    } else {
                        Nova.error(this.__('Error renaming the file. Please check permissions'));
                    }
                });
            },

            editName() {
                this.editingName = true;
            },

            selectFile() {
                this.closePreview();
                this.$emit('selectFile', this.info);
            },

            handleClose() {
                this.closePreview();
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

        mounted() {
            this.loaded = false;
            this.$nextTick(function () {
                //
            });
        },

        watch: {
            'info.type': function (type) {
                if (type == 'audio') {
                    this.$nextTick(function () {
                        //
                    });
                }

                if (type == 'video') {
                    this.$nextTick(function () {
                        //
                    });
                }

                if (type == 'text') {
                    this.$nextTick(function () {
                        //
                    });
                }

                if (type == 'pdf') {
                    this.$nextTick(function () {
                        //
                    });
                }

                if (type == 'zip') {
                    this.$nextTick(function () {
                        this.info.source = JSON.parse(this.info.source);
                        this.zipLoaded = true;
                    });
                }

                this.zipLoaded = false;
            },

            'info.name': function (name) {
                if (name) {
                    this.nameNoExtension = name.split('.').slice(0, -1).join('.');
                }
            },

            nameNoExtension: function (name) {
                if (name) {
                    this.nameWidth = (name.length + 1) * 7;
                }
            },
        },
    };
</script>

<style>
    .break-all {
        word-break: break-all;
    }

    @media (min-width: 768px) {
        .md\:w-2\/5 {
            width: 40%;
        }
    }

    .gap-4 {
        gap: 1rem;
    }
</style>
