<template>
    <div class="header-fixed">
        <MarqueeNotification class="topbar" />
        <v-app-bar :elevation="2" class="navbar">
            <RouterLink to="/" style="text-decoration: none;">
                <v-btn text color="black">Home</v-btn>
            </RouterLink>
            <span>|</span>
            
            <!-- Enhanced Shop Menu -->
            <v-menu 
                offset-y 
                open-on-hover 
                content-class="shop-mega-menu"
                :close-on-content-click="false"
            >
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>Shop</v-btn>
                </template>
                
                <div class="mega-menu-container">
                    <div class="menu-content">
                        <!-- Shop Page Layouts -->
                        <div class="menu-column">
                            <h3 class="column-title">Shop Page Layouts</h3>
                            <div class="menu-items">
                                <RouterLink to="/shop" class="menu-link">My Shop</RouterLink>
                                <RouterLink to="/shop/left-sidebar" class="menu-link">Left Sidebar</RouterLink>
                                <RouterLink to="/shop/right-sidebar" class="menu-link">Right Sidebar</RouterLink>
                                <RouterLink to="/account" class="menu-link">My Account</RouterLink>
                                <RouterLink to="/cart" class="menu-link">My Cart</RouterLink>
                                <RouterLink to="/wishlist" class="menu-link">My Wishlist</RouterLink>
                                <RouterLink to="/checkout" class="menu-link">Checkout</RouterLink>
                            </div>
                        </div>

                        <!-- Shop Listing Styles -->
                        <div class="menu-column">
                            <h3 class="column-title">Shop Listing Styles</h3>
                            <div class="menu-items">
                                <RouterLink to="/shop/style-1" class="menu-link">Style - 1 (Default)</RouterLink>
                                <RouterLink to="/shop/style-2" class="menu-link">Style - 2 (with Shop Icons)</RouterLink>
                                <RouterLink to="/shop/style-3" class="menu-link">Style - 3 (Fullwidth Quickview)</RouterLink>
                                <RouterLink to="/shop/style-4" class="menu-link">Style - 4 (Overlay Content)</RouterLink>
                                <RouterLink to="/shop/style-5" class="menu-link">Style - 5 (With Separator)</RouterLink>
                                <RouterLink to="/shop/style-6" class="menu-link">Style - 6 (Shadowed Blocks)</RouterLink>
                                <RouterLink to="/shop/style-7" class="menu-link">Style - 7 (Centered Shop Icons)</RouterLink>
                                <RouterLink to="/shop/style-8" class="menu-link">Style - 8 (Simple & Unique)</RouterLink>
                                <RouterLink to="/shop/style-9" class="menu-link">Style - 9 (Fullwidth Add to Cart)</RouterLink>
                            </div>
                        </div>

                        <!-- Shop Single Layouts -->
                        <div class="menu-column">
                            <h3 class="column-title">Shop Single Layouts</h3>
                            <div class="menu-items">
                                <RouterLink to="/product/left-sidebar" class="menu-link">Left Sidebar</RouterLink>
                                <RouterLink to="/product/right-sidebar" class="menu-link">Right Sidebar</RouterLink>
                                <RouterLink to="/product/thumbnails-left" class="menu-link">Thumbnails Left</RouterLink>
                                <RouterLink to="/product/thumbnails-right" class="menu-link">Thumbnails Right</RouterLink>
                                <RouterLink to="/product/thumbnails-bottom" class="menu-link">Thumbnails Bottom</RouterLink>
                                <RouterLink to="/product/gallery-grid" class="menu-link">Gallery Grid</RouterLink>
                                <RouterLink to="/product/sticky-info" class="menu-link">Sticky Info</RouterLink>
                                <RouterLink to="/product/gallery-center" class="menu-link">Gallery Center</RouterLink>
                                <RouterLink to="/product/tabs-style" class="menu-link">Tabs Style</RouterLink>
                            </div>
                        </div>

                        <!-- Shop Single Styles -->
                        <div class="menu-column">
                            <h3 class="column-title">Shop Single Styles</h3>
                            <div class="menu-items">
                                <RouterLink to="/product/toggle-style" class="menu-link">Toggle Style</RouterLink>
                                <RouterLink to="/product/accordion-style" class="menu-link">Accordion Style</RouterLink>
                                <RouterLink to="/product/accordion-bottom" class="menu-link">Accordion Bottom Summary</RouterLink>
                                <RouterLink to="/product/accordion-after" class="menu-link">Accordion After Summary</RouterLink>
                                <RouterLink to="/product/simple" class="menu-link">Simple Product</RouterLink>
                                <RouterLink to="/product/variable" class="menu-link">Product Variable</RouterLink>
                                <RouterLink to="/product/group" class="menu-link">Product Group</RouterLink>
                                <RouterLink to="/product/external" class="menu-link">Product External/Affiliate</RouterLink>
                            </div>
                        </div>

                        <!-- Static Image -->
                        <div class="menu-image">
                            <div class="static-image" :style="{ backgroundImage: `url(${staticImage.url})` }">
                            </div>
                        </div>
                    </div>
                </div>
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
                        <RouterLink to="/Faq">Faq</RouterLink>
                    </v-list-item>
                    <v-list-item>
                        <RouterLink to="/Demo/demo">Demo</RouterLink>
                    </v-list-item>
                    <v-list-item>
                        <RouterLink to="/404Pages">404</RouterLink>
                    </v-list-item>
                    <v-list-item>
                        <RouterLink to="/Contact">Contact</RouterLink>
                    </v-list-item>
                </v-list>
            </v-menu>
            <VSpacer></VSpacer>
            
            <!-- Logo Image -->
            <RouterLink to="/" class="logo-container">
                <img 
                    src="https://wdttrendz.wpengine.com/wp-content/uploads/2023/02/logo.svg" 
                    alt="Logo" 
                    class="logo-image"
                />
            </RouterLink>
            
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
import { computed, ref } from "vue";
import MarqueeNotification from "@/components/Header-Footer/MarqueeNotification.vue";

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

