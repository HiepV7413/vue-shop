<template>
    <section class="feature-service py-12 bg-grey-lighten-5">
        <v-container fluid class="px-6">
            <!-- Splide Carousel -->
            <Splide :options="{
                type: 'loop',
                perPage: 4,
                perMove: 1,
                gap: 15,
                drag: true,
                arrows: true,
                pagination: false,
                breakpoints: {
                    1200: { perPage: 3 },
                    900: { perPage: 2 },
                    600: { perPage: 1 }
                }
            }" class="custom-carousel">
                <SplideSlide v-for="product in products" :key="product.id" class="carousel-slide">
                    <v-card class="product-card" elevation="0" max-width="225"
                        @mouseenter="hoveredProductId = product.id" @mouseleave="hoveredProductId = null"
                        :class="{ 'hovered': hoveredProductId === product.id }">
                        <v-img :src="product.image" height="225px" width="225px" cover>
                            <template #placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular color="grey-lighten-4" indeterminate />
                                </div>
                            </template>
                        </v-img>
                    </v-card>
                </SplideSlide>
            </Splide>
        </v-container>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

interface Product {
    id: number
    image: string
}

const hoveredProductId = ref<number | null>(null)

const products = ref<Product[]>([
    {
        id: 1,
        image: new URL('@/assets/images/home/vector8.svg', import.meta.url).href
    },
    {
        id: 2,
        image: new URL('@/assets/images/home/vector9.svg', import.meta.url).href
    },
    {
        id: 3,
        image: new URL('@/assets/images/home/vector10.svg', import.meta.url).href
    },
    {
        id: 4,
        image: new URL('@/assets/images/home/vector11.svg', import.meta.url).href
    },
    {
        id: 5,
        image: new URL('@/assets/images/home/vector8.svg', import.meta.url).href
    },
    {
        id: 6,
        image: new URL('@/assets/images/home/vector9.svg', import.meta.url).href
    },
    {
        id: 7,
        image: new URL('@/assets/images/home/vector10.svg', import.meta.url).href
    },
    {
        id: 8,
        image: new URL('@/assets/images/home/vector11.svg', import.meta.url).href
    }
])
</script>

<style scoped>
.feature-service {
    background: linear-gradient(135deg, rgba(248, 248, 248, 0) 0%, rgba(240, 240, 240, 0) 100%);
    overflow: hidden;
}

.custom-carousel {
    width: 100%;
    overflow: hidden;
}

/* Ẩn mũi tên chuyển trang của Splide */
:deep(.splide__arrow) {
    display: none !important;
}

.carousel-slide {
    padding-right: 15px;
    box-sizing: border-box;
}

.product-card {
    position: relative;
    background: transparent linear-gradient(135deg,
            rgba(240, 240, 240, 0.8) 100%,
            rgba(240, 240, 240, 0.8) 100%);
    transition: background 0.3s ease;
    box-shadow: none !important;
    width: 225px;
    margin: 0 auto;
}

.product-card.hovered {
    background: linear-gradient(135deg,
            rgba(255, 0, 0, 0.1) 0%,
            rgba(255, 0, 0, 0.2) 100%);
}

.v-img {
    transition: none !important;
    transform: none !important;
    height: 225px !important;
    width: 225px !important;
}

.v-container {
    max-width: 1400px !important;
    overflow: hidden;
}
</style>