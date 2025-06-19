<template>
    <section class="py-12">
        <v-container class="d-flex justify-center">
            <v-slide-group show-arrows class="py-4" style="width: auto;">
                <!-- Tuỳ chỉnh icon nếu muốn -->
                <template #prev>
                    <v-btn icon>
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                </template>
                <template #next>
                    <v-btn icon>
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </template>

                <v-slide-item v-for="product in products" :key="product.id">
                    <!-- product-card có margin trái/phải 30px => khoảng cách 60px giữa các ảnh -->
                    <v-card class="product-card">
                        <v-img :src="product.image" aspect-ratio="1" class="rounded hover-img" color="#F5F5F5">
                            <template #placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular color="black" indeterminate />
                                </div>
                            </template>
                        </v-img>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-container>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Product {
    id: number
    image: string
}

const products = ref<Product[]>([
    { id: 1, image: new URL('@/assets/images/vector8.svg', import.meta.url).href },
    { id: 2, image: new URL('@/assets/images/vector9.svg', import.meta.url).href },
    { id: 3, image: new URL('@/assets/images/vector10.svg', import.meta.url).href },
    { id: 4, image: new URL('@/assets/images/vector11.svg', import.meta.url).href },
    // Thêm nếu cần
])
</script>

<style scoped>
.product-card {
    width: 200px;
    /* độ rộng mỗi ảnh/card, chỉnh theo nhu cầu */
    margin: 0 30px;
    /* margin trái/phải 30px => gap 60px */
}

.hover-img {
    transition: background-color 0.3s ease;
}

.hover-img:hover {
    background-color: #F3F0EE;
    transform: scale(1.03);
}

/* Responsive: điều chỉnh width khi màn hình nhỏ */
@media (max-width: 1200px) {
    .product-card {
        width: 300px;
        margin: 0 30px;
    }
}

@media (max-width: 600px) {
    .product-card {
        width: 200px;
        margin: 0 15px;
        /* có thể giảm gap trên mobile nếu muốn */
    }
}
</style>
