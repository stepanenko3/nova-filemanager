<template>
    <div
        ref="card"
        class="relative flex p-1 items-center bg-gray-100 dark:bg-gray-900 rounded-lg cursor-pointer group"
        @click="clickStrategy"
    >
        <div class="h-8 w-8 mr-1 flex items-center justify-center group-hover:opacity-75">
            <Icon :type="mimeIcons.dir" width="16" height="16" />
        </div>

        <p class="truncate group-hover:opacity-75">
            {{ truncate(folder.name, 25) }}
        </p>

        <Dropdown class="ml-auto" v-if="folder.id !== 'parent'">
            <template #trigger>
                <div
                    class="cursor-pointer flex items-center justify-center w-7 h-7 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                    <Icon type="dots-vertical" width="16" height="16" />
                </div>
            </template>

            <DropdownMenu @click.prevent.stop="showRename">
                <Icon type="pencil" class="mr-2" width="16" height="16" />
                {{ __("Rename") }}
            </DropdownMenu>

            <DropdownMenu class="text-red-500" @click.prevent.stop="showDelete">
                <Icon type="trash" class="mr-2" width="16" height="16" />
                {{ __("Delete") }}
            </DropdownMenu>
        </Dropdown>
    </div>
</template>

<script setup>
import { DELETE_STATE, MODALS } from "@/constants";
import { mimeIcons } from "@/helpers/mime-icons";
import truncate from "@/helpers/truncate";
import useBrowserStore from "@/stores/browser";
import Dropdown from "./Elements/Dropdown.vue";
import DropdownMenu from "./Elements/DropdownMenu.vue";

const store = useBrowserStore();

const props = defineProps({
    folder: {
        type: Object,
        required: true,
    },
});

function clickStrategy() {
    store.setPath(props.folder.path);
}

function showRename() {
    store.openModal(MODALS.RENAME, props.folder);
}

function showDelete() {
    store.openModal(MODALS.DELETE, {
        type: DELETE_STATE.FOLDER,
        [DELETE_STATE.FOLDER]: props.folder,
    });
}
</script>
