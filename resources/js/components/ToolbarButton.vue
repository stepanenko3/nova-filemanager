<template>
    <button
        type="button"
        class="rounded-lg cursor-pointer border h-9 min-w-9 px-2 flex items-center justify-center focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700 dark:bg-gray-900"
        :class="{
            'border-gray-200 dark:border-gray-700': !active,
            'border-primary-500 text-primary-500': active,
        }"
    >
        <slot />
        <Icon v-if="type" :type="type" width="16" height="16" />
    </button>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                required: false,
            },
            active: {
                type: Boolean,
                default: false,
            },
        },
    }
</script>
