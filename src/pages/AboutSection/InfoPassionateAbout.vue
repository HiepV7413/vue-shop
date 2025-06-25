<template>
    <v-container class="info-passionate-about">
        <v-row justify="center">
            <v-col cols="12" md="8" class="text-center">
                <p class="section-subtitle">We are</p>
                <div class="section-title">
                    <h2 class="text-h2 font-weight-bold mb-4 animated-title">
                        Passionate About
                    </h2>
                </div>
                <p class="section-description text-body-1 mb-8">
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis.
                </p>
                <v-btn size="large" color="black" variant="flat"
                    class="text-uppercase font-weight-medium px-8 d-inline-block mx-auto" @click="onKnowUsCta">
                    VIEW MORE
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup lang="ts">
function onKnowUsCta() {
    console.log('Know Us CTA clicked')
    // TODO: điều hướng tới trang shop hoặc collection nếu cần
}
</script>
<style scoped>
.animated-title {
    position: relative;
    color: #333;
    display: inline-block;
    padding: 8px 16px;
    z-index: 1;
}

.animated-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #d4c5a0, #c4b590, #d4c5a0);
    animation: growShrink 3s ease-in-out infinite;
    z-index: -1;
    border-radius: 2px;
}

@keyframes growShrink {
    0% {
        height: 2px;
    }

    50% {
        height: 30px;
    }

    100% {
        height: 2px;
    }
}

.info-passionate-about {
    background: #ffffff;
    padding: 4rem 0;
    text-align: center;
    padding-top: 70px;
    padding-bottom: 50px;
    max-width: 900px;
    margin: 0 auto;
}

.section-title {
    color: #1a1a1a;
}

.section-subtitle {
    color: #1a1a1a;
    font-weight: 500;
}

.section-description {
    color: #666666;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
}

/* Responsive */
@media (max-width: 768px) {
    .info-passionate-about {
        padding: 3rem 0;
        min-height: auto;
    }

    .section-title {
        font-size: 2rem !important;
        text-align: center;
    }

    .section-description {
        font-size: 1rem !important;
        text-align: center;
    }
}
</style>
