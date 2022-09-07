<template>
    <div class="flex items-center justify-center" :class="class" style="min-height: 400px">
        <template v-if="field.type == 'image'">
            <img class="h-full w-full" :src="field.url" style="object-fit: contain" />
        </template>

        <template v-else-if="field.type == 'audio'">
            <audio ref="audio" controls>
                <source :src="field.url" :type="field.mime" />
            </audio>
        </template>

        <template v-else-if="field.type == 'video'">
            <video ref="video" controls crossorigin playsinline>
                <source :src="field.url" :type="field.mime" />
            </video>
        </template>

        <template v-else-if="field.type == 'text'">
            <highlightjs autodetect :code="field.meta.source" />
        </template>

        <template v-else-if="field.type == 'pdf'">
            <object :data="field.url" type="application/pdf" width="100%" height="100%">
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

    import hljs from 'highlight.js';
    import hljsVuePlugin from '@highlightjs/vue-plugin';

    import 'highlight.js/styles/github-dark.css';

    hljs.debugMode();

    export default {
         components: {
            highlightjs: hljsVuePlugin.component
        },

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
    code.hljs {
        white-space: pre-wrap;
        word-break: break-all;
    }
</style>
