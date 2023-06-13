<template>
    <BaseModal :modal="modal">
        <template #header>
            <div>
                {{ __("Crop image") }}
            </div>

            <div class="flex-grow"></div>

            <ToolbarButton
                class="text-green-500"
                type="check"
                @click.prevent="confirmCrop"
                v-tooltip="__('Confirm crop')"
            />
        </template>

        <VueCropper
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
import useBrowserStore from "../../stores/browser";
import 'cropperjs/dist/cropper.css';

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
    store.closeModals();
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
