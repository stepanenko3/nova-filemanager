<template>
    <div class="flex items-center justify-center" :class="class" style="min-height: 300px">
        <template v-if="field.type == 'image'">
            <img class="h-full w-full" :src="field.url" style="object-fit: contain" />
        </template>

        <template v-else-if="field.type == 'audio'">
            <audio ref="audio" controls>
                <source :src="field.url" :type="field.mime" />
            </audio>
        </template>

        <template v-else-if="field.type == 'video'">
            <video
                ref="video"
                controls
                crossorigin
                playsinline
                style="width: 100%; height: 300px; object-fit:contain"
            >
                <source :src="field.url" :type="field.mime" />
            </video>
        </template>

        <template v-else-if="field.type == 'text'">
            <pre class="w-full p-4"><code v-text="field.meta.source"></code></pre>
        </template>

        <template v-else-if="field.type == 'pdf'">
            <object :data="field.url" type="application/pdf" width="100%" height="300">
                <iframe :src="field.url" width="100%" height="100%" style="border: none">
                    <object class="no-preview" v-html="field.image"></object>
                </iframe>
            </object>
        </template>

        <template v-else>
            <Icon :type="mimeIcons[field.type] || mimeIcons.text" width="64" height="64" />
        </template>
    </div>
</template>

<script>
    import MimeIconsEnum from '../tools/MimeIconsEnum';

    export default {
        props: {
            field: {
                type: Object,
                required: true,
            },
            class: {
                type: String,
                default: '',
                required: false,
            },
        },

        data: () => ({
            mimeIcons: MimeIconsEnum,
        }),
    };
</script>

<style>
    code {
        white-space: pre-wrap;
        word-break: break-all;
    }
</style>
