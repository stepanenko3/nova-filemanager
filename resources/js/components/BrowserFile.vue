<template>
    <div
        ref="card"
        class="w-full h-full relative flex flex-col justify-center border-2 rounded-lg overflow-hidden cursor-pointer"
        @click.prevent.stop="clickStrategy"
        :class="{
            'border-primary-500': isSelected,
            'border-gray-200 dark:border-gray-700': !isSelected,
        }"
    >
        <div
            v-if="file.type != 'image'"
            class="flex-grow flex items-center justify-center p-4"
            style="height: 160px"
        >
            <Icon
                :type="mimeIcons[file.type] || mimeIcons.text"
                width="48"
                height="48"
            />
        </div>

        <div class="p-2" v-if="file.type == 'image'">
            <img
                :src="file.url"
                class="block w-full flex-grow"
                style="object-fit: contain; height: 160px"
            />
        </div>

        <div
            class="w-full h-8 flex-shrink-0 text-center text-xs border-t border-gray-200 dark:border-gray-700 flex items-center justify-center"
        >
            <p class="px-2 truncate">
                {{ truncate(file.name, 25) }}
            </p>

            <div class="flex items-center justify-center ml-auto">
                <div
                    v-if="detailButton && store.selecting"
                    class="h-8 w-8 cursor-pointer hover:opacity-50 border-l border-gray-200 dark:border-gray-700 px-2 inline-flex items-center justify-center"
                    @click.prevent.stop="showDetail"
                >
                    <Icon type="eye" width="18" height="18" />
                </div>
                <div
                    v-if="file.type === 'image'"
                    class="h-8 w-8 cursor-pointer hover:opacity-50 border-l border-gray-200 dark:border-gray-700 px-2 inline-flex items-center justify-center"
                    @click.prevent.stop="showCrop"
                    v-tooltip="__('Crop')"
                >
                    <Icon type="adjustments" width="18" height="18" />
                </div>
                <div
                    class="h-8 w-8 cursor-pointer hover:opacity-50 border-l border-gray-200 dark:border-gray-700 px-2 inline-flex items-center justify-center"
                    @click.prevent.stop="showRename"
                    v-tooltip="__('Rename')"
                >
                    <Icon type="pencil-alt" width="18" height="18" />
                </div>
                <div
                    class="h-8 w-8 cursor-pointer text-red-500 hover:opacity-50 border-l border-gray-200 dark:border-gray-700 px-2 inline-flex items-center justify-center"
                    @click.prevent.stop="showDelete"
                    v-tooltip="__('Delete')"
                >
                    <Icon type="trash" width="18" height="18" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { MODALS } from "@/constants";
import { mimeIcons } from "@/helpers/mime-icons";
import truncate from "@/helpers/truncate";
import useBrowserStore from "@/stores/browser";
import { computed } from "vue";

const store = useBrowserStore();

const props = defineProps({
    file: {
        type: Object,
        required: true,
    },
    detailButton: {
        type: Boolean,
        default: true,
    },
});

const isSelected = computed(() => store.isSelected(props.file));

function showDetail() {
    store.openModal(MODALS.DETAIL, props.file)
}

function showCrop() {
    store.openModal(MODALS.CROP, props.file)
}

function showRename() {
    store.openModal(MODALS.RENAME, props.file)
}

function showDelete() {
    store.openModal(MODALS.DELETE, props.file)
}

function clickStrategy() {
    if (store.selecting) {
        store.toggleSelection(props.file)
    } else if (props.detailButton) {
        showDetail();
    }
}
</script>
