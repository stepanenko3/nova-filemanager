<template>
    <BaseModal :full="true" :disableClose="true" :modal="modal">
        <template #header>
            {{ __("Queue") }}
        </template>

        <div class="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <template v-for="item in queue" :key="item.id">
                <div
                    ref="card"
                    class="w-full h-full relative flex flex-col justify-center border-2 rounded-lg overflow-hidden cursor-pointer border-gray-200 dark:border-gray-700"
                >
                    <div
                        class="flex-grow flex justify-center items-center flex-col p-4"
                        style="height: 160px"
                    >
                        <Icon
                            v-if="item.status === null"
                            class="w-10 h-10 animate-bounce text-primary-500"
                            type="upload"
                            :solid="true"
                        />
                        <Icon
                            v-else-if="item.status === false"
                            class="w-10 h-10 text-red-500"
                            type="exclamation-circle"
                            :solid="true"
                        />
                        <Icon
                            v-else-if="item.status === true"
                            class="w-10 h-10 text-green-500"
                            type="check-circle"
                            :solid="true"
                        />

                        <div
                            class="mt-6 bg-gray-100 dark:bg-gray-700 shadow border-2 border-gray-100 dark:border-gray-700 rounded-lg h-6 w-[6rem]"
                        >
                            <div
                                class="block w-full h-full rounded-lg"
                                :style="{
                                    width: `${item.ratio}%`,
                                    transition: 'all .3s linear',
                                }"
                                :class="{
                                    'bg-primary-500': item.status === null,
                                    'bg-red-500': item.status === false,
                                    'bg-green-500': item.status === true,
                                }"
                            ></div>
                        </div>
                    </div>

                    <div
                        class="w-full h-8 flex-shrink-0 text-center text-xs border-t border-gray-200 dark:border-gray-700 flex items-center justify-center"
                    >
                        <p class="px-2 truncate">
                            {{ truncate(item.entity?.name || '', 25) }}
                        </p>
                    </div>
                </div>
            </template>
        </div>
    </BaseModal>
</template>

<script setup lang="ts">
import nativeFileToEntity from "@/helpers/transformers";
import BaseModal from "./BaseModal.vue";
import useBrowserStore from "@/stores/browser";
import { computed } from "vue";
import truncate from "@/helpers/truncate";

const store = useBrowserStore();

const queue = computed(() =>
    store.queue.map((item) => {
        item.entity = nativeFileToEntity(item.file);

        return item;
    })
);

const props = defineProps({
    modal: {
        type: Object,
        required: true,
    },
});
</script>
