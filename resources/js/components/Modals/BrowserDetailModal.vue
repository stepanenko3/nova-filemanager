<template>
    <BaseModal :modal="modal">
        <template #header>
            <div>
                {{ __("Details") }}
            </div>

            <div class="flex-grow"></div>

            <ToolbarButton
                v-if="store.selecting"
                class="ml-3 text-green-500"
                :active="isSelected"
                type="check"
                @click.prevent="select"
                v-tooltip="__('Select')"
            />

            <ToolbarButton
                v-if="file.type === 'image'"
                type="adjustments"
                @click.prevent="() => store.openModal(MODALS.CROP, file)"
                v-tooltip="__('Crop')"
            />

            <ToolbarButton
                type="pencil-alt"
                @click.prevent="() => store.openModal(MODALS.RENAME, file)"
                v-tooltip="__('Rename')"
            />
            <ToolbarButton
                class="text-red-500"
                type="trash"
                @click.prevent="() => store.openModal(MODALS.DELETE, file)"
                v-tooltip="__('Delete')"
            />
        </template>

        <div class="px-4 font-bold text-sm py-2">
            {{ file.name }}
        </div>

        <table class="table table-fixed text-left w-full">
            <tr v-if="file.mime">
                <td
                    class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"
                    style="width: 115px"
                >
                    {{ __("Mime") }}:
                </td>
                <td
                    class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900 break-word whitespace-normal line-4"
                    style="width: 100%"
                >
                    {{ file.mime }}
                </td>
            </tr>

            <tr v-if="file.lastModifiedReadable">
                <td
                    class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"
                >
                    {{ __("Midified At") }}:
                </td>
                <td
                    class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"
                >
                    {{ file.lastModifiedReadable }}
                </td>
            </tr>

            <tr v-if="file.sizeReadable">
                <td
                    class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"
                >
                    {{ __("Size") }}:
                </td>
                <td
                    class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"
                >
                    {{ file.sizeReadable }}
                </td>
            </tr>

            <template v-if="file.meta">
                <tr v-if="file.meta.width && file.meta.height">
                    <td
                        class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"
                    >
                        {{ __("Dimensions") }}:
                    </td>
                    <td
                        class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"
                    >
                        {{ file.meta.width }}x{{ file.meta.height }}
                    </td>
                </tr>

                <tr v-if="file.meta.aspectRatio">
                    <td
                        class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"
                    >
                        {{ __("Aspect Ratio") }}:
                    </td>
                    <td
                        class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"
                    >
                        {{ file.meta.aspectRatio }}
                    </td>
                </tr>
            </template>

            <tr v-if="file.url">
                <td
                    class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"
                >
                    {{ __("Url") }}:
                </td>
                <td
                    class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900 break-word whitespace-normal line-4"
                >
                    <div
                        class="inline-flex items-start leading-4 cursor-pointer hover:opacity-50"
                        @click="copyTextToClipboard"
                    >
                        <Icon
                            width="16"
                            height="16"
                            type="clipboard"
                            class="mr-2 flex-shrink-0"
                        />

                        <span>
                            {{ file.url }}
                        </span>
                    </div>
                </td>
            </tr>

            <tr v-if="file.url">
                <td
                    class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"
                ></td>
                <td
                    class="p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900 break-word whitespace-normal line-4"
                >
                    <a
                        class="flex justify-start hover:opacity-50"
                        :href="file.url"
                        download=""
                    >
                        <Icon
                            width="16"
                            height="16"
                            type="download"
                            class="mr-2 flex-shrink-0"
                        />
                        {{ __("Download") }}
                    </a>
                </td>
            </tr>
        </table>
    </BaseModal>
</template>

<script setup>
import { computed } from "vue";
import BaseModal from "./BaseModal.vue";
import ToolbarButton from "../ToolbarButton.vue";
import { MODALS } from "@/constants";
import useBrowserStore from "@/stores/browser";

const store = useBrowserStore();

const props = defineProps({
    modal: {
        type: Object,
        required: true,
    },
});

const file = computed(() => props.modal.payload);
const isSelected = computed(() => store.isSelected(file.value));

function select() {
    store.toggleSelection(file.value);
}

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    let status = null;
    try {
        var successful = document.execCommand("copy");
        status = !!successful;

        var msg = successful ? "successful" : "unsuccessful";
        console.log("Fallback: Copying text command was " + msg);
    } catch (err) {
        status = false;
        console.error("Fallback: Oops, unable to copy", err);
    }

    document.body.removeChild(textArea);

    return status;
}

function copyTextToClipboard() {
    if (!navigator.clipboard) {
        if (!fallbackCopyTextToClipboard(file.value.url)) return;

        Nova.success("Text copied to clipboard");
    }

    navigator.clipboard.writeText(file.value.url).then(
        () => Nova.success("Text copied to clipboard"),
        (err) => console.error("Async: Could not copy text: ", err)
    );
}
</script>
