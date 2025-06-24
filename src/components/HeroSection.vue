<template>
    <section class="hero-section">
        <Splide :options="splideOptions" :has-track="false" @splide:mounted="onSplideReady">
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide" v-for="(slide, i) in slides" :key="i">
                        <div class="slide-wrapper">
                            <div class="slide-container" :style="{ backgroundImage: `url(${slide.img})` }">
                                <div class="hero-overlay">
                                    <div class="hero-content">
                                        <p class="subtitle">{{ slide.subtitle }}</p>
                                        <h1 class="title">{{ slide.title }}</h1>
                                        <p class="description">{{ slide.desc }}</p>
                                        <button class="cta-button" @click="onHeroCta(slide)">
                                            {{ slide.ctaText }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="splide__arrows">
                <div class="splide__arrow splide__arrow--prev" @click="splideInstance?.value?.go('<')">
                    <div class="position-relative btn-left d-flex align-center px-1 cursor-pointer">
                        <img class="btn-left-icon" src="@/assets/images/home/vector14.svg" alt="Previous" width="50"
                            height="50" />
                        <div class="overlay"></div>
                    </div>
                </div>


                <div class="splide__arrow splide__arrow--next" @click="splideInstance?.value?.go('>')">
                    <div class="position-relative btn-right d-flex align-center px-1 cursor-pointer">
                        <img class="btn-right-icon" src="@/assets/images/home/vector15.svg" alt="Previous" width="50"
                            height="50" />
                        <div class="overlay"></div>
                    </div>
                </div>
            </div>
        </Splide>
    </section>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { Splide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

const splideInstance = ref<any>(null);

interface HeroSlide {
    img: string
    subtitle: string
    title: string
    desc: string
    ctaText: string
}

const slides = ref<HeroSlide[]>([
    {
        img: new URL('@/assets/images/home/Home-7-slider-1.webp', import.meta.url).href,
        subtitle: 'Large Brand Collection',
        title: 'Trendy Designs',
        desc: 'Egestas integer eget aliquet nibh praesent tristique magna sit odio facilisis',
        ctaText: 'SHOP NOW',
    },
    {
        img: new URL('@/assets/images/home/Home-7-slider-2.webp', import.meta.url).href,
        subtitle: 'Get 50% Flat Off',
        title: 'Best Designs',
        desc: 'Integer eget aliquet nibh praesent tristique magna sit sed velit dignissim',
        ctaText: 'SHOP NOW',
    },
    {
        img: new URL('@/assets/images/home/Home-7-slider-3.webp', import.meta.url).href,
        subtitle: 'Best Offers For All Designs',
        title: 'Modern Outfits',
        desc: 'Volutpat maecenas volutpat blandit aliquam etiamipsum suspendisse',
        ctaText: 'SHOP NOW',
    },
])

const splideOptions = {
    type: 'slide', // Thay đổi từ 'loop' thành 'slide'
    autoplay: false, // Tắt autoplay để không tự động chuyển slide
    interval: 5000,
    pauseOnHover: true,
    arrows: true,
    pagination: true,
    height: '100vh',
    cover: true,
    focus: 'center',
    trimSpace: false,
    perPage: 1,
    gap: 0,
}

function onSplideReady(splide: any) {
    splideInstance.value = splide;
}

function onHeroCta(slide: HeroSlide) {
    console.log('Hero CTA clicked:', slide)
    // TODO: điều hướng hoặc scroll tới section khác nếu cần
}
</script>


<style scoped lang="scss">
.btn-right,
.btn-left {
    &:hover .overlay {
        height: 100%;
        width: 100%;
    }

    .btn-right-icon,
    .btn-left-icon {
        position: relative;
        z-index: 2;
    }

    .overlay {
        position: absolute;
        background-color: #ccc;
        width: 40%;
        height: 50%;
        z-index: 1;
        transition: all 0.3s ease-in-out;
    }
}

.btn-right {
    .overlay {
        left: 0;
    }
}

.btn-left {
    .overlay {
        right: 0;
    }
}

.hero-section {
    position: relative;
    overflow: hidden;
    padding: 0;

    :deep(.splide__track),
    :deep(.splide__slide) {
        height: 100vh;
    }
}

.slide-container {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0);
    z-index: 2;
}

.hero-content {
    text-align: center;
    background: rgba(255, 255, 255, 0);
    padding: 40px;
    border-radius: 16px;
    max-width: 600px;
    // backdrop-filter: blur(10px);
    color: #000;
}

.subtitle {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1rem;
}

.title {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    line-height: 1.1;
    color: #000;
}

.description {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    color: #666;
    line-height: 1.6;
}

.cta-button {
    background-color: #000;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #333;
        transform: translateY(-2px);
    }
}

/* Arrow buttons giống ảnh */
:deep(.splide__arrow) {
    background: transparent !important;
    width: 3rem;
    height: 3rem;
    border-radius: 2px;

    svg {
        fill: #000;
    }
}

/* Pagination */
:deep(.splide__pagination) {
    bottom: 2rem;

    .splide__pagination__page {
        background: rgba(255, 255, 255, 0);

        &.is-active {
            background: white;
        }
    }
}

/* Responsive */
@media (max-width: 768px) {
    .hero-section {

        :deep(.splide__track),
        :deep(.splide__slide) {
            height: 70vh;
        }
    }

    .slide-container {
        height: 70vh;
    }

    .hero-content {
        padding: 30px 20px;
        max-width: 90%;
    }

    .title {
        font-size: 2.5rem;
    }

    .subtitle,
    .description {
        font-size: 1rem;
    }

    .cta-button {
        padding: 12px 24px;
        font-size: 0.9rem;
    }

    :deep(.splide__arrow) {
        width: 2.5rem;
        height: 2.5rem;
    }
}

@media (max-width: 480px) {
    .hero-section {

        :deep(.splide__track),
        :deep(.splide__slide) {
            height: 60vh;
        }
    }

    .slide-container {
        height: 60vh;
    }

    .hero-content {
        padding: 25px 15px;
        max-width: 95%;
    }

    .title {
        font-size: 2rem;
    }

    .subtitle,
    .description {
        font-size: 0.9rem;
    }
}

.slide-wrapper {
    width: 100%;
    max-width: 820px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>