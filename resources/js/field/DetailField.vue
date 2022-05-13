<template>
    <template v-if="field.value">
        <PanelItem v-if="display == 'normal'" :index="index" :field="field" />
        <PanelItem v-else :index="index" :field="field">
            <template #value>
                <DetailView :field="field" />
            </template>
        </PanelItem>
    </template>

    <template v-else>
        <PanelItem :index="index" :field="field" />
    </template>
</template>

<script>
    import DetailView from '../modules/DetailView'

    export default {
        props: ['resource', 'resourceName', 'resourceId', 'field'],

        components: {
            DetailView: DetailView,
        },

        data: () => ({
            display: 'normal',
        }),

        mounted() {
            this.display = this.field.displayDetail || this.field.display || 'normal';
        },
    };
</script>
