<template>
    <div
        ref="wrapper"
        class="inset-0 flex items-center justify-center"
        :class="{
            'fixed z-50 bg-gray-800/10 backdrop-blur': !full,
            'absolute z-10': full,
        }"
    >
        <div
            v-if="!disableClose && !full"
            class="absolute inset-0"
            @click.prevent="closeModal"
        ></div>

        <div
            ref="target"
            class="relative bg-white w-full max-h-full dark:bg-gray-800 z-10 rounded-lg shadow-lg base-modal-inner"
            :class="{
                'w-full max-w-full min-h-full': full,
                'max-w-2xl': !full,
            }"
        >
            <Transition>
                <div
                    v-if="store.loading"
                    class="absolute rounded-lg inset-0 bg-white/50 dark:bg-gray-800/50 flex items-center justify-center flex-grow z-50"
                >
                    <Loader />
                </div>
            </Transition>

            <div
                class="flex items-center px-6 py-4 space-x-2 border-b border-gray-200 dark:border-gray-700"
            >
                <ToolbarButton
                    v-if="closeButton && !disableClose"
                    type="chevron-left"
                    @click.prevent.stop="closeModal"
                />
                <slot name="header" />
            </div>

            <slot />

            <div
                v-if="slots.footer"
                class="flex items-center px-6 py-4 space-x-2 border-t border-gray-200 dark:border-gray-700"
            >
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, useSlots } from "vue";
import ToolbarButton from "../ToolbarButton.vue";
import useBrowserStore from "../../stores/browser.ts";

const store = useBrowserStore();

const props = defineProps({
    full: {
        type: Boolean,
        default: false,
    },
    closeButton: {
        type: Boolean,
        default: true,
    },
    disableClose: {
        type: Boolean,
        default: false,
    },
    modal: {
        type: Object,
        required: true,
    },
    size: {
        type: String,
        default: '2xl',
    },
});

const emit = defineEmits(["close"]);

const slots = useSlots();

const target = ref(null);

const closeModal = () => store.closeModal(props.modal.id);
</script>

<style lang="scss">
@media (min-width: 768px) {
    .base-modal-inner {
        min-width: 600px;
    }
}
</style>
