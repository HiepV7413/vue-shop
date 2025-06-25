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

        <!-- Sections -->
        <VideoSection />

        <InfoPassionateAbout />

        <AboutCollectionLeft />

        <AboutFirstHalf />

        <AboutCollectionRight />

    </v-container>
</template>

<script setup lang="ts">
import VideoSection from './AboutSection/VideoSection.vue'
import InfoPassionateAbout from './AboutSection/InfoPassionateAbout.vue'
import AboutCollectionLeft from './AboutSection/AboutCollectionLeft.vue'
import AboutFirstHalf from './AboutSection/AboutFirstHalf.vue'
import AboutCollectionRight from './AboutSection/AboutCollectionRight.vue'

const breadcrumbs = [
    { title: 'Home', disabled: false, href: '/' },
    { title: 'About', disabled: true }
]
</script>

<style scoped>
.about {
    padding-top: 140px;
    padding-bottom: 100px;
    max-width: 1700px;
    margin: 0 auto;
}

/* Breadcrumb styling */
.breadcrumb-item {
    color: #666;
    font-size: 14px;
}

.breadcrumb-item:not(.v-breadcrumbs-item--disabled) {
    color: #8b7355;
}
</style>
