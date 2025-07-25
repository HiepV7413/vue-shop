<template>
    <v-container class="contact-section">
        <!-- Contact Information and Form Section -->
        <div class="contact-wrapper">
            <v-row class="contact-content-section">
                <!-- Get In Touch With Us -->
                <v-col cols="12" md="6" class="pr-md-8">
                    <h3 class="contact-title mb-4">Get In Touch With Us</h3>
                    <p class="contact-description mb-8">
                        Turpis egestas maecenas pharetra convallis posuere morbi leo
                    </p>

                    <!-- Address -->
                    <div class="contact-item mb-6">
                        <div class="contact-icon-wrapper">
                            <div class="contact-icon">
                                <v-icon color="white" size="24">mdi-map-marker</v-icon>
                            </div>
                        </div>
                        <div class="contact-content">
                            <h4 class="contact-item-title">Address</h4>
                            <p class="contact-item-text">
                                No: 58 A, East Madison Street,<br>
                                Baltimore, MD, USA 4508
                            </p>
                        </div>
                    </div>

                    <!-- Phone -->
                    <div class="contact-item mb-6">
                        <div class="contact-icon-wrapper">
                            <div class="contact-icon">
                                <v-icon color="white" size="24">mdi-phone</v-icon>
                            </div>
                        </div>
                        <div class="contact-content">
                            <h4 class="contact-item-title">Phone</h4>
                            <p class="contact-item-text">
                                Toll-Free: 0000 - 123 - 456789<br>
                                Toll-Free: 0000 - 123 - 456789
                            </p>
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="contact-item mb-6">
                        <div class="contact-icon-wrapper">
                            <div class="contact-icon">
                                <v-icon color="white" size="24">mdi-email</v-icon>
                            </div>
                        </div>
                        <div class="contact-content">
                            <h4 class="contact-item-title">Email</h4>
                            <p class="contact-item-text">
                                info@example.com<br>
                                support@example.com
                            </p>
                        </div>
                    </div>
                </v-col>

                <!-- Contact Form -->
                <v-col cols="12" md="6" class="pl-md-8">
                    <h3 class="contact-title mb-4">Contact Form</h3>
                    <p class="contact-description mb-8">
                        Platea dictumst vestibulum rhoncus est pellentesque
                    </p>

                    <v-form ref="contactForm" @submit.prevent="submitForm">
                        <!-- Name Field -->
                        <div class="form-field mb-4">
                            <div class="input-icon-wrapper">
                                <div class="input-icon">
                                    <v-icon color="white" size="20">mdi-account</v-icon>
                                </div>
                                <v-text-field
                                    v-model="formData.name"
                                    placeholder="Name"
                                    variant="outlined"
                                    hide-details
                                    class="custom-input"
                                ></v-text-field>
                            </div>
                        </div>

                        <!-- Email Field -->
                        <div class="form-field mb-4">
                            <div class="input-icon-wrapper">
                                <div class="input-icon">
                                    <v-icon color="white" size="20">mdi-email</v-icon>
                                </div>
                                <v-text-field
                                    v-model="formData.email"
                                    placeholder="Email"
                                    type="email"
                                    variant="outlined"
                                    hide-details
                                    class="custom-input"
                                ></v-text-field>
                            </div>
                        </div>

                        <!-- Phone Field -->
                        <div class="form-field mb-4">
                            <div class="input-icon-wrapper">
                                <div class="input-icon">
                                    <v-icon color="white" size="20">mdi-phone</v-icon>
                                </div>
                                <v-text-field
                                    v-model="formData.phone"
                                    placeholder="Phone"
                                    variant="outlined"
                                    hide-details
                                    class="custom-input"
                                ></v-text-field>
                            </div>
                        </div>

                        <!-- Message Field -->
                        <div class="form-field mb-6">
                            <div class="textarea-icon-wrapper">
                                <div class="textarea-icon">
                                    <v-icon color="white" size="20">mdi-message-text</v-icon>
                                </div>
                                <v-textarea
                                    v-model="formData.message"
                                    placeholder="Message"
                                    variant="outlined"
                                    hide-details
                                    rows="5"
                                    class="custom-textarea"
                                ></v-textarea>
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <v-btn
                            type="submit"
                            class="send-btn"
                            size="large"
                            @click="submitForm"
                        >
                            SEND
                        </v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const contactForm = ref()

