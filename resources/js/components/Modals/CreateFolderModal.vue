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
                class="appearance-none w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 h-10 px-3 rounded-lg"
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
                <Button theme="gray" class="mr-3" @click.prevent="close">
                    {{ __("Cancel") }}
                </Button>
                <Button
                    type="submit"
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
                </Button>
            </div>
        </div>
    </BaseModal>
</template>

<script setup>
import { ref } from "vue";
import Button from "../Elements/Button.vue";
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

        error.value =
            !result.errors || result.errors.length <= 0 ? null : result.message;
    };

    return store
        .createFolder(`${store.path}/${folder.value}`)
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
