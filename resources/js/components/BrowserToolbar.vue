<template>
    <div
        class="flex items-center px-6 py-4 space-x-2 border-b border-gray-200 dark:border-gray-700"
    >
        <label
            class="rounded-lg cursor-pointer h-9 min-w-9 px-2 flex items-center justify-center focus:outline-none bg-primary-500 hover:bg-primary-600 shadow text-white dark:text-gray-900 dark:ring-gray-600"
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
            v-tooltip="__('Create folder')"
        />

        <ToolbarButton
            @click.prevent="store.fetch()"
            type="refresh"
            v-tooltip="__('Refresh')"
        />

        <SelectControl
            :options="
                store.disks.map((value) => ({
                    label: value,
                    value: value,
                }))
            "
            :selected="store.disk"
            @change="($event) => store.setDisk($event)"
        />

        <div class="flex-grow"></div>

        <div
            class="flex items-center space-x-2"
            v-if="store.selection.length > 0"
        >
            <span
                @click.prevent="() => store.openModal(MODALS.SELECTED)"
                v-tooltip="__('Open selected files modal')"
                class="cursor-pointer hover:text-primary-500"
            >
                Selected {{ store.selection.length }} files
            </span>

            <ToolbarButton
                class="text-red-500"
                type="trash"
                @click.prevent="() => store.openModal(MODALS.DELETE, {
                    type: DELETE_STATE.FILES,
                    [DELETE_STATE.FILES]: store.selection,
                })"
                v-tooltip="__('Delete selected files')"
            />
            <ToolbarButton
                v-if="store.selecting"
                class="text-green-500"
                type="check"
                @click.prevent="() => store.confirmSelection()"
                v-tooltip="__('Confirm selection')"
            />
        </div>

        <Dropdown>
            <template #trigger>
                <ToolbarButton
                    type="filter"
                    :active="
                        store.search || store.sort || store.period
                            ? true
                            : false
                    "
                    v-tooltip="__('Filters')"
                />
            </template>

            <div class="p-2 space-y-2 w-60">
                <div class="relative">
                    <input
                        ref="input"
                        type="text"
                        class="w-full h-full form-control rounded-lg form-input form-input-bordered py-2"
                        :placeholder="__('Search')"
                        :aria-label="__('Search')"
                        spellcheck="false"
                        @input="(e) => searchItems(e.target.value)"
                    />
                </div>

                <p class="text-gray-900 dark:text-gray-200 font-medium">
                    {{ __("Per page") }}
                </p>
                <SelectControl
                    :options="
                        store.perPageOptions.map((value) => ({
                            label: value,
                            value: value,
                        }))
                    "
                    :selected="store.perPage"
                    @change="($event) => store.setPerPage($event)"
                />

                <p class="text-gray-900 dark:text-gray-200 font-medium">
                    {{ __("Period") }}
                </p>

                <SelectControl
                    v-if="store.periods"
                    :options="store.periods"
                    :selected="store.period"
                    @change="($event) => store.setPeriod($event)"
                />

                <p class="text-gray-900 dark:text-gray-200 font-medium">
                    {{ __("Sort by") }}
                </p>

                <SelectControl
                    v-if="store.sorts"
                    :options="store.sorts"
                    :selected="store.sort"
                    @change="($event) => store.setSort($event)"
                />
            </div>
        </Dropdown>
    </div>
</template>

<script setup>
import _ from "lodash";
import ToolbarButton from "./ToolbarButton.vue";
import useBrowserStore from "../stores/browser.ts";
import { MODALS, DELETE_STATE } from "../constants";
import { ref } from "vue";
import Dropdown from "./Elements/Dropdown.vue";

const store = useBrowserStore();

const fileUpload = ref();

const emit = defineEmits(["changeFile"]);

const searchItems = _.debounce((value) => store.setSearch(value), 300);

function changeFile(e) {
    emit("changeFile", e);
}
</script>

<style>
.text-underline {
    text-decoration: underline;
}
</style>
