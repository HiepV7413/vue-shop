<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-card-title>Đăng nhập</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field v-model="email" label="Email" required />
              <v-text-field v-model="password" label="Mật khẩu" type="password" required />
              <v-btn :loading="loading" type="submit" color="primary" block>Đăng nhập</v-btn>
            </v-form>
            <div v-if="auth.error" style="color:red; margin-top:8px;">{{ auth.error }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// @ts-ignore
definePageMeta({
  layout: 'LoginLayout'
});

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const email = ref('')
const password = ref('')
const loading = ref(false)
const router = useRouter()
const auth = useAuthStore()

async function login() {
  loading.value = true
  const ok = await auth.login(email.value, password.value)
  loading.value = false
  if (ok) {
    router.push('/')
  }
}
</script>

<style scoped>
.fill-height {
    text-align: center;
    padding-top: 140px;
}
</style>