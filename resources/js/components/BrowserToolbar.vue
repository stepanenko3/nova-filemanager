<template>
    <div
        class="flex items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700"
    >
        <ToolbarButton
            @click.prevent="store.fetch()"
            type="refresh"
            class="mr-3"
            v-tooltip="__('Refresh')"
        />

        <label
            class="rounded-lg cursor-pointer h-9 min-w-9 px-2 mr-3 flex items-center justify-center focus:outline-none bg-primary-500 hover:bg-primary-600 shadow text-white dark:text-gray-900 dark:ring-gray-600"
            v-tooltip="__('Upload a file')"
            for="fileUpload"
        >
            <input
                ref="fileUpload"
                id="fileUpload"
                type="file"
                class="sr-only"
                multiple
                @change="changeFile"
            />

            <Icon type="upload" width="16" height="16" />
        </label>

        <ToolbarButton
            @click.prevent="store.openModal(MODALS.CREATE_FOLDER)"
            type="folder-add"
            class="mr-3"
            v-tooltip="__('Create folder')"
        />

        <SelectControl
            class="mr-3"
            :options="
                store.disks.map((value) => ({
                    label: value,
                    value: value,
                }))
            "
            :selected="store.disk"
            @change="($event) => store.setDisk($event)"
        />

        <SelectControl
            v-if="store.periods"
            class="mr-3"
            :options="store.periods"
            :selected="store.period"
            @change="($event) => store.setPeriod($event)"
        />

        <SelectControl
            v-if="store.sorts"
            class="mr-3"
            :options="store.sorts"
            :selected="store.sort"
            @change="($event) => store.setSort($event)"
        />

        <div
            class="ml-auto flex items-center"
            v-if="store.selecting && store.selection.length > 0"
        >
            <span> Selected {{ store.selection.length }} files </span>

            <ToolbarButton
                class="ml-3"
                type="eye"
                @click.prevent="() => store.openModal(MODALS.SELECTED)"
                v-tooltip="__('Open selected files modal')"
            />
            <ToolbarButton
                class="ml-3"
                type="x"
                @click.prevent="store.clearSelection"
                v-tooltip="__('Clear selected files')"
            />
            <ToolbarButton
                class="ml-3 text-green-500"
                type="check"
                @click.prevent="confirmSelect"
                v-tooltip="__('Confirm selection')"
            />
        </div>

        <div v-else class="relative flex items-center h-9 ml-auto">
            <Icon
                type="search"
                width="20"
                class="absolute ml-2 text-gray-400"
                :style="{ top: '6px' }"
            />

            <RoundInput
                class="appearance-none g-white dark:bg-gray-800 shadow h-8 w-full dark:focus:bg-gray-800"
                :placeholder="__('Search')"
                spellcheck="false"
                :aria-label="__('Search')"
                type="text"
                @input="(e) => searchItems(e.target.value)"
            />
        </div>
    </div>
</template>

<script setup>
import _ from "lodash";
import ToolbarButton from "./ToolbarButton.vue";
import useBrowserStore from "../stores/browser.ts";
import { MODALS } from "@/constants";
import { ref } from "vue";

const store = useBrowserStore();

const fileUpload = ref();

const emit = defineEmits(["confirmSelect", "changeFile"]);

const searchItems = _.debounce((value) => store.setSearch(value), 300);

function confirmSelect() {
    emit("confirmSelect");
}

function changeFile(e) {
    emit("changeFile", e);
}
</script>

<style>
.text-underline {
    text-decoration: underline;
}
</style>
