<template>
    <section class="new-collections-section py-12 bg-grey-lighten-5">
        <v-container fluid class="px-6">
            <!-- Carousel -->
            <carousel :items-to-show="4.2" :wrap-around="true" :loop="true" :mouse-drag="true" :touch-drag="true"
                :transition="500" :snapAlign="'start'" class="custom-carousel">
                <slide v-for="product in products" :key="product.id" class="carousel-slide">
                    <v-card class="product-card" elevation="0" max-width="200"
                        @mouseenter="hoveredProductId = product.id" @mouseleave="hoveredProductId = null"
                        :class="{ 'hovered': hoveredProductId === product.id }">
                        <v-img :src="product.image" :alt="product.name" height="200px" width="200px" cover>
                            <template #placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular color="grey-lighten-4" indeterminate />
                                </div>
                            </template>
                        </v-img>
                    </v-card>
                </slide>
            </carousel>
        </v-container>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

interface Product {
    id: number
    name: string
    image: string
}

const hoveredProductId = ref<number | null>(null)

const products = ref<Product[]>([
    {
        id: 1,
        name: 'Urbane Sleeveless Dress',
        image: new URL('@/assets/images/vector8.svg', import.meta.url).href
    },
    {
        id: 2,
        name: 'Satin Sleeveless Dress',
        image: new URL('@/assets/images/vector9.svg', import.meta.url).href
    },
    {
        id: 3,
        name: 'Flossy Classic Dress',
        image: new URL('@/assets/images/vector10.svg', import.meta.url).href
    },
    {
        id: 4,
        name: 'Swag Long Dress',
        image: new URL('@/assets/images/vector11.svg', import.meta.url).href
    }
])
</script>

<style scoped>
.new-collections-section {
    background: linear-gradient(135deg, rgba(248, 248, 248, 0) 0%, rgba(240, 240, 240, 0) 100%);
    overflow: hidden;
    /* Ngăn tràn ra ngoài */
}

/* Custom carousel styles */
.custom-carousel {
    width: 100%;
    overflow: hidden;
    /* Quan trọng */
}

.carousel-slide {
    padding-right: 15px;
    /* Giảm từ 20px xuống 15px */
    box-sizing: border-box;
}

.product-card {
    position: relative;
    background: transparent linear-gradient(135deg,
            rgba(240, 240, 240, 0.8) 100%,
            rgba(240, 240, 240, 0.8) 100%);
    transition: background 0.3s ease;
    box-shadow: none !important;
    width: 100%;
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
}

/* Override carousel default styles - KEY FIX */
:deep(.carousel__viewport) {
    width: 100%;
    overflow: hidden;
    /* Quan trọng để tránh tràn */
}

:deep(.carousel__track) {
    align-items: flex-start;
}

:deep(.carousel__slide) {
    flex-shrink: 0;
    width: calc(25% - 15px);
    /* Giảm từ 15px xuống 12px */
    margin-right: 7px;
    /* Giảm từ 20px xuống 15px */
    box-sizing: border-box;
}

:deep(.carousel__slide:last-child) {
    margin-right: 0;
}

/* Đảm bảo container không bị tràn */
.v-container {
    max-width: 1400px !important;
    overflow: hidden;
}
</style>