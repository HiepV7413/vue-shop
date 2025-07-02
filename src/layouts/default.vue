<template>
  <v-app id="app">
    <transition name="fade-header" mode="out-in" v-if="!is404Page">
      <Header v-if="!showScrollHeader" class="no-margin" key="main-header" />
      <ScrollHeader v-else class="header-fixed" key="scroll-header" />
    </transition>
    
    <v-main class="no-margin" :class="{ 'full-height': is404Page }">
      <router-view />
    </v-main>
    
    <Footer v-if="!is404Page" />
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute } from "vue-router";
import Header from "@/components/Header-Footer/Header.vue";
import ScrollHeader from "@/components/Header-Footer/ScrollHeader.vue";

const route = useRoute();
const showScrollHeader = ref(false);

// Kiểm tra có phải trang 404 không
const is404Page = computed(() => {
  return route.path === '/404' || route.path.includes('404') || route.matched.length === 0;
});

function handleScroll() {
  showScrollHeader.value = window.scrollY > 0;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
#app {
  min-height: 100vh;
}

.no-margin {
  margin: 0 !important;
  padding: 0 !important;
}

.full-height {
  min-height: 100vh !important;
  height: 100vh !important;
}

.fade-header-enter-active,
.fade-header-leave-active {
  transition: opacity 0.3s;
}

.fade-header-enter-from,
.fade-header-leave-to {
  opacity: 0;
}
</style>