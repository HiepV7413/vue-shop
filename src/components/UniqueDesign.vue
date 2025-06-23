<template>
    <section class="unique-design py-12 bg-grey-lighten-5">
        <v-container>
            <!-- Header -->
            <v-row>
                <v-col cols="12" class="text-center">
                    <p class="text-overline font-weight-bold mb-2 text-grey-darken-1">
                        Unique Design
                    </p>
                    <h2 class="text-h4 font-weight-bold mb-8">Trending Products</h2>
                </v-col>
            </v-row>

            <!-- Products Grid -->
            <v-row justify="center" class="g-3">
                <v-col v-for="product in products" :key="product.id" cols="12" md="4">
                    <v-card class="product-card" elevation="0" @mouseenter="hoveredProductId = product.id"
                        @mouseleave="hoveredProductId = null">
                        <div class="image-wrapper">
                            <div class="image-container">
                                <v-img :src="product.image" :alt="product.name" height="636" width="539" cover>
                                    <template #placeholder>
                                        <div class="d-flex align-center justify-center fill-height">
                                            <v-progress-circular color="grey-lighten-4" indeterminate />
                                        </div>
                                    </template>
                                </v-img>
                            </div>
                            <div class="overlay-content">
                                <h3 class="collection-title">{{ product.name }}</h3>
                                <p class="collection-description">{{ product.description }}</p>
                                <v-btn class="shop-btn" variant="text" color="white" size="small">
                                    <u>SHOP NOW</u>
                                </v-btn>
                            </div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Product {
    id: number
    name: string
    image: string
    description: string
}

const hoveredProductId = ref<number | null>(null)

const products = ref<Product[]>([
    {
        id: 1,
        name: 'Western Collection',
        image: new URL('@/assets/images/grid01_207f76bf-46ab-4eeb-900d-ea0f0c3181f5.webp', import.meta.url).href,
        description: 'Ante in nibh mauris cursus mattis molestie a'
    },
    {
        id: 2,
        name: 'Classic Collection',
        image: new URL('@/assets/images/grid02_10c0b21e-9406-455c-beaa-b70f0902e568.webp', import.meta.url).href,
        description: 'Mattis molestie a iaculis at erat pellentesquet'
    },
    {
        id: 3,
        name: 'Elegant Collection',
        image: new URL('@/assets/images/grid03_a8be2ec1-d176-42be-9c2b-49a2ac9973b5.webp', import.meta.url).href,
        description: 'Enim sit amet venenatis urna mauris in aliquam sem'
    }
])
</script>

<style lang="scss">
.unique-design {
    background: linear-gradient(135deg, rgba(248, 248, 248, 0) 0%, rgba(240, 240, 240, 0) 0%);
}

.product-card {
    position: relative;
    background: transparent;
    border-radius: 0;
    transition: transform 0.3s;
    max-width: 539px;
    margin: 0 auto;
}

.product-card:hover {
    transform: none;
}

.image-wrapper {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 636px;
    border-radius: 8px;
}

.image-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;

    .v-img {
        width: 100% !important;
        height: 100% !important;
    }

    .v-img__img {
        transition: all 0.4s ease;
        transform-origin: center center;
        width: 100% !important;
        height: 100% !important;
        object-fit: cover;
    }

    &:hover .v-img__img {
        transform: scale(1.15) rotate(3deg);
    }
}

.overlay-content {
    position: absolute;
    bottom: 30px;
    left: 30px;
    right: 30px;
    z-index: 2;
    pointer-events: none;
    background: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: white;
    text-align: left;
}

.collection-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 12px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    line-height: 1.2;
}

.collection-description {
    font-size: 1rem;
    margin-bottom: 16px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    line-height: 1.4;
    max-width: 300px;
}

.shop-btn {
    border: none !important;
    color: white !important;
    font-weight: bold;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    padding: 0 !important;
    min-width: auto !important;
    height: auto !important;
    text-decoration: underline;
    font-size: 0.9rem;
    pointer-events: auto;
}

.shop-btn:hover {
    color: #f0f0f0 !important;
    transform: translateX(5px);
}

// Responsive adjustments
@media (max-width: 960px) {
    .image-wrapper {
        height: 500px;
    }

    .product-card {
        max-width: 100%;
    }
}

@media (max-width: 600px) {
    .image-wrapper {
        height: 400px;
    }

    .collection-title {
        font-size: 1.5rem;
    }

    .collection-description {
        font-size: 0.9rem;
    }
}
</style>