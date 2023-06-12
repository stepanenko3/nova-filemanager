<template>
    <BaseModal :modal="modal">
        <template #header>
            <div>
                {{ __(isFolder ? "Rename folder" : "Rename file") }}
            </div>
        </template>

        <template v-if="isFolder">
            <div class="p-6">
                <input
                    ref="input"
                    type="text"
                    class="w-full h-full form-control rounded-lg form-input form-input-bordered py-3"
                    :placeholder="name"
                    :value="name"
                    autofocus
                    required
                />
            </div>
        </template>

        <template v-else>
            <div class="p-6">
                <div class="flex w-full relative">
                    <input
                        ref="input"
                        type="text"
                        class="w-full h-full form-control rounded-lg form-input form-input-bordered py-3"
                        :placeholder="nameWithoutExtension"
                        :value="nameWithoutExtension"
                        autofocus
                        required
                    />

                    <span
                        class="flex items-center leading-normal bg-gray-50 dark:bg-gray-900 ml-3 rounded-lg px-3 whitespace-no-wrap text-grey-dark text-sm"
                    >
                        {{ extension }}
                    </span>
                </div>

                <p class="my-2 text-red-500" v-if="error">
                    {{ error }}
                </p>
            </div>
        </template>

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
                dusk="confirm-button"
                :disabled="loading"
                :loading="loading"
                @click.prevent="confirmRename"
            >
                <template v-if="loading">
                    {{ __("Renaming") }}
                </template>
                <template v-else>
                    {{ __("Rename") }}
                </template>
            </LoadingButton>
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

const subject = computed(() => props.modal.payload);
const isFolder = computed(
    () => !subject.value.type && !subject.value.lastModifiedAt
);
const name = computed(() => subject.value.name.replace(/^.*[\\/]/, ""));
const extension = computed(() => {
    if (!isFolder.value) {
        var re = /(?:\.([^.]+))?$/;

        let ext = re.exec(name.value);

        if (ext) {
            return ext[0];
        }
    }

    return "";
});

const nameWithoutExtension = computed(() =>
    name.value.replace(extension.value, "")
);

const error = ref();
const input = ref();
const loading = ref(false);

function close() {
    store.closeModal(props.modal.id);

    error.value = null;
}

function confirmRename() {
    const name = input.value.value;

    if (!name) {
        error.value = "The name is required";

        return false;
    }

    let nameToSave = isFolder.value ? name : name + extension.value;

    if (!nameToSave) {
        error.value = "The name is required";

        return false;
    }

    const newPath = (
        subject.value.path.substring(0, subject.value.path.lastIndexOf("/")) +
        "/" +
        nameToSave
    ).replace(/^\/+/, "");

    return Nova.request()
        .post(
            `/nova-vendor/nova-file-manager/${
                isFolder.value ? "folders" : "files"
            }/rename`,
            {
                disk: store.disk,
                oldPath: subject.value.path,
                newPath: newPath,
            }
        )
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

        Nova.success(result.message);

        store.unselect(props.modal.payload);
        store.closeModals();
        store.fetch();
    } else {
        error.value = result.message;

        Nova.error("Error:" + " " + result.message);
    }
}
</script>
