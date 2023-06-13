<template>
    <BaseModal :full="true" :modal="modal">
        <div class="p-6">
            <TransitionGroup
                name="list"
                tag="div"
                class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
                <template v-for="file in selection" :key="file.id">
                    <BrowserFile
                        :ref="'file_' + file.id"
                        :file="file"
                        :data-key="file.id"
                    />
                </template>
            </TransitionGroup>
        </div>

        <template #header>
            <div>
                {{ __("Selected Files") }}
            </div>

            <div class="flex-grow"></div>

            <ToolbarButton
                type="x"
                @click.prevent="clearSelected"
                v-tooltip="__('Clear selected files')"
            />
            <ToolbarButton
                v-if="store.selecting"
                class="text-green-500"
                type="check"
                @click.prevent="confirmSelection"
                v-tooltip="__('Confirm selection')"
            />
        </template>
    </BaseModal>
</template>

<script setup>
import BrowserFile from "../BrowserFile.vue";
import BaseModal from "./BaseModal.vue";
import ToolbarButton from "../ToolbarButton.vue";
import useBrowserStore from "../../stores/browser";
import { storeToRefs } from "pinia";
import { isEmpty } from "lodash";
import { watch } from "vue";

const store = useBrowserStore();

const props = defineProps({
    modal: {
        type: Object,
        required: true,
    },
});

const { selection } = storeToRefs(store);

function close() {
    store.closeModal(props.modal.id);
}

function clearSelected() {
    store.clearSelection();

    close();
}

function confirmSelection() {
    store.confirmSelection();
    close();
}

watch(
    () => store.selection,
    (selection, prevSelection) => {
        if (isEmpty(selection)) {
            close();
        }
    }
);
</script>
