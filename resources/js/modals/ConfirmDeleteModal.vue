<template>
    <Modal :show="active" @closing="handleClose" @close-via-escape="handleClose">
        <div class="mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <ModalHeader
                v-text="`${type == 'folder' ? __('Remove folder') : __('Remove file')}: ${name}`"
            />

            <div class="p-6">
                <template v-if="type == 'folder'">
                    <p>
                        {{ __('Are you sure you want to remove this folder?') }}
                    </p>

                    <p class="text-sm mt-2">
                        {{ __('Remember: The folder and all his contents will be delete from your storage') }}
                    </p>
                </template>

                <template v-else>
                    <p>
                        {{ __('Are you sure you want to remove this file?') }}
                    </p>

                    <p class="text-sm mt-2">
                        {{ __('Remember: The file will be delete from your storage') }}
                    </p>
                </template>
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
                        type="submit"
                        component="DangerButton"
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
    },

    data: () => ({
        active: false,
        name: null,
        type: null,
        path: null,
        error: null,
        loading: false,
    }),

    methods: {
        openModal(type, path) {
            this.type = type;
            this.path = path;
            this.name = path.replace(/^.*[\\/]/, '');
            this.active = true;
        },

        handleClose() {
            this.active = false;
        },

        deleteData() {
            if (this.type == 'folder') {
                this.deleteFolder();
            } else {
                this.deleteFile();
            }
        },

        deleteFolder() {
            return api
                .folderDelete(this.disk, this.path)
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

        deleteFile() {
            return api
                .fileDelete(this.disk, this.path)
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
            this.name = null;

            if (!result.errors || result.errors.length <= 0) {
                this.error = null;

                this.handleClose();

                Nova.success(result.message);

                this.$emit('refresh', true);
            } else {
                this.error = result.message;

                Nova.error(this.__('Error:') + ' ' + result.message);
            }
        },
    },
};
</script>
