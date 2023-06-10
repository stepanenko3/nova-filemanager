<template>
    <div
        class="relative h-full"
        :class="{
            disabled: store.isProcessing,
        }"
    >
        <Transition>
            <div
                v-if="store.loading"
                class="absolute rounded-lg inset-0 bg-white dark:bg-gray-800 flex items-center justify-center flex-grow z-50"
                style="--tw-bg-opacity: 0.5"
            >
                <Loader />
            </div>
        </Transition>

        <Transition>
            <BrowserDropzone v-if="dragging" />
        </Transition>

        <div
            @dragover.prevent.stop="dragging = true"
            @dragleave.prevent.stop="dragging = false"
            @drop.prevent.stop="dropFiles"
            class="flex flex flex-col h-full"
        >
            <BrowserToolbar
                @confirmSelect="confirmSelect"
                @changeFile="changeFile"
            />

            <div class="p-6 flex-grow overflow-x-hidden overflow-y-auto">
                <BrowserBreadcrumbs
                    v-if="store.data?.breadcrumbs?.length > 0"
                />

                <BrowserContent />

                <BrowserPagination
                    v-if="store.data?.pagination?.last_page > 1"
                />
            </div>
        </div>

        <TransitionGroup name="list">
            <template v-for="modal in store.modals" :key="modal.id">
                <QueueModal v-if="modal.name === MODALS.QUEUE" :modal="modal" />
                <CreateFolderModal
                    v-else-if="modal.name === MODALS.CREATE_FOLDER"
                    :modal="modal"
                />
                <BrowserDetailModal
                    v-else-if="modal.name === MODALS.DETAIL"
                    :modal="modal"
                />
                <RenameModal
                    v-else-if="modal.name === MODALS.RENAME"
                    :modal="modal"
                />
                <CropModal
                    v-else-if="modal.name === MODALS.CROP"
                    :modal="modal"
                />
                <DeleteModal
                    v-else-if="modal.name === MODALS.DELETE"
                    :modal="modal"
                />
                <BrowserSelectedModal
                    v-else-if="modal.name === MODALS.SELECTED"
                    :modal="modal"
                    @confirmSelect="confirmSelect"
                />
            </template>
        </TransitionGroup>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import BrowserToolbar from "./BrowserToolbar.vue";
import BrowserPagination from "./BrowserPagination.vue";
import BrowserContent from "./BrowserContent.vue";
import BrowserDetailModal from "./Modals/BrowserDetailModal.vue";
import BrowserBreadcrumbs from "./BrowserBreadcrumbs.vue";
import CreateFolderModal from "./Modals/CreateFolderModal.vue";
import RenameModal from "./Modals/RenameModal.vue";
import DeleteModal from "./Modals/DeleteModal.vue";
import CropModal from "./Modals/CropModal.vue";
import BrowserSelectedModal from "./Modals/BrowserSelectedModal.vue";
import useBrowserStore from "../stores/browser";
import { MODALS } from "@/constants";
import BrowserDropzone from "./BrowserDropzone.vue";
import dataTransferFiles from "@/helpers/data-transfer";
import QueueModal from "./Modals/QueueModal.vue";
import { onKeyStroke } from "@vueuse/core";

const store = useBrowserStore();

const props = defineProps({
    selecting: {
        type: Boolean,
        default: () => false,
    },
    multiple: {
        type: Boolean,
        default: () => false,
    },
});

const emit = defineEmits(["confirmSelect"]);

// HOOKS
onMounted(() => {
    store.init();
    store.selecting = props.selecting;
    store.multiple = props.multiple;
});

onKeyStroke("Escape", (e) => {
    if (store.modals.length > 0 && !store.isProcessing) {
        e.preventDefault();
        e.stopPropagation();

        store.modals.pop();
    }
});

function confirmSelect() {
    emit("confirmSelect", store.selection);

    store.clearSelection();
}

// Files Upload

const dragging = ref(false);

const files = ref<File[] | FileList>();

const dropFiles = async (e: DragEvent) =>
    (files.value = e.dataTransfer
        ? await dataTransferFiles(e.dataTransfer?.items)
        : []);

const changeFile = (e: Event) =>
    (files.value = (e.target as HTMLInputElement).files ?? []);

const submit = () => {
    dragging.value = false;

    if (files.value?.length) {
        if (files.value instanceof FileList) {
            store.upload(Array.from(files.value));
        }

        if (files.value instanceof Array) {
            store.upload(files.value);
        }
    }
};

// HOOKS
watch(files, () => submit());
</script>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.disabled {
    pointer-events: none;
    opacity: 0.7;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
}
</style>