// Static image data
const staticImage = ref({
    url: "/src/assets/images/home/1.webp"
});

async function logout() {
    await auth.logout();
    router.push("/Login/Login");
}
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
    min-height: 60px !important;
    height: 75px !important;
    align-items: center;
}

.transparent-navbar {
    background: rgba(255, 255, 255, 0.4) !important;
}

.v-btn {
    font-size: 1.1rem !important;
    padding: 0 28px !important;
    height: 60px !important;
    display: flex;
    align-items: center;
}

.v-list-item {
    font-size: 1.1rem !important;
    min-height: 48px !important;
}

// Logo Styles
.logo-container {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 0 24px;
}

.logo-image {
    height: 50px;
    width: auto;
    max-width: 200px;
    object-fit: contain;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
}

h2,
.logo-text {
    font-size: 2.2rem;
    font-weight: bold;
    letter-spacing: 0.1em;
    margin: 0 24px;
}

// Mega Menu Styles
:deep(.shop-mega-menu) {
    max-width: none !important;
    width: 1200px !important;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    margin-top: 8px;
}

.mega-menu-container {
    background: white;
    border-radius: 8px;
    overflow: hidden;
}

.menu-content {
    display: flex;
    min-height: 400px;
}

.menu-column {
    flex: 1;
    padding: 24px 20px;
    border-right: 1px solid #f0f0f0;

    &:last-of-type {
        border-right: none;
    }
}

.column-title {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 2px solid #f8f8f8;
}

.menu-items {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.menu-link {
    color: #666;
    text-decoration: none;
    padding: 6px 0;
    font-size: 14px;
    transition: all 0.3s ease;
    border-radius: 4px;
    padding-left: 8px;

    &:hover {
        color: #333;
        background-color: #f8f8f8;
        padding-left: 12px;
        transform: translateX(4px);
    }
}

.menu-image {
    width: 300px;
    position: relative;
    overflow: hidden;
}

.static-image {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
}

.image-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    padding: 40px 24px 24px;
    color: white;
}

.offer-text {
    h2 {
        font-size: 28px;
        font-weight: 700;
        margin: 0 0 8px 0;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    p {
        font-size: 16px;
        margin: 0;
        opacity: 0.9;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }
}

// Responsive
@media (max-width: 1024px) {
    :deep(.shop-mega-menu) {
        width: 95vw !important;
    }
    
    .menu-content {
        flex-wrap: wrap;
    }
    
    .menu-column {
        flex: 1 1 45%;
    }
    
    .menu-image {
        width: 100%;
        height: 200px;
    }
}

@media (max-width: 768px) {
    .menu-column {
        flex: 1 1 100%;
        border-right: none;
        border-bottom: 1px solid #f0f0f0;
    }
    
    .menu-image {
        display: none;
    }
    
    .logo-image {
        height: 40px;
        max-width: 150px;
    }
    
    .logo-container {
        margin: 0 12px;
    }
}
</style>