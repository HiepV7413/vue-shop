<template>
    <section class="discover-new-style py-12 bg-grey-lighten-5">
        <v-container>
            <!-- Header -->
            <v-row>
                <v-col cols="12" class="text-center">
                    <p class="text-overline font-weight-bold mb-2 text-grey-darken-1">
                        Discover New Style
                    </p>
                    <h2 class="text-h4 font-weight-bold mb-8">Our Latest Brands</h2>
                </v-col>
            </v-row>

            <!-- Collection Tabs -->
            <v-row>
                <v-col cols="12" class="text-center mb-6">
                    <v-btn-toggle v-model="activeCollection" mandatory variant="text" class="collection-tabs">
                        <v-btn value="anon" :class="{ 'text-primary': activeCollection === 'anon' }">
                            Anon
                        </v-btn>
                        <v-btn value="ample" :class="{ 'text-primary': activeCollection === 'ample' }">
                            Ample
                        </v-btn>
                        <v-btn value="hackel" :class="{ 'text-primary': activeCollection === 'hackel' }">
                            Hackel
                        </v-btn>
                        <v-btn value="divine" :class="{ 'text-primary': activeCollection === 'divine' }">
                            Divine
                        </v-btn>
                        <v-btn value="flaunt" :class="{ 'text-primary': activeCollection === 'flaunt' }">
                            Flaunt
                        </v-btn>
                        <v-btn value="blend" :class="{ 'text-primary': activeCollection === 'blend' }">
                            Blend
                        </v-btn>
                        <v-btn value="siren" :class="{ 'text-primary': activeCollection === 'siren' }">
                            Siren
                        </v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-row>

            <!-- Carousel with Custom Arrows -->
            <div class="position-relative">
                <Splide ref="splideRef" :options="{
                    type: 'loop',
                    perPage: 4,
                    perMove: 1,
                    gap: 1,
                    arrows: false,
                }" aria-label="Our Products" class="cursor-grab">
                    <SplideSlide v-for="(product, index) in filteredProducts" :key="index">
                        <div>
                            <v-card class="product-card mx-2" elevation="0" max-width="300"
                                @mouseenter="hoveredProductId = product.id" @mouseleave="hoveredProductId = null"
                                :class="{ 'hovered-info': hoveredProductId === product.id }">
                                <div class="sale-badge" v-if="product.onSale">
                                    <v-chip color="black" text-color="white" size="lag"
                                        class="font-weight-bold">Sale</v-chip>
                                </div>
                                <v-img :src="hoveredProductId === product.id ? product.hoverImage : product.image"
                                    :alt="product.name" height="540px" width="417px" cover>
                                    <template #placeholder>
                                        <div class="d-flex align-center justify-center fill-height">
                                            <v-progress-circular color="grey-lighten-4" indeterminate />
                                        </div>
                                    </template>
                                </v-img>
                                <v-card-text class="text-center pa-4 transition-border">
                                    <h3 class="text-h6 font-weight-medium mb-2">{{ product.name }}</h3>
                                    <div class="price-section">
                                        <span class="text-body-2 text-grey-darken-1">Starts at</span>
                                        <span v-if="product.originalPrice"
                                            class="text-decoration-line-through text-grey ml-2">
                                            € {{ product.originalPrice }}
                                        </span>
                                        <span class="font-weight-bold ml-2">€ {{ product.currentPrice }}</span>
                                    </div>
                                    <div class="select-options-placeholder mt-4"
                                        :class="{ hidden: hoveredProductId !== product.id }">
                                        <router-link :to="`/product/${product.id}`"
                                            class="select-options-link text-decoration-underline font-weight-bold d-flex align-center">
                                            <span>Select Options</span>
                                            <div class="ml-1" style="margin-left: 5px;">
                                                <div
                                                    class="position-relative btn-right d-flex align-center px-1 cursor-pointer">
                                                    <img class="btn-right-icon" src="@/assets/images/home/vector15.svg"
                                                        alt="Next" width="25" height="25" />
                                                    <div class="overlay"></div>
                                                </div>
                                            </div>
                                        </router-link>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </div>
                    </SplideSlide>
                </Splide>

                <!-- Custom Arrows -->
                <div class="splide__arrows">
                    <div class="splide__arrow splide__arrow--prev" @click="goToPrev">
                        <div class="position-relative btn-left d-flex align-center px-1 cursor-pointer">
                            <img class="btn-left-icon" src="@/assets/images/home/vector14.svg" alt="Previous" width="50"
                                height="50" />
                            <div class="overlay"></div>
                        </div>
                    </div>

                    <div class="splide__arrow splide__arrow--next" @click="goToNext">
                        <div class="position-relative btn-right d-flex align-center px-1 cursor-pointer">
                            <img class="btn-right-icon" src="@/assets/images/home/vector15.svg" alt="Next" width="50"
                                height="50" />
                            <div class="overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </v-container>
    </section>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { ref, computed } from 'vue'
import "@splidejs/vue-splide/css"

interface Product {
    id: number
    name: string
    image: string
    hoverImage: string
    currentPrice: number
    originalPrice?: number
    onSale: boolean
    collection: Array<'anon' | 'ample' | 'hackel' | 'divine' | 'flaunt' | 'blend' | 'siren'>
}

const activeCollection = ref<'anon' | 'ample' | 'hackel' | 'divine' | 'flaunt' | 'blend' | 'siren'>('anon')
const hoveredProductId = ref<number | null>(null)
const splideRef = ref<any>(null)

function goToPrev() {
    if (splideRef.value?.splide) {
        splideRef.value.splide.go('<')
    }
}

function goToNext() {
    if (splideRef.value?.splide) {
        splideRef.value.splide.go('>')
    }
}

