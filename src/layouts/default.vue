<template>
  <v-app id="app">
    <transition name="fade-header" mode="out-in">
      <Header v-if="!showScrollHeader" class="no-margin" key="main-header" />
      <ScrollHeader v-else class="header-fixed" key="scroll-header" />
    </transition>
    <v-main class="no-margin">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Header from "@/components/Header-Footer/Header.vue";
import ScrollHeader from "@/components/Header-Footer/ScrollHeader.vue";

const showScrollHeader = ref(false);

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

.fade-header-enter-active,
.fade-header-leave-active {
  transition: opacity 0.3s;
}

.fade-header-enter-from,
.fade-header-leave-to {
  opacity: 0;
}
</style>
