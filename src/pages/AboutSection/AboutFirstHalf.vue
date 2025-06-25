<template>
    <v-container class="about animated-component">
        <div class="about-first-half">
            <div class="collection-image">
                <img src="@/assets/images/about/about-first-half.webp" alt="About Collection">
            </div>
            <div class="collection-content">
                <p class="section-subtitle">ABOUT US</p>
                <div class="section-title">
                    <h2 class="text-h2 font-weight-bold mb-4 animated-title">
                        What we design!
                    </h2>
                </div>
                <p class="section-description text-body-1 mb-8">
                    Purus in massa tempor nec feugiat nisl pretium fusce id. Lacus sed viverra tellus in hac habitasse
                    platea dictumst vestibulum. Viverra tellus in hac habitasse platea dictumst vestibulum. Viverra
                    aliquet eget sit amet tellus cras adipiscing enim. Euismod nisi porta lorem mollis.
                </p>
                <h2 class="text-h6 font-weight-bold mb-4">
                    What we design!
                </h2>
                <p class="section-description text-body-1 mb-8">
                    Eleifend mi in nulla posuere sollicitudin aliquam. Tortor vitae purus faucibus ornare. Venenatis
                    tellus in metus vulputate. Ultrices dui sapien eget mi proin. Malesuada fames ac turpis egestas
                    integer eget aliquet nibh. Magna ac placerat vesti.
                </p>
                <v-btn size="large" color="black" variant="flat"
                    class="text-uppercase font-weight-medium px-8 d-inline-block mx-auto" @click="onKnowUsCta">
                    VIEW MORE
                </v-btn>
            </div>
        </div>
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

.animated-component {
    position: relative;
    display: inline-block;
    z-index: 1;
}

.animated-component::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 1100px;
    background: linear-gradient(180deg, #E8E0DD);
    animation: growLine 3s ease-in-out infinite;
    z-index: -1;
    border-radius: 2px;
}

.v-btn.text-uppercase.font-weight-medium {
    letter-spacing: 1px;
    font-weight: bold;
    border-radius: 0;
    transition: background-color 0.3s ease;
}

.v-btn.text-uppercase.font-weight-medium:hover {
    background-color: #222 !important;
}

@keyframes growLine {
    0% {
        width: 1100px;
    }

    50% {
        width: 1500px;
    }

    100% {
        width: 1100px;
    }
}

.about {
    padding-bottom: 80px;
    max-width: 1200px;
    margin: 0 auto;
}

.about-first-half {
    display: flex;
    align-items: center;
    gap: 4rem;
    margin-bottom: 4rem;
}

.collection-image {
    flex: 1;
    max-width: 50%;
}

.collection-image img {
    width: 100%;
    max-width: 780px;
    height: 780px;
    border-radius: 8px;
    object-fit: contain;
}

.collection-content {
    flex: 1;
    max-width: 50%;
    text-align: left;
    padding-left: 2rem;
}

.section-subtitle {
    color: #1a1a1a;
    font-weight: 500;
    margin-bottom: 1rem;
}

.section-title {
    color: #1a1a1a;
    margin-bottom: 1.5rem;
}

.section-description {
    color: #666666;
    line-height: 1.6;
    margin: 0 0 2rem 0;
}

/* Responsive */
@media (max-width: 768px) {
    .about-first-half {
        flex-direction: column;
        gap: 2rem;
        margin-top: 4rem;
    }

    .collection-image,
    .collection-content {
        max-width: 100%;
    }

    .collection-content {
        text-align: center;
        padding-left: 0;
    }

    .section-description {
        margin: 0 auto 2rem auto;
        max-width: 600px;
    }

    .section-title h2 {
        font-size: 2rem !important;
    }
}
</style>
