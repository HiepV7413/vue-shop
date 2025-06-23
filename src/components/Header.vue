<template>
    <div class="header-fixed">
        <MarqueeNotification class="topbar" />
        <v-app-bar :elevation="2" class="navbar">
            <v-menu offset-y open-on-hover>
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>Home</v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <RouterLink to="/">Home</RouterLink>
                    </v-list-item>
                    <v-list-item>
                        <RouterLink to="/Counter">Counter</RouterLink>
                    </v-list-item>
                    <v-list-item>
                        <RouterLink to="/demo">Demo</RouterLink>
                    </v-list-item>
                    <v-list-item>
                        <RouterLink to="/Faq">Faq</RouterLink>
                    </v-list-item>
                </v-list>
            </v-menu>
            <span>|</span>
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
            </v-menu>
            <span>|</span>
            <v-menu offset-y open-on-hover>
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>About</v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <RouterLink to="/about">About</RouterLink>
                    </v-list-item>
                    <v-list-item>
                        <RouterLink to="/about/history">We History</RouterLink>
                    </v-list-item>
                    <v-list-item>
                        <RouterLink to="/about/culture">Our Culture</RouterLink>
                    </v-list-item>
                </v-list>
            </v-menu>
            <span>|</span>
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
            </v-menu>
            <span>|</span>
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
            <VSpacer></VSpacer>
            <h2>My Shop</h2>
            <VSpacer></VSpacer>
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
        </v-app-bar>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MarqueeNotification from "@/components/MarqueeNotification.vue";

const currencies = [
    "USD, $",
    "EUR, €",
    "VND, ₫",
    "GBP, £",
    "JPY, ¥",
    "AUD, $",
    "CAD, $",
    "CHF, CHF",
    "CNY, ¥",
    "KRW, ₩",
];
const selectedCurrency = ref(currencies[0]);
</script>

<style lang="scss" scoped>
.header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
}

.navbar {
    position: static !important;
    box-shadow: none;
    font-size: 1.2rem;
    min-height: 60px !important; // Tăng chiều cao navbar lên 120px
    height: 75px !important; // Đảm bảo chiều cao cố định
    align-items: center;
}

.transparent-navbar {
    background: rgba(255, 255, 255, 0.4) !important;
}

.v-btn {
    font-size: 1.1rem !important;
    padding: 0 28px !important;
    height: 60px !important; // Tăng chiều cao nút cho phù hợp navbar lớn hơn
    display: flex;
    align-items: center;
}

.v-list-item {
    font-size: 1.1rem !important;
    min-height: 48px !important;
}

h2,
.logo-text {
    font-size: 2.2rem;
    font-weight: bold;
    letter-spacing: 0.1em;
    margin: 0 24px;
}
</style>
