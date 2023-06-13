<template>
    <div
        class="flex items-center justify-center h-80"
        :class="class"
    >
        <template v-if="file.type == 'image'">
            <img
                class="h-full w-full"
                :src="file.url"
                style="object-fit: contain"
            />
        </template>

        <template v-else-if="file.type == 'audio'">
            <audio ref="audio" controls>
                <source :src="file.url" :type="file.mime" />
            </audio>
        </template>

        <template v-else-if="file.type == 'video'">
            <video
                ref="video"
                controls
                crossorigin=""
                playsinline
                style="width: 100%; height: 300px; object-fit: contain"
            >
                <source :src="file.url" :type="file.mime" />
            </video>
        </template>

        <template v-else-if="file.type == 'text'">
            <pre
                class="w-full p-4"
            ><code v-text="file.meta.source"></code></pre>
        </template>

        <template v-else-if="file.type == 'pdf'">
            <object
                :data="file.url"
                type="application/pdf"
                width="100%"
                height="300"
            >
                <iframe
                    :src="file.url"
                    width="100%"
                    height="100%"
                    style="border: none"
                >
                    <object class="no-preview" v-html="file.image"></object>
                </iframe>
            </object>
        </template>

        <template v-else>
            <Icon
                :type="mimeIcons[file.type] || mimeIcons.text"
                width="64"
                height="64"
            />
        </template>
    </div>
</template>

<script setup lang="ts">
import { mimeIcons } from "@/helpers/mime-icons";

const props = defineProps({
    file: {
        type: Object,
        required: true,
    },
    class: {
        type: String,
        default: "",
        required: false,
    },
});
</script>

<style>
code {
    white-space: pre-wrap;
    word-break: break-all;
}
</style>
