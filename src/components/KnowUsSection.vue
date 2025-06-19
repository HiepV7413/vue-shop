<template>
    <section class="know-us-section py-16">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="8" class="text-center">
                    <h2 class="section-title text-h3 font-weight-bold mb-4">
                        Know Us
                    </h2>
                    <p class="section-subtitle text-h6 mb-6">
                        Our Store
                    </p>
                    <p class="section-description text-body-1 mb-8">
                        Purus viverra accumsan in nisl nisi scelerisque eu ullamcorper dignissim cras tincidunt
                        lobortis feugiat morbi tristique senectus et netus et malesuada fames ac purus semper eget
                        duis at tellus pulvinar proin gravida hendrerit lectus a non curabitur gravida arcu ac
                        tortor.
                    </p>
                    <v-btn size="large" color="black" variant="flat" class="text-uppercase font-weight-medium px-8"
                        @click="onKnowUsCta">
                        Shop Now
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup lang="ts">

function onKnowUsCta() {
    console.log('Know Us CTA clicked')
    // TODO: điều hướng tới trang shop hoặc collection
}
</script>

<style lang="scss" scoped>
// Know Us Section Styling
.know-us-section {
    background: #ffffff;
    padding: 4rem 0;
}

.section-title {
    color: #1a1a1a;
}

.section-subtitle {
    color: #1a1a1a;
    font-weight: 500;
}

.section-description {
    color: #666666;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .know-us-section {
        padding: 3rem 0;
        min-height: auto;

        .section-title {
            font-size: 2rem !important;
            text-align: center;
        }

        .section-description {
            font-size: 1rem !important;
            text-align: center;
        }

        .know-us-content {
            text-align: center;
            margin-bottom: 2rem;
        }
    }

    .min-height-section {
        min-height: auto;
    }

    .v-col:first-child {
        order: 2;
    }

    .v-col:last-child {
        order: 1;
    }
}

@media (max-width: 600px) {
    .know-us-visual-container .know-us-visual {
        height: 400px !important;
        width: 100% !important;
        max-width: 350px;
        margin: 0 auto;
    }
}
</style>