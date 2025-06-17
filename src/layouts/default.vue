<template>
  <v-app>
    <!-- Thông báo chạy ở đầu trang -->
    <Header />
    <v-main style="margin-top: 100px;">
      <router-view />
    </v-main>

    <!-- <AppFooter /> -->
    <Footer />
  </v-app>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'



</script>