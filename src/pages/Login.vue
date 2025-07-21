<route lang="yaml">
meta:
  layout: loginn
</route>

<template>
  <v-container class="fill-height luxury-bg" fluid>
    <!-- Elegant background patterns -->
    <div class="pattern-overlay">
      <div class="golden-particles">
        <div class="particle" v-for="i in 20" :key="i"></div>
      </div>
    </div>
    
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="5" lg="4">
        <div class="login-wrapper">
          <!-- Elegant header -->
          <div class="header-section">
            <div class="crystal-icon">
              <div class="inner-glow"></div>
            </div>
            <h1 class="luxury-heading">Đăng Nhập</h1>
            <div class="subtitle">Chào mừng trở lại</div>
          </div>

          <!-- Main card -->
          <v-card class="luxury-card elevation-0">
            <v-card-text class="pa-8">
              <v-form @submit.prevent="login" class="elegant-form">
                <!-- Email field -->
                <div class="field-container">
                  <label class="field-label">Địa chỉ Email</label>
                  <v-text-field
                    v-model="email"
                    variant="outlined"
                    density="comfortable"
                    class="premium-input"
                    hide-details="auto"
                    required
                  />
                </div>
                
                <!-- Password field -->
                <div class="field-container">
                  <label class="field-label">Mật khẩu</label>
                  <v-text-field
                    v-model="password"
                    type="password"
                    variant="outlined"
                    density="comfortable"
                    class="premium-input"
                    hide-details="auto"
                    required
                  />
                </div>
                
                <!-- Login button -->
                <v-btn
                  :loading="loading"
                  type="submit"
                  block
                  size="x-large"
                  class="luxury-submit-btn"
                  :disabled="!email || !password"
                >
                  Đăng nhập
                </v-btn>
              </v-form>
              
              <!-- Error display -->
              <div v-if="auth.error" class="error-container">
                <div class="error-message">
                  {{ auth.error }}
                </div>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
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
  min-height: 100vh;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
}

.luxury-bg {
  background: 
    radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(120, 198, 121, 0.3) 0%, transparent 50%),
    linear-gradient(135deg, #0f0c29 0%, #24243e 50%, #313862 100%);
  background-attachment: fixed;
}

.pattern-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.golden-particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  border-radius: 50%;
  animation: float 6s infinite ease-in-out;
  opacity: 0.7;
}

.particle:nth-child(odd) {
  animation-delay: -2s;
}

.particle:nth-child(even) {
  animation-delay: -4s;
}

.particle:nth-child(1) { top: 10%; left: 10%; }
.particle:nth-child(2) { top: 20%; left: 80%; }
.particle:nth-child(3) { top: 60%; left: 15%; }
.particle:nth-child(4) { top: 80%; left: 70%; }
.particle:nth-child(5) { top: 30%; left: 50%; }
.particle:nth-child(6) { top: 70%; left: 30%; }
.particle:nth-child(7) { top: 15%; left: 60%; }
.particle:nth-child(8) { top: 90%; left: 20%; }
.particle:nth-child(9) { top: 40%; left: 85%; }
.particle:nth-child(10) { top: 25%; left: 25%; }
.particle:nth-child(11) { top: 55%; left: 75%; }
.particle:nth-child(12) { top: 75%; left: 55%; }
.particle:nth-child(13) { top: 35%; left: 35%; }
.particle:nth-child(14) { top: 85%; left: 85%; }
.particle:nth-child(15) { top: 5%; left: 45%; }
.particle:nth-child(16) { top: 65%; left: 5%; }
.particle:nth-child(17) { top: 45%; left: 95%; }
.particle:nth-child(18) { top: 95%; left: 65%; }
.particle:nth-child(19) { top: 50%; left: 10%; }
.particle:nth-child(20) { top: 10%; left: 90%; }

@keyframes float {
  0%, 100% { 
    transform: translateY(0px) scale(1);
    opacity: 0.7;
  }
  50% { 
    transform: translateY(-20px) scale(1.2);
    opacity: 1;
  }
}

.login-wrapper {
  position: relative;
  z-index: 2;
  max-width: 420px;
  margin: 0 auto;
}

.header-section {
  text-align: center;
  margin-bottom: 3rem;
}

.crystal-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  position: relative;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.2) 0%, 
    rgba(255, 255, 255, 0.1) 50%, 
    rgba(255, 255, 255, 0.05) 100%);
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: crystalline 4s ease-in-out infinite;
}

.inner-glow {
  width: 40px;
  height: 40px;
  background: radial-gradient(circle, #ffd700 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes crystalline {
  0%, 100% { 
    transform: rotate(0deg) scale(1);
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
  }
  50% { 
    transform: rotate(180deg) scale(1.05);
    box-shadow: 0 0 40px rgba(255, 215, 0, 0.5);
  }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

.luxury-heading {
  font-size: 2.5rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 0.5rem;
  letter-spacing: 3px;
  text-shadow: 2px 2px 20px rgba(255, 255, 255, 0.3);
  background: linear-gradient(135deg, #ffffff, #e2e8f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 1px;
}

.luxury-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  box-shadow: 
    0 25px 45px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.luxury-card:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 35px 65px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.elegant-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.field-container {
  position: relative;
}

.field-label {
  display: block;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
}

.premium-input :deep(.v-field) {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
}

.premium-input :deep(.v-field__input) {
  color: #ffffff;
  font-weight: 400;
  padding: 16px 20px;
}

.premium-input :deep(.v-field__input::placeholder) {
  color: rgba(255, 255, 255, 0.5);
}

.premium-input :deep(.v-field:hover) {
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.1);
}

.premium-input :deep(.v-field--focused) {
  border-color: #ffd700;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 25px rgba(255, 215, 0, 0.3);
}

.luxury-submit-btn {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #f59e0b 100%);
  color: #1a1a1a;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 1px;
  border-radius: 16px;
  padding: 20px 0;
  margin-top: 1rem;
  border: none;
  box-shadow: 0 15px 35px rgba(255, 215, 0, 0.3);
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.luxury-submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 20px 45px rgba(255, 215, 0, 0.4);
  background: linear-gradient(135deg, #ffed4e 0%, #ffd700 50%, #f59e0b 100%);
}

.luxury-submit-btn:active {
  transform: translateY(-1px);
}

.luxury-submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.error-container {
  margin-top: 1.5rem;
  text-align: center;
}

.error-message {
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.3);
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 0.875rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .luxury-heading {
    font-size: 2rem;
    letter-spacing: 2px;
  }
  
  .crystal-icon {
    width: 60px;
    height: 60px;
  }
  
  .inner-glow {
    width: 30px;
    height: 30px;
  }
  
  .luxury-card {
    margin: 0 1rem;
  }
}
</style>