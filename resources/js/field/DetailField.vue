<template>
    <template v-if="field.value">
        <PanelItem :index="index" :field="field" />
    </template>

    <template v-else>
        <PanelItem :index="index" :field="field" />
    </template>
</template>

<script>
export default {
    props: ["resource", "resourceName", "resourceId", "field"],
};
</script>
