<template>
    <BaseModal :modal="modal">
        <template #header>
            {{ __("Delete") }}:

            <div class="font-bold ml-3">
                {{ subject.name }}
            </div>
        </template>

        <div class="p-6">
            <template v-if="isFolder">
                <p>
                    {{ __("Are you sure you want to remove this folder?") }}
                </p>

                <p class="text-sm mt-2">
                    {{
                        __(
                            "Remember: The folder and all his contents will be delete from your storage"
                        )
                    }}
                </p>
            </template>

            <template v-else>
                <p>
                    {{ __("Are you sure you want to remove this file?") }}
                </p>

                <p class="text-sm mt-2">
                    {{
                        __(
                            "Remember: The file will be delete from your storage"
                        )
                    }}
                </p>
            </template>
        </div>

        <template #footer>
            <div class="flex items-center ml-auto">
                <CancelButton
                    component="button"
                    type="button"
                    dusk="cancel-action-button"
                    class="ml-auto mr-3"
                    @click.prevent="close"
                />

                <LoadingButton
                    ref="confirmButton"
                    type="submit"
                    component="DangerButton"
                    dusk="confirm-button"
                    :disabled="loading"
                    :loading="loading"
                    @click.prevent="confirmDelete"
                >
                    <template v-if="loading">
                        {{ __("Deleting") }}
                    </template>

                    <template v-else>
                        {{ __("Delete") }}
                    </template>
                </LoadingButton>
            </div>
        </template>
    </BaseModal>
</template>

<script setup>
import { ref, computed } from "vue";
import BaseModal from "./BaseModal.vue";
import useBrowserStore from "@/stores/browser";

const store = useBrowserStore();

const props = defineProps({
    modal: {
        type: Object,
        required: true,
    },
});

const error = ref();
const loading = ref(false);

const subject = computed(() => props.modal.payload);
const isFolder = computed(
    () => !subject.value.type && !subject.value.lastModifiedAt
);

function close() {
    store.closeModal(props.modal.id);

    error.value = null;
}

function confirmDelete() {
    if (isFolder.value) {
        deleteFolder();
    } else {
        deleteFile();
    }
}

function deleteFolder() {
    return Nova.request()
        .post("/nova-vendor/nova-filemanager/folders/delete", {
            disk: store.disk,
            path: subject.value.path,
        })
        .then((r) =>
            processResponse(r.response && r.response.data ? r.response.data : r)
        )
        .catch((r) =>
            processResponse(r.response && r.response.data ? r.response.data : r)
        );
}

function deleteFile() {
    return Nova.request()
        .post("/nova-vendor/nova-filemanager/files/delete", {
            disk: store.disk,
            path: subject.value.path,
        })
        .then((r) =>
            processResponse(r.response && r.response.data ? r.response.data : r)
        )
        .catch((r) =>
            processResponse(r.response && r.response.data ? r.response.data : r)
        );
}

function processResponse(result) {
    if (!result.errors || result.errors.length <= 0) {
        error.value = null;

        close();

        Nova.success(result.message);

        store.unselect(props.modal.payload)
        store.closeModals();
        store.fetch();
    } else {
        error.value = result.message;

        Nova.error("Error:" + " " + result.message);
    }
}
</script>
