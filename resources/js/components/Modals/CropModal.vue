<template>
    <BaseModal :modal="modal">
        <template #header>
            <div class="flex items-center w-full">
                <div>
                    {{ __("Crop image") }}
                </div>
                <div class="flex items-center ml-auto">
                    <ToolbarButton
                        class="ml-3"
                        type="x"
                        @click.prevent="close"
                        v-tooltip="__('Cancel crop')"
                    />

                    <ToolbarButton
                        class="ml-3 text-green-500"
                        type="check"
                        @click.prevent="confirmCrop"
                        v-tooltip="__('Confirm crop')"
                    />
                </div>
            </div>
        </template>

        <vue-cropper
            ref="cropper"
            :containerStyle="containerStyle"
            :src="modal.payload.url"
            :alt="modal.payload.name"
        />
    </BaseModal>
</template>

<script setup>
import { ref, computed } from "vue";
import BaseModal from "./BaseModal.vue";
import { default as VueCropper } from "vue-cropperjs";
import ToolbarButton from "../ToolbarButton.vue";
import useBrowserStore from "@/stores/browser";

const store = useBrowserStore();

const props = defineProps({
    modal: {
        type: Object,
        required: true,
    },
});

const cropper = ref();
const destFile = ref();

const containerStyle = computed(() => ({
    height: "100%",
    minHeight: "60vh",
}));

function close() {
    store.closeModal(props.modal.id);
}

function confirmCrop() {
    cropper.value?.getCroppedCanvas().toBlob((blob) => {
        if (!blob) {
            return;
        }

        destFile.value = new File(
            [blob],
            appendToFilename(props.modal.payload.name, "-" + Date.now()),
            {
                type: props.modal.payload.mime,
            }
        );

        upload(destFile.value);
    });
}

function upload(file) {
    close();
    store.upload([file]);
}

function appendToFilename(filename, string) {
    var dotIndex = filename.lastIndexOf(".");
    if (dotIndex == -1) return filename + string;
    else
        return (
            filename.substring(0, dotIndex) +
            string +
            filename.substring(dotIndex)
        );
}
</script>
