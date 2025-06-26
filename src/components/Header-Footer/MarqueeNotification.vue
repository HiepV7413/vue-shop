<template>
    <div class="marquee-container">
        <div class="marquee-content">
            <div class="marquee-text">
                <span class="marquee-item">Now</span>
                <span class="marquee-item">Feel good while you shop with us</span>
                <span class="marquee-item highlight">40% Off: Catch the Last Day of Insider Sale! Shop Now</span>
                <span class="marquee-item highlight">Free Shipping on Orders Over $50!</span>
            </div>
            <div class="marquee-text">
                <span class="marquee-item">Now</span>
                <span class="marquee-item">Feel good while you shop with us</span>
                <span class="marquee-item highlight">40% Off: Catch the Last Day of Insider Sale! Shop Now</span>
                <span class="marquee-item highlight">Free Shipping on Orders Over $50!</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// No logic needed
</script>

<style scoped>
.marquee-container {
    width: 100%;
    background: linear-gradient(90deg, #2c5530 0%, #3a6b3e 50%, #2c5530 100%);
    color: white;
    padding: 10px 0;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    min-height: 40px;
    display: flex;
    align-items: center;
}

.marquee-content {
    display: flex;
    width: max-content;
    animation: marquee 40s linear infinite;
    will-change: transform;
}

.marquee-text {
    display: flex;
    align-items: center;
    gap: 80px;
    padding-right: 80px;
}

.marquee-item {
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    display: inline-block;
    color: white;
}

.marquee-item.highlight {
    font-weight: 600;
    color: #ffeb3b;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

@keyframes marquee {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.marquee-container:hover .marquee-content {
    animation-play-state: paused;
}

/* Responsive design */
@media (max-width: 768px) {
    .marquee-container {
        padding: 8px 0;
        min-height: 35px;
    }

    .marquee-item {
        font-size: 12px;
    }

    .marquee-text {
        gap: 50px;
        padding-right: 50px;
    }
}

@media (max-width: 480px) {
    .marquee-item {
        font-size: 11px;
    }

    .marquee-text {
        gap: 30px;
        padding-right: 30px;
    }
}
</style>
