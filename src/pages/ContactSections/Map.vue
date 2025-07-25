<template>
    <!-- Map Section -->
        <div class="map-container mb-8">
            <div class="map-wrapper">
                <iframe 
                    ref="mapIframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21077.629569729837!2d105.84773115863888!3d20.951161756917084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135adb63416a2eb%3A0x4bb42f2097222a7f!2zQuG7h25oIFZp4buHbiBO4buZaSBUaeG6v3QgVHJ1bmcgxrDGoW5n!5e0!3m2!1svi!2s!4v1753411313676!5m2!1svi!2s"
                    class="google-map"
                    style="border:0;" 
                    :allowfullscreen="true"
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    <!-- Sections -->
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const mapIframe = ref<HTMLIFrameElement>()
</script>
<style scoped>
/* Map styling */
.map-container {
    padding-top: 30px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.map-wrapper {
    position: relative;
    width: 100%;
    height: 500px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.google-map {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    transition: all 0.3s ease;
}

/* Responsive design */
@media (max-width: 768px) {
    .map-wrapper {
        height: 400px;
        border-radius: 8px;
    }
    
    .google-map {
        border-radius: 8px;
    }
}

@media (max-width: 480px) {
    .map-wrapper {
        height: 300px;
    }
}
</style>