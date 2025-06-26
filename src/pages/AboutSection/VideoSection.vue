<template>
    <v-container class="video-only">
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
// No logic needed currently
</script>
<style scoped>
.video-only {
    text-align: center;
    padding-top: 0px;
    padding-bottom: 0px;
    max-width: 1500px;
    margin: 0 auto;
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
