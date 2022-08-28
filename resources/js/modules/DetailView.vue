<template>
    <div class="flex items-center justify-center" :class="class" style="min-height: 400px">
        <template v-if="field.mimeType == 'image'">
            <img class="h-full w-full" :src="field.url" style="object-fit: contain" />
        </template>

        <template v-else-if="field.mimeType == 'audio'">
            <audio ref="audio" controls>
                <source :src="field.url" :type="field.mime" />
            </audio>
        </template>

        <template v-else-if="field.mimeType == 'video'">
            <video ref="video" controls crossorigin playsinline>
                <source :src="field.url" :type="field.mime" />
            </video>
        </template>

        <template v-else-if="field.mimeType == 'text'">
            <pre class="p-4" style="
                width: 100%;
                word-break: break-all;
                word-wrap: break-word;
                display: block;
                overflow: auto;
            "><code
                ref="code"
                v-html="field.source"
            ></code></pre>
        </template>

        <template v-else-if="field.mimeType == 'pdf'">
            <object :data="field.url" type="application/pdf" width="100%" height="100%">
                <iframe :src="field.url" width="100%" height="100%" style="border: none">
                    <object class="no-preview" v-html="field.image"></object>
                </iframe>
            </object>
        </template>

        <template v-else>
            <Icon :type="mimeIcons[field.mimeType] || mimeIcons.text" width="64" height="64" />
        </template>
    </div>
</template>

<script>
    import MimeIconsEnum from '../tools/MimeIconsEnum'

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
