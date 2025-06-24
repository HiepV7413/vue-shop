<template>
    <section class="instagram py-12 bg-grey-lighten-5">
        <!-- Background text -->
        <div class="background-text">INSTA FEED</div>

        <v-container fluid class="px-4">
            <v-row>
                <v-col cols="12" class="text-center">
                    <p class="text-overline font-weight-bold mb-2 text-grey-darken-1">
                        Follow Us
                    </p>
                    <h2 class="text-h4 font-weight-bold mb-8">@Yourinstagram</h2>
                </v-col>
            </v-row>
            <div class="carousel-container">
                <div class="carousel-wrapper">
                    <Splide :options="{
                        type: 'slide',
                        rewind: true,
                        perMove: 1,
                        fixedWidth: '320px',
                        fixedHeight: '280px',
                        gap: '16px',
                        padding: '0',
                        trimSpace: true,
                        pagination: false,
                        breakpoints: {
                            1200: { fixedWidth: '280px', fixedHeight: '240px', gap: '16px', padding: '0' },
                            992: { fixedWidth: '260px', fixedHeight: '220px', gap: '16px', padding: '0' },
                            768: { fixedWidth: '240px', fixedHeight: '200px', gap: '16px', padding: '0' },
                            576: { fixedWidth: '200px', fixedHeight: '180px', gap: '16px', padding: '0' },
                        }
                    }" aria-label="Our Products" class="cursor-grab">
                        <SplideSlide v-for="(product, idx) in products" :key="product.id">
                            <div class="image-wrapper" :class="`float-${(idx % 5) + 1}`">
                                <v-img :src="product.image" cover class="square-img">
                                    <template #placeholder>
                                        <div class="d-flex align-center justify-center fill-height">
                                            <v-progress-circular color="grey-lighten-4" indeterminate />
                                        </div>
                                    </template>
                                </v-img>
                                <div class="instagram-overlay">
                                    <img :src="instagramLogo" alt="Instagram" class="instagram-logo" />
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </v-container>
    </section>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { ref } from "vue";
import "@splidejs/vue-splide/css";

interface Product { id: number; image: string; }
const products = ref<Product[]>([
    { id: 1, image: new URL('@/assets/images/home/Home-3-insta-1.webp', import.meta.url).href },
    { id: 2, image: new URL('@/assets/images/home/Home-3-insta-2.webp', import.meta.url).href },
    { id: 3, image: new URL('@/assets/images/home/Home-3-insta-3.webp', import.meta.url).href },
    { id: 4, image: new URL('@/assets/images/home/Home-3-insta-4.webp', import.meta.url).href },
    { id: 5, image: new URL('@/assets/images/home/Home-3-insta-5.webp', import.meta.url).href },
    { id: 6, image: new URL('@/assets/images/home/Home-3-insta-6.webp', import.meta.url).href },
]);
const instagramLogo = new URL(
    '@/assets/images/instagram-svgrepo-com.svg',
    import.meta.url
).href;
</script>

<style scoped>
.instagram {
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg,
            rgba(248, 248, 248, 0) 0%,
            rgba(240, 240, 240, 0) 100%);
}

/* Background large text */
.background-text {
    position: absolute;
    /* top: 50%; */
    bottom: 1%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    pointer-events: none;
    z-index: 0;
    font-size: clamp(150px, 10vw, 300px);
    color: white;
    -webkit-text-stroke: 2px black;
    text-shadow:
        -2px -2px 0 #000,
        2px -2px 0 #000,
        -2px 2px 0 #000,
        2px 2px 0 #000;
    opacity: 0;
    animation: fadeInOut 6s ease-in-out infinite;
}

@keyframes fadeInOut {
    0% {
        opacity: 0;
    }

    25% {
        opacity: 0.1;
    }

    50% {
        opacity: 0.2;
    }

    75% {
        opacity: 0.1;
    }

    100% {
        opacity: 0;
    }
}

/* Đảm bảo carousel nằm trên background-text */
.carousel-container,
:deep(.splide__slide) {
    position: relative;
    z-index: 1;
}

.carousel-container {
    padding: 60px 0;
    overflow: visible;
}

:deep(.splide__arrow) {
    display: none !important;
}

:deep(.splide__track),
:deep(.splide__list) {
    overflow-y: visible !important;
    padding: 30px 0;
}

:deep(.splide__slide) {
    overflow: visible !important;
    padding: 0 !important;
    min-width: 0;
    flex: 0 0 auto;
}

.image-wrapper {
    position: relative;
    width: 100%;
    max-width: 320px;
    height: 280px;
    margin: 0 auto;
    flex-shrink: 0;
}

.square-img {
    object-fit: cover !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s ease;
    will-change: transform;
    transform-origin: center center;
    backface-visibility: hidden;
    perspective: 1000px;
    transform: translateZ(0);
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
}

.instagram-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(86, 94, 65, 0.7);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 2;
}

.instagram-logo {
    width: 60px;
    height: 60px;
    filter: brightness(0) invert(1);
    transition: transform 0.3s ease;
}

@keyframes wave-float {

    0%,
    100% {
        transform: translateY(0) translateZ(0);
    }

    50% {
        transform: translateY(-20px) translateZ(0);
    }
}

.float-1 {
    animation: wave-float 3s ease-in-out infinite;
    animation-delay: 0s;
}

.float-2 {
    animation: wave-float 3s ease-in-out infinite;
    animation-delay: 0.2s;
}

.float-3 {
    animation: wave-float 3s ease-in-out infinite;
    animation-delay: 0.4s;
}

.float-4 {
    animation: wave-float 3s ease-in-out infinite;
    animation-delay: 0.6s;
}

.float-5 {
    animation: wave-float 3s ease-in-out infinite;
    animation-delay: 0.8s;
}

.image-wrapper:hover .square-img {
    transform: scale(1.05);
}

.image-wrapper:hover .instagram-overlay {
    opacity: 1;
}

.image-wrapper:hover .instagram-logo {
    transform: scale(1.1);
}

.image-wrapper:hover {
    animation-play-state: paused !important;
}

@media (max-width: 1200px) {
    .image-wrapper {
        max-width: 280px;
        height: 240px;
    }

    .square-img {
        max-width: 280px;
        height: 240px !important;
    }
}

@media (max-width: 992px) {
    .image-wrapper {
        max-width: 260px;
        height: 220px;
    }

    .square-img {
        max-width: 260px;
        height: 220px !important;
    }
}

@media (max-width: 768px) {
    .image-wrapper {
        max-width: 240px;
        height: 200px;
    }

    .square-img {
        max-width: 240px;
        height: 200px !important;
    }

    .instagram-logo {
        width: 50px;
        height: 50px;
    }

    .carousel-container {
        padding: 50px 0;
    }

    :deep(.splide__track),
    :deep(.splide__list) {
        padding: 25px 0;
    }
}

@media (max-width: 576px) {
    .image-wrapper {
        max-width: 200px;
        height: 180px;
    }

    .square-img {
        max-width: 200px;
        height: 180px !important;
    }
}

@media (prefers-reduced-motion: reduce) {

    .float-1,
    .float-2,
    .float-3,
    .float-4,
    .float-5 {
        animation: none;
    }
}

.carousel-wrapper {
    padding: 0 80px;
}

@media (max-width: 768px) {
    .carousel-wrapper {
        padding: 0 30px;
    }
}

@media (max-width: 576px) {
    .carousel-wrapper {
        padding: 0 16px;
    }
}
</style>
