<template>
    <div
        ref="wrapper"
        class="backgrop inset-0 flex items-center justify-center rounded-lg"
        :class="{
            'fixed z-50': !full,
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
            class="relative bg-white dark:bg-gray-800 z-10 rounded-lg shadow-lg base-modal-inner overflow-hidden"
            :class="{
                'w-full min-h-full': full,
            }"
        >
            <div
                class="flex items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700"
            >
                <ToolbarButton
                    v-if="closeButton && !disableClose"
                    class="mr-3"
                    type="chevron-left"
                    @click.prevent.stop="closeModal"
                />
                <slot name="header" />
            </div>

            <slot />

            <div
                v-if="slots.footer"
                class="flex items-center px-6 py-4 border-t border-gray-200 dark:border-gray-700"
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
});

const emit = defineEmits(["close"]);

const slots = useSlots();

const target = ref(null);

const closeModal = () => store.closeModal(props.modal.id);
</script>

<style lang="scss">
.backgrop {
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(5px);
}

.base-modal-inner {
    min-width: 600px;
}
</style>
