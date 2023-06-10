<template>
    <DefaultField :field="currentField" :errors="errors" :show-help-text="showHelpText">
        <template #field>
            asd
        </template>
    </DefaultField>
</template>

<script>
    import { DependentFormField, HandlesValidationErrors } from 'laravel-nova';

    export default {
        mixins: [DependentFormField, HandlesValidationErrors],
    }
</script>
