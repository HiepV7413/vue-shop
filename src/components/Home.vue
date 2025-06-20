<template>
    <v-main class="main-content">
        <!-- Hero Section -->
        <herosection class="no-margin" />

        <!-- Know Us Section -->
        <know-us-section />

        <special-products class="no-margin" />

        <unique-design />

        <discover-new-style />

        <media-content />
    </v-main>
</template>

<script setup lang="ts">
import Herosection from '@/components/HeroSection.vue'
import KnowUsSection from '@/components/KnowUsSection.vue'
import SpecialProducts from '@/components/SpecialProducts.vue'
import UniqueDesign from '@/components/UniqueDesign.vue'
import DiscoverNewStyle from '@/components/DiscoverNewStyle.vue'
import MediaContent from '@/components/MediaContent.vue'
</script>

<style lang="scss" scoped>
.no-margin {
    margin: 0 !important;
    padding: 0 !important;
}

.main-content {
    padding-top: 118px;
    /* Điều chỉnh đúng với chiều cao header-fixed thực tế */
}
</style>