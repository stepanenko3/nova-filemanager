<template>
    <Transition>
        <div
            v-if="state"
            class="fixed backgrop inset-0 z-50 p-4 overflow h-full max-h-full flex justify-center"
        >
            <div class="absolute inset-0" @click.prevent="closeModal"></div>

            <div
                class="relative w-full bg-white dark:bg-gray-800 rounded-lg shadow h-full max-w-5xl max-h-full"
            >
                <Browser
                    :selecting="true"
                    :multiple="true"
                    @confirmSelect="($event) => emit('confirmSelect', $event)"
                />
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { onKeyStroke } from "@vueuse/core";
import Browser from "./Browser.vue";
import useBrowserStore from "@/stores/browser";

const props = defineProps({
    state: {
        type: Boolean,
        required: true,
    },
});

const store = useBrowserStore();

const emit = defineEmits(["update:state", "confirmSelect"]);

onKeyStroke("Escape", (e) => {
    if (!store.modals.length) {
        e.preventDefault();
        e.stopPropagation();

        closeModal();
    }
});

function closeModal() {
    emit("update:state", false);
}
</script>
