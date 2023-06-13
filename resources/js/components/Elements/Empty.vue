<script setup lang="ts">
interface Props {
    title?: string;
    subtitle?: string;
}
defineProps<Props>();
</script>
<template>
    <div class="text-center py-8">
        <Icon
            type="folder"
            class="h-16 w-16 mx-auto fill-current text-primary-500"
        />

        <h3 class="mt-2 text-sm font-medium text-gray-800 dark:text-gray-200">
            {{ title ?? __("No files were found for your request") }}
        </h3>

        <p class="mt-1 text-sm text-gray-500">
            {{
                subtitle ??
                __("You can upload a new file or create a new folder")
            }}
        </p>
    </div>
</template>
