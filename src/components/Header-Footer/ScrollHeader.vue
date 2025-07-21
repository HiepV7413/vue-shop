<template>
    <div class="scroll-header">
        <v-app-bar :elevation="0" class="navbar transparent-navbar">
            <RouterLink to="/" style="text-decoration: none;">
                <v-btn text color="black">Home</v-btn>
            </RouterLink>
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
            <RouterLink to="/about" style="text-decoration: none;">
                <v-btn text color="black">About</v-btn>
            </RouterLink>
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
                        <RouterLink to="/Demo/Counter">Counter</RouterLink>
                    </v-list-item>
                    <v-list-item>
                        <RouterLink to="/Pages/Faq">Faq</RouterLink>
                    </v-list-item>
                    <v-list-item>
                        <RouterLink to="/Demo/demo">Demo</RouterLink>
                    </v-list-item>
                    <v-list-item>
                        <RouterLink to="/Pages/404Pages">404</RouterLink>
                    </v-list-item>
                    <v-list-item>
                        <RouterLink to="/Pages/Contact">Contact</RouterLink>
                    </v-list-item>
                </v-list>
            </v-menu>
            <VSpacer></VSpacer>
            <h2 class="logo-text">My Shop</h2>
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
            <v-btn
                v-if="isAuthenticated"
                icon
                color="error"
                @click="logout"
                style="margin-left: 8px; font-size: 18px;"
                title="Đăng xuất"
            >
                <v-icon size="22">mdi-logout</v-icon>
            </v-btn>
            <RouterLink v-else to="/Login/Login" style="text-decoration: none;">
                <v-btn
                    icon
                    color="primary"
                    style="margin-left: 8px; font-size: 18px;"
                    title="Đăng nhập"
                >
                    <v-icon size="22">mdi-login</v-icon>
                </v-btn>
            </RouterLink>
        </v-app-bar>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { computed } from "vue";

const router = useRouter();
const auth = useAuthStore();

const isAuthenticated = computed(() => auth.isAuthenticated());

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

async function logout() {
    await auth.logout();
    router.push("/Login/Login");
}
</script>

<style lang="scss" scoped>
.scroll-header {
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
    background: rgba(255, 255, 255, 0.9) !important;
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
