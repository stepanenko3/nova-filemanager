<template>
    <nav class="flex items-center pt-4">
        <div class="flex text-sm">
            <button
                class="hidden md:flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-xl h-9 min-w-9 px-2 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-500 mr-1"
                :class="{
                    disabled: pagination.current_page <= 1,
                }"
                rel="prev"
                dusk="previous"
                @click.prevent="goToPage(pagination.current_page - 1)"
            >
                ‹
            </button>
            <template
                v-for="element in pagination.links"
                :key="element.label"
            >
                <button
                    v-if="!isNaN(element.label) || element.label === '...'"
                    class="rounded-lg mr-1 border border-gray-200 dark:border-gray-700 h-9 min-w-9 px-2 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-500"
                    :class="{
                        'bg-gray-50 dark:bg-gray-700': element.active,
                    }"
                    :disabled="element.label === '...' || element.active"
                    :dusk="`page:${element.label}`"
                    @click.prevent="
                        element.label === '...' || element.active
                            ? null
                            : goToPage(element.label)
                    "
                >
                    {{ element.label }}
                </button>
            </template>
            <button
                :class="{
                    disabled:
                        pagination.current_page >=
                        pagination.last_page,
                }"
                class="hidden md:flex items-center justify-center rounded-lg mr-1 border border-gray-200 dark:border-gray-700 text-xl h-9 min-w-9 px-2 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700"
                rel="next"
                dusk="next"
                @click.prevent="goToPage(pagination.current_page + 1)"
            >
                ›
            </button>
        </div>
        <span
            class="hidden md:flex items-center justify-center text-xs px-4 ml-auto"
            >{{ countLabel }}</span
        >
    </nav>
</template>

<script setup>
import { computed } from "vue";
import useBrowserStore from "@/stores/browser";

const store = useBrowserStore();

const pagination = computed(() => store.data?.pagination);

function goToPage(page) {
    store.setPage(page);
}

const countLabel = computed(() =>
    pagination.total > 0
        ? `${pagination.from}-${pagination.to} of ${pagination.total}`
        : ""
);
</script>
