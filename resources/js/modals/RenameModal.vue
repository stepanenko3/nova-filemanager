<template>
    <Modal :show="active" maxWidth="2xl" @closing="handleClose" @close-via-escape="handleClose">
        <div class="mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <template v-if="type == 'folder'">
                <ModalHeader v-text="__('Rename folder')" />

                <div class="p-6">
                    <input
                        type="text"
                        class="w-full h-full form-control form-input form-input-bordered py-3"
                        :placeholder="name"
                        v-model="name"
                        autofocus
                        required
                        @keyup.enter="renamePath"
                    />
                </div>
            </template>

            <template v-else>
                <ModalHeader v-text="__('Rename file')" />

                <div class="p-6">
                    <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                        <input
                            type="text"
                            class="flex-shrink flex-grow flex-auto h-full form-control form-input form-input-bordered-left py-3"
                            :placeholder="nameWithoutExtension"
                            v-model="nameWithoutExtension"
                            autofocus
                            required
                            @keyup.enter="renamePath"
                        />

                        <div class="flex -mr-px">
                            <span
                                class="flex items-center leading-normal bg-50 rounded rounded-l-none form-input-bordered-right px-3 whitespace-no-wrap text-grey-dark text-sm"
                            >
                                {{ extension }}
                            </span>
                        </div>
                    </div>

                    <p class="my-2 text-danger" v-if="error">
                        {{ errorMsg }}
                    </p>
                </div>
            </template>

            <ModalFooter>
                <div class="flex items-center ml-auto">
                    <CancelButton
                        component="button"
                        type="button"
                        dusk="cancel-action-button"
                        class="ml-auto mr-3"
                        @click.prevent="cancelRename"
                    />

                    <LoadingButton
                        ref="confirmButton"
                        type="submit"
                        dusk="confirm-button"
                        :disabled="isSaving"
                        :loading="isSaving"
                        @click.prevent="renamePath"
                    >
                        <template v-if="isSaving">
                            {{ __('Renaming') }}
                        </template>
                        <template v-else>
                            {{ __('Rename') }}
                        </template>
                    </LoadingButton>
                </div>
            </ModalFooter>
        </div>
    </Modal>
</template>

<script>
    import api from '../api';

    export default {
        props: {
            //
        },

        data: () => ({
            active: false,
            name: null,
            type: null,
            path: null,
            error: false,
            errorMsg: '',
            isSaving: false,
            nameWithoutExtension: null,
        }),

        methods: {
            openModal(type, path) {
                this.type = type;
                this.path = path;
                this.name = path.replace(/^.*[\\/]/, '');
                this.active = true;
            },

            renamePath() {
                let nameToSave = null;

                if (this.type == 'folder') {
                    if (this.name == null) {
                        this.error = true;
                        return false;
                    }
                    nameToSave = this.name;
                } else {
                    if (this.nameWithoutExtension == null) {
                        this.error = true;
                        return false;
                    }

                    nameToSave = this.nameWithoutExtension + this.extension;
                }

                if (!nameToSave) {
                    this.error = true;
                    return false;
                }

                return api.rename(this.path, nameToSave).then((result) => {
                    this.error = false;
                    this.name = null;
                    if (result.success == true) {
                        Nova.success(this.__('Renamed successfully'));
                        this.$emit('refresh', true);
                        this.cancelRename();
                    } else {
                        this.error = true;
                        if (result.error) {
                            this.errorMsg = result.error;
                            Nova.error(this.__('Error:') + ' ' + result.error);
                        } else {
                            this.errorMsg = this.__('The name is required');
                            Nova.error(this.__('The name is required'));
                        }
                    }
                });
            },

            cancelRename() {
                this.error = false;
                this.name = null;
                this.type = null;
                this.path = null;
                this.active = false;
                // this.$emit('closeCreateFolderModal', true);
            },

            handleClose() {
                this.cancelRename();
            },
        },

        computed: {
            extension() {
                if (this.type != 'folder') {
                    var re = /(?:\.([^.]+))?$/;

                    let ext = re.exec(this.name);

                    if (ext) {
                        return ext[0];
                    }
                }

                return '';
            },
        },

        watch: {
            extension(value) {
                if (value) {
                    let tempName = this.name;
                    this.nameWithoutExtension = tempName.replace(value, '');
                }
            },
        },
    };
</script>

<style>
    /* Scoped Styles */

    .form-input-bordered-left {
        background-color: var(--white);
        border-width: 1px;
        border-color: var(--60);
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        color: var(--80);
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    }

    .form-input-bordered-right {
        border-width: 1px;
        border-color: var(--60);
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        color: var(--80);
        border-left: 0;
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    }
</style>
