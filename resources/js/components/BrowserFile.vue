<template>
    <div
        ref="card"
        class="w-full h-full relative flex flex-col justify-center cursor-pointer"
        @click.prevent.stop="clickStrategy"
    >
        <div
            class="relative aspect-square flex items-center p-2 justify-center w-full h-full overflow-hidden rounded-lg hover:opacity-75 dark:bg-gray-900 border-2"
            :class="{
                'border-primary-500': isSelected,
                'border-gray-200 dark:border-gray-700': !isSelected,
            }"
        >
            <div
                v-if="isSelected"
                class="absolute top-0 right-0 p-2 text-primary-500"
            >
                <Icon
                    type="check-circle"
                    width="22"
                    height="22"
                    :solid="true"
                />
            </div>

            <Icon
                class="text-gray-500"
                v-if="file.type != 'image'"
                :type="mimeIcons[file.type] || mimeIcons.text"
                width="48"
                height="48"
                :solid="true"
            />

            <img
                v-if="file.type == 'image'"
                :src="file.url"
                class="block w-full h-full"
                style="object-fit: contain"
            />
        </div>

        <div class="w-full flex items-center mt-2">
            <p
                class="px-2 truncate text-gray-900 dark:text-gray-200 font-medium"
            >
                {{ truncate(file.name, 25) }}
            </p>

            <Dropdown class="ml-auto">
                <template #trigger>
                    <div
                        class="cursor-pointer flex items-center justify-center w-7 h-7 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
                    >
                        <Icon type="dots-vertical" width="16" height="16" />
                    </div>
                </template>

                <DropdownMenu
                    v-if="detailButton"
                    @click.prevent.stop="showDetail"
                >
                    <Icon type="eye" class="mr-2" width="16" height="16" />
                    {{ __("Details") }}
                </DropdownMenu>

                <DropdownMenu
                    v-if="file.type === 'image'"
                    @click.prevent.stop="showCrop"
                >
                    <Icon type="camera" class="mr-2" width="16" height="16" />
                    {{ __("Crop") }}
                </DropdownMenu>

                <DropdownMenu
                    v-if="file.type === 'archive'"
                    @click.prevent.stop="unarchive"
                >
                    <Icon type="archive" class="mr-2" width="16" height="16" />
                    {{ __("Unarchive") }}
                </DropdownMenu>

                <DropdownMenu @click.prevent="duplicate">
                    <Icon
                        type="duplicate"
                        class="mr-2"
                        width="16"
                        height="16"
                    />
                    {{ __("Duplicate") }}
                </DropdownMenu>

                <DropdownMenu @click.prevent.stop="showRename">
                    <Icon type="pencil" class="mr-2" width="16" height="16" />
                    {{ __("Rename") }}
                </DropdownMenu>

                <DropdownMenu
                    class="text-red-500"
                    @click.prevent.stop="showDelete"
                >
                    <Icon type="trash" class="mr-2" width="16" height="16" />
                    {{ __("Delete") }}
                </DropdownMenu>
            </Dropdown>
        </div>

        <div class="w-full px-2 text-xs">
            {{ file.sizeReadable }}
        </div>
    </div>
</template>

<script setup>
import { DELETE_STATE, MODALS } from "@/constants";
import { mimeIcons } from "@/helpers/mime-icons";
import truncate from "@/helpers/truncate";
import useBrowserStore from "@/stores/browser";
import { computed } from "vue";
import Dropdown from "./Elements/Dropdown.vue";
import DropdownMenu from "./Elements/DropdownMenu.vue";

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
    store.openModal(MODALS.DETAIL, props.file);
}

function showCrop() {
    store.openModal(MODALS.CROP, props.file);
}

function unarchive() {
    if (props.file.type !== "archive") {
        return;
    }

    store.unarchive(props.file.path);
}

function duplicate() {
    store.duplicate(props.file.path);
}

function showRename() {
    store.openModal(MODALS.RENAME, props.file);
}

function showDelete() {
    store.openModal(MODALS.DELETE, {
        type: DELETE_STATE.FILE,
        [DELETE_STATE.FILE]: props.file,
    });
}

function clickStrategy() {
    store.toggleSelection(props.file);
}
</script>

<style>
.aspect-square {
    aspect-ratio: 1 / 1;
}
</style>
