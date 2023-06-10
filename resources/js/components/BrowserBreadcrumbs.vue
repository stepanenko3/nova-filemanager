<template>
    <nav
        class="bg-gray-50 dark:bg-gray-700 px-6 py-2 w-full"
        v-if="store.data?.breadcrumbs?.length > 0"
    >
        <ol class="flex items-center text-xs">
            <li
                @click="goToPath('/')"
                class="h-6 flex items-center cursor-pointer"
            >
                <Icon type="home" width="16" height="16" />
            </li>

            <li v-if="store.data.breadcrumbs.length > 0">
                <span class="px-2">/</span>
            </li>

            <template v-for="part in store.data.breadcrumbs" :key="part.id">
                <template v-if="part.current">
                    <li v-bind:key="part.id">
                        <span href="#">{{ part.name }}</span>
                    </li>
                </template>
                <template v-else>
                    <li v-bind:key="part.id">
                        <span
                            href="#"
                            class="cursor-pointer font-bold"
                            @click="goToPath(part.path)"
                        >
                            {{ part.name }}
                        </span>
                    </li>
                    <li v-bind:key="part.id + '_separator'">
                        <span class="px-2">/</span>
                    </li>
                </template>
            </template>
        </ol>
    </nav>
</template>

<script setup>
import useBrowserStore from '@/stores/browser';

const store = useBrowserStore();

const emit = defineEmits(['goToPath'])

function goToPath(path) {
    store.setPath(path)
}
</script>
