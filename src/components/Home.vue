<template>
    <v-main>
        <!-- Hero Section -->
        <v-carousel hide-delimiters show-arrows="hover">
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <section class="hero-section">
                    <v-img :src="slide.img" height="80vh" class="position-relative">
                        <video autoplay muted loop playsinline class="hero-video">
                            <source :src="slide.video" type="video/mp4" />
                        </video>
                        <div class="hero-overlay d-flex align-center justify-center">
                            <v-container>
                                <v-row align="center" justify="center">
                                    <v-col cols="12" md="8" class="text-center text-black">
                                        <p class="text-h6 mb-6">
                                            {{ slide.subtitle }}
                                        </p>
                                        <h1 class="text-h2 font-weight-bold mb-4">
                                            {{ slide.title }}
                                        </h1>
                                        <p class="text-h6 mb-6">
                                            {{ slide.desc }}
                                        </p>
                                        <v-btn size="large" color="black" @click="onHeroCta(slide)">
                                            {{ slide.ctaText || 'Learn More' }}
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </div>
                    </v-img>
                </section>
            </v-carousel-item>
        </v-carousel>

        <!-- Know Us Section -->
        <section class="know-us-section py-16">
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" md="8" class="text-center">
                        <h2 class="section-title text-h3 font-weight-bold mb-4">
                            Know Us
                        </h2>
                        <p class="section-subtitle text-h6 mb-6">
                            Our Store
                        </p>
                        <p class="section-description text-body-1 mb-8">
                            Purus viverra accumsan in nisl nisi scelerisque eu ullamcorper dignissim cras tincidunt
                            lobortis feugiat morbi tristique senectus et netus et malesuada fames ac purus semper eget
                            duis at tellus pulvinar proin gravida hendrerit lectus a non curabitur gravida arcu ac
                            tortor.
                        </p>
                        <v-btn size="large" color="black" variant="flat" class="text-uppercase font-weight-medium px-8"
                            @click="onKnowUsCta">
                            Shop Now
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </v-main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface HeroSlide {
    img: string
    video: string
    subtitle: string
    title: string
    desc: string
    ctaText?: string
}

const slides = ref<HeroSlide[]>([
    {
        img: new URL('@/assets/images/Home-7-slider-1.webp', import.meta.url).href,
        video:
            'https://player.vimeo.com/external/379169077.hd.mp4?s=cac8ef4ee8a00b37c8adcc4a4c3604c2a8b06669&profile_id=175',
        subtitle: 'Large Brand Collection',
        title: "Trendy Designs",
        desc: "Egestas integer eget aliquet nibh praesent tristique magna sit odio facilisis",
        ctaText: 'SHOP NOW',
    },
    {
        img: new URL('@/assets/images/Home-7-slider-2.webp', import.meta.url).href,
        video:
            'https://player.vimeo.com/external/379169077.hd.mp4?s=cac8ef4ee8a00b37c8adcc4a4c3604c2a8b06669&profile_id=175',
        subtitle: 'Get 50% Flat Off',
        title: "Best Designs",
        desc: 'Integer eget aliquet nibh praesent tristique magna sit sed velit dignissim',
        ctaText: 'SHOP NOW',
    },
    {
        img: new URL('@/assets/images/Home-7-slider-3.webp', import.meta.url).href,
        video:
            'https://player.vimeo.com/external/379169077.hd.mp4?s=cac8ef4ee8a00b37c8adcc4a4c3604c2a8b06669&profile_id=175',
        subtitle: 'Best Offers For All Designs',
        title: 'Modern Outfits',
        desc: 'Volutpat maecenas volutpat blandit aliquam etiamipsum suspendisse',
        ctaText: 'SHOP NOW',
    },
])

function onHeroCta(slide: HeroSlide) {
    console.log('Hero CTA clicked:', slide)
    // TODO: điều hướng hoặc scroll tới section khác nếu cần
}

function onKnowUsCta() {
    console.log('Know Us CTA clicked')
    // TODO: điều hướng tới trang shop hoặc collection
}
</script>

<style lang="scss" scoped>
.hero-section {
    position: relative;
    overflow: hidden;
}

.hero-video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%, -50%);
    z-index: 1;
    object-fit: cover;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg,
            rgba(255, 255, 255, 0.0) 0%,
            rgba(255, 255, 255, 0.0) 100%);
    z-index: 2;
}

// Know Us Section Styling
.know-us-section {
    background: #ffffff;
    padding: 4rem 0;
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

/* Responsive adjustments */
@media (max-width: 768px) {
    .hero-section {
        .text-h2 {
            font-size: 2rem !important;
        }

        .text-h6 {
            font-size: 1.1rem !important;
        }
    }

    .know-us-section {
        padding: 3rem 0;
        min-height: auto;

        .section-title {
            font-size: 2rem !important;
            text-align: center;
        }

        .section-description {
            font-size: 1rem !important;
            text-align: center;
        }

        .know-us-content {
            text-align: center;
            margin-bottom: 2rem;
        }
    }

    .min-height-section {
        min-height: auto;
    }

    .v-col:first-child {
        order: 2;
    }

    .v-col:last-child {
        order: 1;
    }
}

@media (max-width: 600px) {
    .know-us-visual-container .know-us-visual {
        height: 400px !important;
        width: 100% !important;
        max-width: 350px;
        margin: 0 auto;
    }
}
</style>