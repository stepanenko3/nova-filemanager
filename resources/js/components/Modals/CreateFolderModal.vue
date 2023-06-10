<template>
    <BaseModal :modal="modal">
        <template #header>
            <div>
                {{ __("Create folder") }}
            </div>
        </template>

        <div class="p-6">
            <input
                type="text"
                class="w-full h-full form-control form-input form-input-bordered py-3"
                :placeholder="__('Write a folder name')"
                v-model="folder"
                autofocus
                required
                @keyup.enter="createFolder"
            />

            <p class="mt-2 text-red-500" v-if="error">
                {{ error }}
            </p>

            <div class="flex items-center mt-6">
                <CancelButton
                    component="button"
                    type="button"
                    dusk="cancel-action-button"
                    class="mr-3"
                    @click.prevent="close"
                />

                <LoadingButton
                    ref="confirmButton"
                    type="submit"
                    dusk="confirm-button"
                    :disabled="loading"
                    :loading="loading"
                    @click.prevent="createFolder"
                >
                    <template v-if="loading">
                        {{ __("Creating") }}
                    </template>

                    <template v-else>
                        {{ __("Create") }}
                    </template>
                </LoadingButton>
            </div>
        </div>
    </BaseModal>
</template>

<script setup>
import { ref } from "vue";
import BaseModal from "./BaseModal.vue";
import useBrowserStore from "../../stores/browser.ts";

const props = defineProps({
    modal: {
        type: Object,
        required: true,
    },
});

const store = useBrowserStore();

const folder = ref();
const error = ref();
const loading = ref(false);

function createFolder() {
    if (!folder.value) {
        error.value = "The folder name is required";

        return false;
    }

    loading.value = true;

    const processResponse = (result) => {
        folder.value = null;
        loading.value = false;

        if (!result.errors || result.errors.length <= 0) {
            error.value = null;

            close();

            Nova.success(result.message);

            store.fetch();
        } else {
            error.value = result.message;

            Nova.error("Error:" + " " + result.message);
        }
    };

    return Nova.request()
        .post("/nova-vendor/nova-filemanager/folders/create", {
            disk: store.disk,
            path: `${store.path}/${folder.value}`,
        })
        .then((r) =>
            processResponse(r.response && r.response.data ? r.response.data : r)
        )
        .catch((r) =>
            processResponse(r.response && r.response.data ? r.response.data : r)
        );
}

function close() {
    store.closeModal(props.modal.id);

    error.value = null;
    folder.value = null;
}
</script>
