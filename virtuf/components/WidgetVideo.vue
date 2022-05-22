<template>
    <div class="widget" data-aos="fade-up" data-aos-duration="1100">
        <div class="widget-video">
            <div class="thumb">
                <img src="/images/photos/video.jpg" alt="video image">
            </div>

            <CoolLightBox 
                :items="items" 
                :index="index"
                @close="index = null">
            </CoolLightBox>

            <a class="btn-play play-video-popup" href="javascript:void(0)" @click="index = imageIndex" v-for="(image, imageIndex) in items" :key="imageIndex">
                <span class="icon">
                    <img src="/images/icons/play.png" alt="video">
                </span>
            </a>
        </div>
    </div>
</template>

<script>
    import CoolLightBox from 'vue-cool-lightbox'
    import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

    export default {
        components: {
            CoolLightBox,
        },

        data() {
            return {
                items: [
                    {
                        src: "https://www.youtube.com/watch?v=Z2DK6QJX1rs",
                        autoplay: true
                    },
                ],
                index: null
            }
        },
    };
</script>
