<template>
    <v-footer flat class="footer-bg">
        <v-container class="custom-container">
            <v-row align="start" justify="space-between">
                <!-- Cột 1: Logo và mô tả -->
                <v-col cols="12" md="3" class="text-left">
                    <div class="logo-section">
                        <img src="https://wdttrendz.wpengine.com/wp-content/themes/trendz/assets/images/light-logo.png"
                            alt="Trendz" class="logo-text">
                    </div>
                    <p class="description-text">
                        Dictum non consectetur a erat nam at mi in nulla posuere pretium nibh ipsum
                        consequat nisl vel tincidunt praesent semper feugiat.
                    </p>
                    <div class="payment-icons">
                        <img src="@/assets/images/home/vector.svg" alt="Visa" class="payment-icon" />
                        <img src="@/assets/images/home/vector2.svg" alt="Mastercard" class="payment-icon" />
                        <img src="@/assets/images/home/vector3.svg" alt="Amex" class="payment-icon" />
                        <img src="@/assets/images/home/vector4.svg" alt="Paypal" class="payment-icon" />
                        <img src="@/assets/images/home/vector5.svg" alt="Diners" class="payment-icon" />
                        <img src="@/assets/images/home/vector6.svg" alt="Discover" class="payment-icon" />
                    </div>
                </v-col>

                <v-col cols="12" md="1"></v-col>

                <!-- Cột 2: Information -->
                <v-col cols="12" sm="6" md="2">
                    <h4 class="footer-title">INFORMATION</h4>
                    <v-list dense class="footer-list">
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Orders</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Products</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Cancellation</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Career</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Easy Cancellation</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Privacy</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-col>

                <!-- Cột 3: Company -->
                <v-col cols="12" sm="6" md="2">
                    <h4 class="footer-title">COMPANY</h4>
                    <v-list dense class="footer-list">
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Help</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Portfolio</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Gift Wrap</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Gallery</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Settings</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Policies</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-col>

                <!-- Cột 4: Connect With Us -->
                <v-col cols="12" sm="6" md="2">
                    <h4 class="footer-title">CONNECT WITH US</h4>
                    <v-list dense class="footer-list">
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Whatsapp</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Telegram</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Twitter</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Facebook</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Pinterest</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Instagram</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-col>

                <!-- Cột 5: Help -->
                <v-col cols="12" sm="6" md="2">
                    <h4 class="footer-title">HELP</h4>
                    <v-list dense class="footer-list">
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Shipping Info</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Shipping Returns</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Pricing Detail</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Shipping Policies</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Delivery</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="footer-link">
                            <v-list-item-content>
                                <v-list-item-title>Easy Returns</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>

            <!-- Phần bottom footer -->
            <v-divider class="my-4" color="rgba(255,255,255,1)"></v-divider>
            <v-row>
                <v-col cols="12" md="6">
                    <div class="footer-bottom-links">
                        <span class="footer-bottom-link">Terms & Conditions</span>
                        <span class="footer-bottom-link">Privacy Policy</span>
                        <span class="footer-bottom-link">Accessibility Statement</span>
                    </div>
                </v-col>
                <v-col cols="12" md="6" class="text-md-right">
                    <span class="copyright-text">© 2023 trendz-demo Design Theme</span>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style scoped>
.footer-bg {
    background-color: #565E41 !important;
    color: white;
    padding: 40px 0 20px 0;
}

.custom-container {
    max-width: calc(100% - 70px) !important;
    /* Lề 70px mỗi bên */
    padding-left: 70px !important;
    padding-right: 70px !important;
}

.logo-text {
    color: white;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 16px;
    letter-spacing: 2px;
}

.description-text {
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 20px;
}

.payment-icons {
    display: flex;
    gap: 8px;
    margin-top: 16px;
}

.payment-icon {
    width: 40px;
    height: 25px;
    background-color: white;
    border-radius: 4px;
    color: #565E41;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
}

.footer-title {
    color: white;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
    letter-spacing: 1px;
}

.footer-list {
    background: transparent;
    padding: 0;
}

.footer-link {
    padding: 4px 0;
    min-height: auto;
}

.footer-link .v-list-item-title {
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    line-height: 1.4;
    cursor: pointer;
    transition: color 0.3s ease;
}

.footer-link:hover .v-list-item-title {
    color: white;
}

.footer-bottom-links {
    display: flex;
    gap: 20px;
}

.footer-bottom-link {
    color: rgba(255, 255, 255, 0.7);
    font-size: 13px;
    cursor: pointer;
    transition: color 0.3s ease;
}

.footer-bottom-link:hover {
    color: white;
}

.copyright-text {
    color: rgba(255, 255, 255, 0.6);
    font-size: 13px;
}

/* Responsive */
@media (max-width: 960px) {
    .custom-container {
        padding-left: 20px !important;
        padding-right: 20px !important;
        max-width: calc(100% - 40px) !important;
    }

    .footer-bottom-links {
        flex-direction: column;
        gap: 8px;
    }

    .text-md-right {
        text-align: left !important;
        margin-top: 16px;
    }
}

@media (max-width: 600px) {
    .custom-container {
        padding-left: 16px !important;
        padding-right: 16px !important;
        max-width: calc(100% - 32px) !important;
    }
}
</style>