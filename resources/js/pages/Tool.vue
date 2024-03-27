<template>
    <div>
        <Heading class="mb-6">
            {{ __("File manager") }}
        </Heading>

        <div class="relative bg-white dark:bg-gray-800 rounded-lg shadow">
            <Browser :selecting="false" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Browser from "../components/Browser.vue";
</script>
