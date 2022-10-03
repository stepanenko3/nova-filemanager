<template>
    <div class="border-t border-gray-200 dark:border-gray-700">
        <nav class="rounded-b-lg font-bold flex items-center">
            <div class="flex text-sm">
                <button
                    :disabled="files.onFirstPage"
                    class="hidden md:flex items-center justify-center border-r border-gray-200 dark:border-gray-700 text-xl h-9 min-w-9 px-2 rounded-bl-lg focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-500"
                    rel="first"
                    dusk="first"
                    @click.prevent="goToPage(1)"
                >
                    «
                </button>
                <button
                    :disabled="files.onFirstPage"
                    class="hidden md:flex items-center justify-center border-r border-gray-200 dark:border-gray-700 text-xl h-9 min-w-9 px-2 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-500"
                    rel="prev"
                    dusk="previous"
                    @click.prevent="goToPage(files.prevPage)"
                >
                    ‹
                </button>
                <template
                    v-for="element in files.elements"
                >
                    <button
                        class="border-r border-gray-200 dark:border-gray-700 h-9 min-w-9 px-2 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-500"
                        :class="{
                            'bg-gray-50 dark:bg-gray-700': element.active,
                        }"
                        :disabled="element.page === '...' || element.active"
                        :dusk="`page:${element.page}`"
                        @click.prevent="element.page === '...' || element.active ? null : goToPage(element.page)"
                    >
                        {{ element.page }}
                    </button>
                </template>
                <button
                    :disabled="!files.hasMorePages"
                    class="hidden md:flex items-center justify-center border-r border-gray-200 dark:border-gray-700 text-xl h-9 min-w-9 px-2 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700"
                    rel="next"
                    dusk="next"
                    @click.prevent="goToPage(files.nextPage)"
                >
                    ›
                </button>
                <button
                    :disabled="!files.hasMorePages"
                    class="hidden md:flex items-center justify-center border-r border-gray-200 dark:border-gray-700 text-xl h-9 min-w-9 px-2 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700"
                    rel="last"
                    dusk="last"
                    @click.prevent="goToPage(files.lastPage)"
                >
                    »
                </button>
            </div>
            <span class="hidden md:flex items-center justify-center text-xs px-4 ml-auto">{{ countLabel() }}</span>
        </nav>
    </div>
</template>

<script>
    export default {
        props: {
            files: {
                type: Array,
                default: () => [],
                required: true,
            },

            loading: {
                type: Boolean,
                default: () => false,
                required: true,
            },
        },

        methods: {
            goToPage(page) {
                this.$emit('goToPageEvent', page);
            },

            countLabel() {
                return this.files.total > 0
                    ? `${this.files.start}-${this.files.end} of ${this.files.total}`
                    : '';
            },
        },
    };
</script>
