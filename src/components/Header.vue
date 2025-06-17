<template>
    <div class="position-fixed header">
        <div>
            <MarqueeNotification v-if="position < 10" />

            <div class="d-flex">
                {{ position }}
                <v-btn>Home</v-btn><span>|</span>
                <v-menu offset-y open-on-hover>
                    <template #activator="{ props }">
                        <v-btn v-bind="props" text>Shop</v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <RouterLink to="/shop/men">Men Shop</RouterLink>
                        </v-list-item>
                        <v-list-item>
                            <RouterLink to="/shop/women">Women Shop</RouterLink>
                        </v-list-item>
                        <v-list-item>
                            <RouterLink to="/shop/kids">Kids Shop</RouterLink>
                        </v-list-item>
                    </v-list>
                </v-menu><span>|</span>
                <v-menu offset-y open-on-hover>
                    <template #activator="{ props }">
                        <v-btn v-bind="props" text>About</v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <RouterLink to="/about/history">We History</RouterLink>
                        </v-list-item>
                        <v-list-item>
                            <RouterLink to="/about/culture">Our Culture</RouterLink>
                        </v-list-item>
                    </v-list>
                </v-menu><span>|</span>
                <v-menu offset-y open-on-hover>
                    <template #activator="{ props }">
                        <v-btn v-bind="props" text>Blog</v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <RouterLink to="/blog/myBlog">My Blog</RouterLink>
                        </v-list-item>
                        <v-list-item>
                            <RouterLink to="/blog/everyoneBlog">Everyone Blog</RouterLink>
                        </v-list-item>
                    </v-list>
                </v-menu><span>|</span>
                <v-menu offset-y open-on-hover>
                    <template #activator="{ props }">
                        <v-btn v-bind="props" text>Pages</v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <RouterLink to="/pages/mypage1">My Page1</RouterLink>
                        </v-list-item>
                        <v-list-item>
                            <RouterLink to="/pages/mypage2">My Page2</RouterLink>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-spacer />
                <v-app-bar-logo>
                    <h2>My Shop</h2>
                </v-app-bar-logo>
                <v-spacer />
                <v-select v-model="selectedCurrency" :items="currencies" dense hide-details solo-inverted
                    style="max-width: 120px" />
                <v-btn>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <v-btn>Wishlist</v-btn>
                <v-btn>My Account</v-btn>
                <v-btn>
                    <v-icon>mdi-cart-outline</v-icon>
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import MarqueeNotification from '@/components/MarqueeNotification.vue'

const currencies = [
    'USD, $',
    'EUR, €',
    'VND, ₫',
    'GBP, £',
    'JPY, ¥',
    'AUD, $',
    'CAD, $',
    'CHF, CHF',
    'CNY, ¥',
    'KRW, ₩'
]
const selectedCurrency = ref(currencies[0])

const position = ref<number>(0)

watch(() => {

})
</script>

<style scoped>
.header {
    z-index: 10;
    background-color: #fff;
}

.header-transparent {
    background-color: rgba(255, 255, 255, 0.95) !important;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;
}

.header-transparent.scrolled {
    background-color: rgba(255, 255, 255, 0.85) !important;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

/* Tùy chỉnh thêm cho các button và text */
.header-transparent .v-btn {
    color: rgba(0, 0, 0, 0.8) !important;
}

.header-transparent h2 {
    color: rgba(0, 0, 0, 0.9) !important;
}

.header-transparent span {
    color: rgba(0, 0, 0, 0.6);
    margin: 0 8px;
}

/* Responsive */
@media (max-width: 768px) {
    .header-transparent {
        background-color: rgba(255, 255, 255, 0.9) !important;
    }

    .header-transparent.scrolled {
        background-color: rgba(255, 255, 255, 0.95) !important;
    }
}
</style>