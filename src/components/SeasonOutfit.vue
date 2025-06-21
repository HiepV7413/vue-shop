<template>
    <section class="season-out-fit parallax py-16">
        <div class="parallax-overlay"></div>
        <v-container class="position-relative d-flex align-center justify-center" style="height: 100%;">
            <v-row justify="center" class="w-100">
                <v-col cols="12" md="8" class="text-center d-flex flex-column align-center justify-center">
                    <h2 class="section-title text-h1 font-weight-bold mb-4">
                        Spring Fashion Outfit
                    </h2>
                    <p class="section-description text-body-1 mb-8">
                        Ut tellus elementum sagittis vitae et leo celerisque viverra
                    </p>
                    <v-btn size="large" color="white" variant="outlined"
                        class="text-uppercase font-weight-medium px-8 d-inline-block mx-auto parallax-btn"
                        @click="onSeasonCta">
                        Shop Now
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup lang="ts">

function onSeasonCta() {
    console.log('Season CTA clicked')
    // TODO: điều hướng tới trang shop hoặc collection
}
</script>

<style lang="scss" scoped>
// Season Section với Parallax Styling
.season-out-fit {
    position: relative;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    // Parallax effect
    &.parallax {
        /* The image used */
        background-image: url("@/assets/images/fixed-bg-filler.jpg");

        /* Set a specific height */
        min-height: 750px;

        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        /* Fallback for mobile devices */
        @media (max-width: 768px) {
            background-attachment: scroll;
        }
    }
}

// Overlay để làm tối background image để text dễ đọc hơn
.parallax-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    z-index: 1;
}

// Đảm bảo content hiển thị trên overlay
.v-container {
    z-index: 2;
}

.section-title {
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.section-description {
    color: #f5f5f5;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.parallax-btn {
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

/* Responsive adjustments */
@media (max-width: 768px) {
    .season-out-fit {
        padding: 4rem 0;
        min-height: 600px;

        .section-title {
            font-size: 2rem !important;
            text-align: center;
        }

        .section-description {
            font-size: 1rem !important;
            text-align: center;
        }

        &.parallax {
            // Tắt parallax trên mobile để tối ưu performance
            background-attachment: scroll;
            background-position: center center;
        }
    }
}

@media (max-width: 600px) {
    .season-out-fit {
        min-height: 500px;
        padding: 3rem 0;
    }
}

// Alternative parallax styles nếu bạn muốn thử các hiệu ứng khác
.parallax-alternative {
    background-image: url("@/assets/images/fixed-bg-filler.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    // Hiệu ứng zoom nhẹ khi scroll
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: inherit;
        transform: scale(1.1);
        transition: transform 0.3s ease;
        z-index: -1;
    }

    &:hover::before {
        transform: scale(1.05);
    }
}
</style>