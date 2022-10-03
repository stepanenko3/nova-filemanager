<template>
    <Modal :show="active" @closing="cancelCreate" @close-via-escape="cancelCreate" class="z-100">
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
                    {{ error }}
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
import api from "../api";

export default {
    props: {
        disk: {
            type: String,
            default: "",
            required: true,
        },
        path: {
            type: String,
            default: "/",
            required: true,
        },
    },

    data: () => ({
        active: false,
        folderName: null,
        error: null,
        isSaving: false,
    }),

    methods: {
        openModal() {
            this.active = true;
        },

        createFolder() {
            if (this.folderName == null) {
                this.error = this.__("The folder name is required");

                return false;
            }

            const processResponse = (result) => {
                this.folderName = null;

                if (!result.errors || result.errors.length <= 0) {
                    this.error = null;

                    this.$emit("close", true);

                    Nova.success(result.message);

                    this.$emit("refresh", true);
                } else {
                    this.error = result.message;

                    Nova.error(this.__("Error:") + " " + result.message);
                }
            };

            return api
                .folderCreate(this.disk, `${this.path}/${this.folderName}`)
                .then((r) =>
                    processResponse(
                        r.response && r.response.data ? r.response.data : r
                    )
                )
                .catch((r) =>
                    processResponse(
                        r.response && r.response.data ? r.response.data : r
                    )
                );
        },

        cancelCreate() {
            this.error = null;
            this.folderName = null;

            this.$emit("close", true);
        },
    },
};
</script>
