<template>
    <nav
        class="bg-gray-50 dark:bg-gray-700 rounded-lg px-2 flex items-center text-xs h-8 w-full"
        v-if="store.data?.breadcrumbs?.length > 0"
    >
        <div
            @click="goToPath('/')"
            class="h-6 flex items-center cursor-pointer text-gray-400 dark:text-gray-600 hover:text-primary-500"
        >
            <Icon type="home" width="16" height="16" />
        </div>

        <div v-if="store.data.breadcrumbs.length > 0">
            <span class="px-2">/</span>
        </div>

        <template v-for="part in store.data.breadcrumbs" :key="part.id">
            <template v-if="part.current">
                <div v-bind:key="part.id" class="text-gray-800 dark:text-gray-200">
                    <span href="#">{{ part.name }}</span>
                </div>
            </template>
            <template v-else>
                <div v-bind:key="part.id">
                    <span
                        href="#"
                        class="cursor-pointer text-gray-400 dark:text-gray-600 hover:text-primary-500"
                        @click="goToPath(part.path)"
                    >
                        {{ part.name }}
                    </span>
                </div>
                <div v-bind:key="part.id + '_separator'">
                    <span class="px-2">/</span>
                </div>
            </template>
        </template>
    </nav>
</template>

<script setup>
import useBrowserStore from "@/stores/browser";

const store = useBrowserStore();

const emit = defineEmits(["goToPath"]);

function goToPath(path) {
    store.setPath(path);
}
</script>
