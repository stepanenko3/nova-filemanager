<template>
    <Modal :show="active" @closing="handleClose" @close-via-escape="handleClose" class="z-100">
        <div class="mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <ModalHeader v-text="__('Create folder')" />

            <div class="p-6">
                <input
                    type="text"
                    class="w-full h-full form-control form-input form-input-bordered py-3"
                    :placeholder="__('Write a folder name')"
                    v-model="folderName"
                    autofocus
                    required
                    @keyup.enter="createFolder"
                />
                <p class="my-2 text-danger" v-if="error">
                    {{ errorMsg }}
                </p>
            </div>

            <ModalFooter>
                <div class="flex items-center ml-auto">
                    <CancelButton
                        component="button"
                        type="button"
                        dusk="cancel-action-button"
                        class="ml-auto mr-3"
                        @click.prevent="cancelCreate"
                    />

                    <LoadingButton
                        ref="confirmButton"
                        type="submit"
                        dusk="confirm-button"
                        :disabled="isSaving"
                        :loading="isSaving"
                        @click.prevent="createFolder"
                    >
                        <template v-if="isSaving">
                            {{ __('Creating') }}
                        </template>
                        <template v-else>
                            {{ __('Create') }}
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
            active: {
                type: Boolean,
                default: false,
                required: true,
            },
            current: {
                type: String,
                default: '/',
                required: true,
            },
        },

        data: () => ({
            folderName: null,
            error: false,
            errorMsg: '',
            isSaving: false,
        }),

        methods: {
            createFolder() {
                if (this.folderName == null) {
                    this.errorMsg = this.__('The folder name is required');
                    this.error = true;
                    return false;
                }

                return api.createFolder(this.folderName, this.current).then((result) => {
                    this.error = false;
                    this.folderName = null;
                    if (result == true) {
                        this.$emit('closeCreateFolderModal', true);
                        Nova.success(this.__('Folder created successfully'));
                        this.$emit('refresh', true);
                    } else {
                        this.error = true;
                        if (result.error) {
                            this.errorMsg = result.error;
                            Nova.error(this.__('Error:') + ' ' + result.error);
                        } else {
                            this.errorMsg = this.__('The folder name is required');
                            Nova.error(this.__('Error creating the folder'));
                        }
                    }
                });
            },

            cancelCreate() {
                this.error = false;
                this.folderName = null;
                this.$emit('closeCreateFolderModal', true);
            },

            handleClose() {
                this.cancelCreate();
            },
        },
    };
</script>
