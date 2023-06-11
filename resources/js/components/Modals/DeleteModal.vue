<template>
    <BaseModal :modal="modal">
        <template #header>
            <div>{{ __("Delete") }}</div>
        </template>

        <div class="p-6">
            <template v-if="modal.payload.type === DELETE_STATE.FOLDER">
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

            <template v-else-if="modal.payload.type === DELETE_STATE.FILE">
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

            <template v-else-if="modal.payload.type === DELETE_STATE.FILES">
                <p>
                    {{ __("Are you sure you want to remove this files?") }}
                </p>

                <p class="text-sm mt-2">
                    {{
                        __(
                            "Remember: The files will be delete from your storage"
                        )
                    }}
                </p>
            </template>
        </div>

        <template #footer>
            <CancelButton
                component="button"
                type="button"
                dusk="cancel-action-button"
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
        </template>
    </BaseModal>
</template>

<script setup>
import { ref } from "vue";
import BaseModal from "./BaseModal.vue";
import useBrowserStore from "@/stores/browser";
import { DELETE_STATE } from "@/constants";

const store = useBrowserStore();

const props = defineProps({
    modal: {
        type: Object,
        required: true,
    },
});

const error = ref();
const loading = ref(false);

function close() {
    store.closeModal(props.modal.id);

    error.value = null;
}

async function confirmDelete() {
    loading.value = true;

    return run()
        .then((r) =>
            processResponse(r.response && r.response.data ? r.response.data : r)
        )
        .catch((r) =>
            processResponse(r.response && r.response.data ? r.response.data : r)
        );
}

async function run() {
    switch (props.modal.payload.type) {
        case DELETE_STATE.FOLDER:
            return store.deleteFolder(
                props.modal.payload[DELETE_STATE.FOLDER].path
            );

        case DELETE_STATE.FILE:
            return store.deleteFile(
                props.modal.payload[DELETE_STATE.FILE].path
            );

        case DELETE_STATE.FILES:
            return store.deleteFiles(
                props.modal.payload[DELETE_STATE.FILES].map(
                    (value) => value.path
                )
            );
    }
}

function processResponse(result) {
    loading.value = false;

    if (!result.errors || result.errors.length <= 0) {
        error.value = null;

        close();

        Nova.success(result.message);

        store.closeModals();
        store.fetch();
    } else {
        error.value = result.message;

        Nova.error("Error:" + " " + result.message);
    }
}
</script>
