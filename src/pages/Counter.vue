<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
    <v-container class="text-center">
        <v-card outlined>
            <v-card-title>
                <h2>Counter</h2>
            </v-card-title>
            <v-card-text>
                <v-btn color="primary" @click="count++" class="ma-2">
                    ➕ Tăng
                </v-btn>
                <v-btn color="error" :disabled="count === 0" @click="count--" class="ma-2">
                    ➖ Giảm
                </v-btn>
                <h3 class="mt-4">Giá trị hiện tại: {{ count }}</h3>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<style scoped>
.text-center {
    text-align: center;
}
</style>