const products = ref<Product[]>([
    {
        id: 1,
        name: 'Urbane Sleeveless Dress',
        image: new URL('@/assets/images/home/7-home-shop-5.1.webp', import.meta.url).href,
        hoverImage: new URL('@/assets/images/home/7-home-shop-5.2.webp', import.meta.url).href,
        currentPrice: 16.83,
        originalPrice: 18.85,
        onSale: true,
        collection: ['ample', 'flaunt', 'siren']
    },
    {
        id: 2,
        name: 'Satin Sleeveless Dress',
        image: new URL('@/assets/images/home/7-home-shop-6.1.webp', import.meta.url).href,
        hoverImage: new URL('@/assets/images/home/7-home-shop-6.2.webp', import.meta.url).href,
        currentPrice: 20.78,
        onSale: true,
        collection: ['ample', 'flaunt', 'siren']
    },
    {
        id: 3,
        name: 'Flossy Classic Dress',
        image: new URL('@/assets/images/home/7-home-shop-7.1.webp', import.meta.url).href,
        hoverImage: new URL('@/assets/images/home/7-home-shop-7.1.webp', import.meta.url).href + '?v=1',
        currentPrice: 34.65,
        originalPrice: 42.17,
        onSale: true,
        collection: ['ample', 'flaunt', 'siren']
    },
    {
        id: 4,
        name: 'Swag Long Dress',
        image: new URL('@/assets/images/home/7-home-shop-8.1.webp', import.meta.url).href,
        hoverImage: new URL('@/assets/images/home/7-home-shop-8.2.webp', import.meta.url).href,
        currentPrice: 22.77,
        originalPrice: 28.8,
        onSale: true,
        collection: ['ample', 'flaunt', 'siren']
    },
    {
        id: 5,
        name: 'Winter Coat Dress',
        image: new URL('@/assets/images/home/7-home-shop-1.1.webp', import.meta.url).href,
        hoverImage: new URL('@/assets/images/home/7-home-shop-1.1.webp', import.meta.url).href + '?v=1',
        currentPrice: 45.99,
        originalPrice: 52.0,
        onSale: true,
        collection: ['anon', 'hackel', 'divine', 'blend']
    },
    {
        id: 6,
        name: 'Warm Knit Dress',
        image: new URL('@/assets/images/home/7-home-shop-2.1.webp', import.meta.url).href,
        hoverImage: new URL('@/assets/images/home/7-home-shop-2.1.webp', import.meta.url).href + '?v=1',
        currentPrice: 38.5,
        onSale: false,
        collection: ['anon', 'hackel', 'divine', 'blend']
    },
    {
        id: 7,
        name: 'Elegant Winter Dress',
        image: new URL('@/assets/images/home/7-home-shop-3.1.webp', import.meta.url).href,
        hoverImage: new URL('@/assets/images/home/7-home-shop-3.1.webp', import.meta.url).href + '?v=1',
        currentPrice: 55.99,
        originalPrice: 65.0,
        onSale: true,
        collection: ['anon', 'hackel', 'divine', 'blend']
    },
    {
        id: 8,
        name: 'Cozy Sweater Dress',
        image: new URL('@/assets/images/home/7-home-shop-4.1.webp', import.meta.url).href,
        hoverImage: new URL('@/assets/images/home/7-home-shop-4.1.webp', import.meta.url).href + '?v=1',
        currentPrice: 29.99,
        onSale: false,
        collection: ['anon', 'hackel', 'divine', 'blend']
    }
])


const filteredProducts = computed(() =>
    products.value.filter(product => product.collection.includes(activeCollection.value))
)
</script>

<style scoped>
.discover-new-style {
    background: linear-gradient(135deg, rgba(248, 248, 248, 0.9) 0%, rgba(240, 240, 240, 0.9) 100%);
}

.collection-tabs .v-btn {
    text-transform: none;
    letter-spacing: normal;
}

.product-card {
    position: relative;
    background: transparent;
    transition: none;
    box-shadow: none !important;
}

/* Không hiệu ứng khi hover */
.product-card:hover {
    transform: none !important;
    box-shadow: none !important;
}

/* Ảnh không phóng to khi hover */
.v-img,
.product-card:hover .v-img {
    transition: none !important;
    transform: none !important;
}

.sale-badge {
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: 2;
}

.price-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
}

.transition-border {
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s ease;
}

.hovered-info {
    border: 1px solid #D1C2BB;
}

.select-options-placeholder {
    height: 40px;
    /* giữ chiều cao cố định */
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;
}

.select-options-placeholder.hidden {
    opacity: 0;
    pointer-events: none;
}

/* Custom Arrow Styles */
.splide__arrows {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    pointer-events: none;
    z-index: 10;
}

.splide__arrow {
    position: absolute;
    pointer-events: auto;
}

.splide__arrow--prev {
    left: -60px;
}

.splide__arrow--next {
    right: -60px;
}

/* Router Link Styles */
.select-options-link {
    color: inherit;
    text-decoration: underline;
    display: flex;
    align-items: center;
    justify-content: center;
}

.select-options-link:hover {
    color: inherit;
    text-decoration: underline;
}

/* Hiệu ứng hover cho select options */
.select-options-link:hover .btn-right .overlay {
    height: 100%;
    width: 100%;
}

.btn-right,
.btn-left {
    &:hover .overlay {
        height: 100%;
        width: 100%;
    }

    .btn-right-icon,
    .btn-left-icon {
        position: relative;
        z-index: 2;
    }

    .overlay {
        position: absolute;
        background-color: #ccc;
        width: 40%;
        height: 50%;
        z-index: 1;
        transition: all 0.3s ease-in-out;
    }
}

.btn-right {
    .overlay {
        left: 0;
    }
}

.btn-left {
    .overlay {
        right: 0;
    }
}
</style>