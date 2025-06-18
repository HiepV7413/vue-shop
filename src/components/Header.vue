<template>
    <div class="header">
        <MarqueeNotification class="topbar"></MarqueeNotification>
        <v-app-bar :elevation="2" class="navbar" :class="{ 'scroll-navbar': position > 40 }">
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
                        <RouterLink to="/about">Abuot</RouterLink>
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
import { ref, onMounted, onUnmounted } from "vue";
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
const position = ref<number>(0);

onMounted(() => {
    const updateScroll = () => {
        position.value = window.scrollY;
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll);

    onUnmounted(() => {
        window.removeEventListener("scroll", updateScroll);
    });
});
</script>

<style lang="scss">
.navbar {
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    transform: translateY(40px) !important;
    transition: transform 0.5s ease;
}

.scroll-navbar {
    transform: translateY(0) !important;
}
</style>
