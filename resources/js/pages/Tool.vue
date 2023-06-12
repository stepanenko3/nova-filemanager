<template>
    <div ref="filemanager-container">
        <Heading class="mb-6">
            {{ __("File manager") }}
        </Heading>

        <DefaultButton @click.prevent="() => (modalState = true)">
            Open Modal
        </DefaultButton>

        <BrowserModal
            v-model:state="modalState"
            @confirmSelect="confirmSelect"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";
import BrowserModal from "../components/BrowserModal.vue";

const modalState = ref(true);

function confirmSelect(e) {
    console.log(e);

    modalState.value = false;
}
</script>
