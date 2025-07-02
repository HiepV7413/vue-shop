<template>
    <v-container class="contact">
        <h3 class="text-center text-h4 font-weight-bold mb-6">
            CONTACT
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

    </v-container>
</template>
<script lang="ts" setup>
const breadcrumbs = [
    { title: 'Home', disabled: false, href: '/' },
    { title: 'Contact', disabled: true }
]
</script>
<style scoped>
.contact {
    padding-top: 140px;
    padding-bottom: 100px;
    max-width: 2000px;
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