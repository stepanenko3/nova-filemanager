<template>
    <div class="relative flex">
        <select
            class="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 h-10 pl-3 pr-6 rounded-lg flex-grow"
            :value="value"
            @change="(e) => emit('change', e.target.value)"
        >
            <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
            >
                {{ option.label }}
            </option>
        </select>

        <svg
            class="shrink-0 text-gray-700 pointer-events-none absolute right-[11px] top-[15px]"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="6"
            viewBox="0 0 10 6"
        >
            <path
                class="fill-current shrink-0 text-gray-700 pointer-events-none absolute right-[11px] top-[15px]"
                d="M8.292893.292893c.390525-.390524 1.023689-.390524 1.414214 0 .390524.390525.390524 1.023689 0 1.414214l-4 4c-.390525.390524-1.023689.390524-1.414214 0l-4-4c-.390524-.390525-.390524-1.023689 0-1.414214.390525-.390524 1.023689-.390524 1.414214 0L5 3.585786 8.292893.292893z"
            ></path>
        </svg>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    value: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}>();

const emit = defineEmits<{
    (e: "change", value: string);
}>();
</script>
