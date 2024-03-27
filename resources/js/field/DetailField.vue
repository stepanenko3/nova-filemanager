<template>
    <template v-if="field.value">
        <PanelItem :index="index" :field="field" />
    </template>

    <template v-else>
        <PanelItem :index="index" :field="field" />
    </template>
</template>

<script setup lang="ts">
defineProps<{
    index: number;
    resource: object;
    resourceName: string;
    resourceId: string;
    field: object;
}>();
</script>

