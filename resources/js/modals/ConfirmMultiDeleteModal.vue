<template>
    <Modal :show="active" @closing="handleClose" @close-via-escape="handleClose">
        <div class="mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <ModalHeader v-text="__('Remove selected?')" />

            <div class="p-6">
                <p>
                    {{ __('Are you sure you want to remove selected files or folders?') }}
                </p>

                <p class="text-sm mt-2">
                    {{ __('Remember: The file and folder and all his contents will be delete from your storage') }}
                </p>

                <div class="text-sm mt-2">
                    <p v-for="file in selectedFiles">
                        {{ file.path }}
                    </p>
                </div>
            </div>

            <ModalFooter>
                <div class="flex items-center ml-auto">
                    <CancelButton
                        component="button"
                        type="button"
                        dusk="cancel-action-button"
                        class="ml-auto mr-3"
                        @click.prevent="handleClose"
                    />

                    <LoadingButton
                        ref="confirmButton"
                        component="DangerButton"
                        type="submit"
                        dusk="confirm-button"
                        :disabled="loading"
                        :loading="loading"
                        @click.prevent="deleteData"
                    >
                        <template v-if="loading">
                            {{ __('Deleting') }}
                        </template>

                        <template v-else>
                            {{ __('Delete') }}
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
            disk: {
                type: String,
                default: '',
                required: true,
            },
            selectedFiles: {
                type: Array,
                required: true,
            },
        },

        data: () => ({
            active: false,
            error: null,
            loading: false,
        }),

        methods: {
            openModal() {
                this.active = true;
            },

            handleClose() {
                this.active = false;
            },

            async deleteData() {
                this.loading = true;

                for (const file of this.selectedFiles) {
                    if (this.type == 'folder') {
                        await this.deleteFolder(file.path);
                    } else {
                        await this.deleteFile(file.path);
                    }
                }

                this.loading = false;
                this.$emit('refresh', true);
                this.handleClose();
            },

            deleteFolder(path) {
                return api
                    .folderDelete(this.disk, path)
                    .then((r) =>
                        this.processResponse(
                            r.response && r.response.data ? r.response.data : r
                        )
                    )
                    .catch((r) =>
                        this.processResponse(
                            r.response && r.response.data ? r.response.data : r
                        )
                    );
            },

            deleteFile(path) {
                return api
                    .fileDelete(this.disk, path)
                    .then((r) =>
                        this.processResponse(
                            r.response && r.response.data ? r.response.data : r
                        )
                    )
                    .catch((r) =>
                        this.processResponse(
                            r.response && r.response.data ? r.response.data : r
                        )
                    );
            },

            processResponse(result) {
                if (!result.errors || result.errors.length <= 0) {
                    this.error = null;

                    this.handleClose();

                    Nova.success(result.message);
                } else {
                    this.error = result.message;

                    Nova.error(this.__('Error:') + ' ' + result.message);
                }
            },
        },
    };
</script>
