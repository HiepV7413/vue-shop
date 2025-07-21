<template>
    <v-main class="main-content">

        <herosection class="no-margin" />

        <know-us-section />

        <special-products class="no-margin" />

        <unique-design />

        <discover-new-style />

        <feature-services />

        <season-outfit />

        <instagram />
    </v-main>
</template>

<script setup lang="ts">
import Herosection from '@/components/HomeSection/HeroSection.vue'
import KnowUsSection from '@/components/HomeSection/KnowUsSection.vue'
import SpecialProducts from '@/components/HomeSection/SpecialProducts.vue'
import UniqueDesign from '@/components/HomeSection/UniqueDesign.vue'
import DiscoverNewStyle from '@/components/HomeSection/DiscoverNewStyle.vue'
import SeasonOutfit from '@/components/HomeSection/SeasonOutfit.vue'
import Instagram from '@/components/HomeSection/Instagram.vue'
import FeatureServices from '@/components/HomeSection/FeatureService.vue'

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