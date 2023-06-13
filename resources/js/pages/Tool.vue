<template>
    <div ref="filemanager-container">
        <Heading class="mb-6">
            {{ __("File manager") }}
        </Heading>

        <Card>
            <Browser />
        </Card>

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
import Browser from "@/components/Browser.vue";

const modalState = ref(false);

function confirmSelect(e) {
    console.log(e);

    modalState.value = false;
}
</script>
