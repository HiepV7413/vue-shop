<template>
  <v-app id="app">
    <Header class="no-margin" />
    <v-main class="no-margin">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<style>
#app {
  min-height: 100vh;
}

.no-margin {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
