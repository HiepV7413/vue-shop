<template>
    <v-container class="about">
        <h3 class="text-center text-h4 font-weight-bold mb-6">
            ABOUT
        </h3>

        <!-- Breadcrumb -->
        <div class="d-flex justify-center mb-8">
            <v-breadcrumbs :items="breadcrumbs" class="justify-center pa-0">
                <template v-slot:item="{ item }">
                    <v-breadcrumbs-item :href="item.href" :disabled="item.disabled" class="breadcrumb-item">
                        {{ item.title }}
                    </v-breadcrumbs-item>
                </template>
                <template v-slot:divider>
                    <span class="mx-2">/</span>
                </template>
            </v-breadcrumbs>
        </div>

        <!-- Video Section -->
        <div class="video-wrapper">
            <video autoplay muted loop playsinline>
                <source src="@/assets/videos/About -Trendz.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </v-container>
</template>

<script setup lang="ts">
const breadcrumbs = [
    { title: 'Home', disabled: false, href: '/' },
    { title: 'Faq', disabled: true }
];
</script>
<style scoped>
.about {
    text-align: center;
    padding-top: 140px;
    padding-bottom: 100px;
    max-width: 900px;
}

.breadcrumb-item {
    color: #666;
    font-size: 14px;
}

.breadcrumb-item:not(.v-breadcrumbs-item--disabled) {
    color: #8b7355;
}

.video-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 24px;
}

.video-wrapper video {
    max-width: 100%;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>
