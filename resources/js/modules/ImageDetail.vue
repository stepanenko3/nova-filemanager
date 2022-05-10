<template>
    <div class="relative w-full h-full flex flex-col justify-center overflow-hidden">
        <template v-if="loading">
            <div class="rounded-lg flex items-center justify-center absolute pin z-50">
                <loader class="text-60" />
            </div>
        </template>

        {{ this.file.image }}

        <div ref="imageDiv" class="image-block flex justify-center w-full h-full"></div>

        <div
            class="missing flex-grow flex flex-col items-center justify-center text-center leading-normal p-4"
            v-if="missing"
        >
            <a :href="file.name" class="text-primary" target="_blank">
                {{ __('This image') }}
            </a>
            {{ __('could not be found.') }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            file: {
                type: Object,
                default: function () {
                    return { name: '' };
                },
                required: true,
            },
        },

        data: () => ({
            loading: true,
            missing: false,
            voptions: {
                inline: true,
                button: true,
                navbar: false,
                loading: true,
                title: false,
                toolbar: false,
                tooltip: false,
                movable: false,
                zoomable: false,
                rotatable: false,
                scalable: true,
                transition: true,
                fullscreen: true,
                keyboard: true,
                toggleOnDblclick: true,
                url: 'data-source',
            },
            images: [],
        }),

        mounted() {
            Nova.request()
                .get(this.file.image, {
                    responseType: 'blob',
                })
                .then(({ headers, data }) => {
                    const blob = new Blob([data], { type: headers['content-type'] });
                    let newImage = new Image();
                    newImage.src = window.URL.createObjectURL(blob);
                    newImage.className = 'image block w-full self-center';
                    newImage.draggable = false;
                    this.$refs.imageDiv.appendChild(newImage);
                    this.loading = false;
                })
                .catch((error) => {
                    if (error && this.file.image) {
                        // this.missing = true;
                        // this.$emit('missing', true);
                        // this.loading = false;

                        let newImage = new Image();
                        newImage.src = this.file.image;
                        newImage.className = 'image block w-full self-center';
                        newImage.draggable = false;
                        this.$refs.imageDiv.appendChild(newImage);
                        this.loading = false;
                    }
                });
        },
    };
</script>
