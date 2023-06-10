<template>
    <div
        ref="card"
        class="relative flex items-center border rounded-lg overflow-hidden cursor-pointer"
        @click="clickStrategy"
        :class="{
            'border-primary-500': isSelected,
            'border-gray-200 dark:border-gray-700': !isSelected,
        }"
    >
        <div class="h-8 w-8 flex items-center justify-center">
            <Icon :type="mimeIcons.dir" width="18" height="18" />
        </div>

        <p class="truncate">
            {{ truncate(folder.name, 25) }}
        </p>

        <div
            v-if="folder.id !== 'parent'"
            class="flex items-center justify-center ml-auto"
        >
            <div
                class="h-8 w-8 cursor-pointer hover:opacity-50 border-l border-gray-200 dark:border-gray-700 px-2 inline-flex items-center justify-center"
                @click.prevent.stop="showRename"
            >
                <Icon type="pencil-alt" width="18" height="18" />
            </div>
            <div
                class="h-8 w-8 cursor-pointer hover:opacity-50 border-l border-gray-200 dark:border-gray-700 px-2 inline-flex items-center justify-center"
                @click.prevent.stop="showDelete"
            >
                <Icon
                    type="trash"
                    class="text-red-500"
                    width="18"
                    height="18"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { MODALS } from '@/constants';
import { mimeIcons } from '@/helpers/mime-icons';
import truncate from '@/helpers/truncate';
import useBrowserStore from '@/stores/browser';
import { computed } from 'vue'

const store = useBrowserStore();

const props = defineProps({
    folder: {
        type: Object,
        required: true,
    },
});

const isSelected = computed(() => store.isSelected(props.folder));

function clickStrategy() {
    store.setPath(props.folder.path)
}

function showRename() {
    store.openModal(MODALS.RENAME, props.folder)
}

function showDelete() {
    store.openModal(MODALS.DELETE, props.folder)
}
</script>
