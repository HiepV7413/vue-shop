<template>
    <v-container>
        <div class="about-collection-left">
            <div class="collection-image">
                <img src="@/assets/images/about/about-collection-left.webp" alt="About Collection">
            </div>
            <div class="collection-content">
                <p class="section-subtitle">International</p>
                <div class="section-title">
                    <h2 class="text-h2 font-weight-bold mb-4 animated-title">
                        Branded Apparels
                    </h2>
                </div>
                <p class="section-description text-body-1 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis.
                </p>
                <div class="select-options-placeholder mt-4">
                    <router-link to="/product"
                        class="select-options-link text-decoration-underline font-weight-bold d-flex align-center">
                        <span>Shop new arrival</span>
                        <div class="ml-1" style="margin-left: 5px;">
                            <div class="position-relative btn-right d-flex align-center px-1 cursor-pointer">
                                <img class="btn-right-icon" src="@/assets/images/about/vector10.svg" alt="Next"
                                    width="25" height="25" />
                                <div class="overlay"></div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </v-container>
</template>
<script setup lang="ts">
// No logic needed
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

.about-collection-left {
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
    height: auto;
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

.select-options-placeholder {
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.select-options-link {
    color: inherit;
    text-decoration: underline;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
}

.select-options-link:hover .btn-right .overlay {
    height: 100%;
    width: 100%;
}

.btn-right .btn-right-icon {
    position: relative;
    z-index: 2;
}

.btn-right .overlay {
    position: absolute;
    background-color: #ccc;
    width: 40%;
    height: 50%;
    z-index: 1;
    transition: all 0.3s ease-in-out;
    left: 0;
}

/* Responsive */
@media (max-width: 768px) {
    .about-collection-left {
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
