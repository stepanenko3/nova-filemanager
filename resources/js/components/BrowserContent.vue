<template>
    <template v-if="folders.length > 0">
        <Heading
            level="5"
            class="cursor-pointer text-xs hover:opacity-75"
            @click="store.showFolders = !store.showFolders"
        >
            {{ __("Folders") }}

            <Icon
                :type="store.showFolders ? 'chevron-down' : 'chevron-up'"
                width="13"
                height="13"
            />
        </Heading>

        <div
            v-if="store.showFolders"
            class="grid md:grid-cols-4 gap-4"
        >
            <template v-for="folder in folders" :key="folder.id">
                <BrowserFolder
                    :ref="'folder_' + folder.id"
                    :folder="folder"
                    :data-key="folder.id"
                />
            </template>
        </div>
    </template>

    <template v-if="files.length > 0">
        <Heading
            level="5"
            class="cursor-pointer text-xs hover:opacity-75"
            @click="store.showFiles = !store.showFiles"
        >
            {{ __("Files") }}

            <Icon
                :type="store.showFiles ? 'chevron-down' : 'chevron-up'"
                width="13"
                height="13"
            />
        </Heading>

        <div
            v-if="store.showFiles"
            class="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
            <template v-for="file in files" :key="file.id">
                <BrowserFile
                    :ref="'file_' + file.id"
                    :file="file"
                    :data-key="file.id"
                />
            </template>
        </div>
    </template>
</template>

<script setup>
import { computed } from "vue";
import BrowserFile from "./BrowserFile.vue";
import BrowserFolder from "./BrowserFolder.vue";
import useBrowserStore from "@/stores/browser";

const store = useBrowserStore();

const files = computed(() => store.data?.files || []);
const folders = computed(() => store.data?.folders || []);
</script>