const formData = ref({
    name: '',
    email: '',
    phone: '',
    message: ''
})

const submitForm = () => {
    // Handle form submission here
    console.log('Form submitted:', formData.value)
    // You can add form validation and API call here
}
</script>

<style scoped>
.contact-section {
    padding-top: 30px;
    padding-bottom: 20px;
    max-width: 2000px;
    margin: 0 auto;
}

/* Contact Section Styling */
.contact-wrapper {
    margin-left: 110px;
    margin-right: 110px;
}

.contact-content-section {
    margin-top: 20px;
}

.contact-title {
    font-size: 32px;
    font-weight: bold;
    color: #333;
    margin-bottom: 16px;
}

.contact-description {
    color: #666;
    font-size: 16px;
    line-height: 1.6;
}

/* Contact Items */
.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.contact-item:hover .contact-icon {
    background-color: #333;
    transform: scale(1.05);
}

.contact-item:hover .contact-item-title {
    color: #333;
}

.contact-icon-wrapper {
    flex-shrink: 0;
}

.contact-icon {
    width: 60px;
    height: 60px;
    background-color: #8b7355;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.contact-content {
    flex: 1;
    padding-top: 8px;
}

.contact-item-title {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
    transition: all 0.3s ease;
}

.contact-item-text {
    color: #666;
    font-size: 15px;
    line-height: 1.6;
    margin: 0;
}

/* Form Styling */
.form-field {
    position: relative;
}

.input-icon-wrapper,
.textarea-icon-wrapper {
    display: flex;
    align-items: stretch;
    gap: 0;
}

.input-icon,
.textarea-icon {
    width: 50px;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px 0 0 4px;
    flex-shrink: 0;
}

.input-icon {
    height: 56px;
}

.textarea-icon {
    min-height: 140px;
    align-items: flex-start;
    padding-top: 18px;
}

.custom-input :deep(.v-field) {
    border-radius: 0 4px 4px 0 !important;
    border-left: none !important;
    height: 56px;
}

.custom-input :deep(.v-field__outline__start) {
    display: none !important;
}

.custom-input :deep(.v-field__input) {
    padding-left: 16px;
    min-height: 56px;
}

.custom-textarea :deep(.v-field) {
    border-radius: 0 4px 4px 0 !important;
    border-left: none !important;
    min-height: 140px;
}

.custom-textarea :deep(.v-field__outline__start) {
    display: none !important;
}

.custom-textarea :deep(.v-field__input) {
    padding-left: 16px;
    min-height: 140px;
}

.custom-textarea :deep(.v-field__field) {
    min-height: 140px;
}

.send-btn {
    background-color: #333 !important;
    color: white !important;
    font-weight: 600;
    letter-spacing: 1px;
    border-radius: 4px;
    min-width: 120px;
    height: 48px;
}

.send-btn:hover {
    background-color: #8b7355 !important;
    transform: translateY(-2px);
    transition: all 0.3s ease;
}

/* Mobile responsiveness for contact section */
@media (max-width: 960px) {
    .contact-wrapper {
        margin-left: 24px;
        margin-right: 24px;
    }
    
    .contact-content-section {
        margin-top: 60px;
    }
    
    .contact-title {
        font-size: 28px;
    }
    
    .pr-md-8 {
        padding-right: 12px !important;
    }
    
    .pl-md-8 {
        padding-left: 12px !important;
        margin-top: 40px;
    }
}

@media (max-width: 600px) {
    .contact-wrapper {
        margin-left: 16px;
        margin-right: 16px;
    }
    
    .contact-title {
        font-size: 24px;
    }
    
    .contact-icon {
        width: 50px;
        height: 50px;
    }
    
    .input-icon {
        width: 45px;
        height: 50px;
    }
    
    .textarea-icon {
        width: 45px;
        min-height: 120px;
        padding-top: 15px;
    }
    
    .custom-input :deep(.v-field) {
        height: 50px;
    }
    
    .custom-input :deep(.v-field__input) {
        min-height: 50px;
    }
    
    .custom-textarea :deep(.v-field) {
        min-height: 120px;
    }
    
    .custom-textarea :deep(.v-field__input) {
        min-height: 120px;
    }
}
</style>