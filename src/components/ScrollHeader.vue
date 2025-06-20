<template>
    <div class="header-fixed">
        <v-app-bar :elevation="0" class="navbar">
            <div class="navbar-content">
                <!-- Menu trái -->
                <div class="menu-group">
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
                        </v-list>
                    </v-menu>
                    <span class="menu-divider"></span>
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
                    <span class="menu-divider"></span>
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
                    <span class="menu-divider"></span>
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
                    <span class="menu-divider"></span>
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
                </div>
                <!-- Logo giữa -->
                <div class="logo-center">
                    <h2
                        style="font-family: 'Montserrat', sans-serif; font-weight: 700; letter-spacing: 2px; margin: 0;">
                        TRENDZ</h2>
                </div>
                <!-- Nhóm phải -->
                <div class="right-group">
                    <v-select v-model="selectedCurrency" :items="currencies" dense hide-details solo-inverted
                        style="max-width: 120px" />
                    <v-btn icon>
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                    <v-btn text>Wishlist</v-btn>
                    <v-btn text>My Account</v-btn>
                    <v-btn icon>
                        <v-icon>mdi-cart-outline</v-icon>
                    </v-btn>
                </div>
            </div>
        </v-app-bar>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

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

<style lang="scss">
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
    height: 95px;
    min-height: 95px;
    max-height: 95px;
    display: flex;
    align-items: center;
    padding: 0 32px;
    background: rgba(255, 255, 255, 0.95) !important;
}

.navbar-content {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding-left: 80px;
    padding-right: 80px;
}

.menu-group {
    display: flex;
    align-items: center;
    gap: 4px; // Giảm từ 32px xuống 20px (hoặc nhỏ hơn nếu muốn sát hơn)
}

.menu-divider {
    height: 24px;
    width: 1px;
    background: #ddd;
    margin: 0 8px; // Giảm từ 16px xuống 8px
    display: inline-block;
}

.logo-center {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
}

.logo-center h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    letter-spacing: 2px;
    margin: 0;
    font-size: 28px;
    line-height: 95px; // Đảm bảo chữ nằm giữa theo chiều dọc
    pointer-events: auto;
}

.right-group {
    display: flex;
    align-items: center;
    gap: 20px;
}
</style>
