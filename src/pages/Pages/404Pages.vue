<template>
  <div class="error-page">
    <div class="error-content">
      <!-- OOPS! Text -->
      <div class="oops-text mb-4">
        OOPS!
      </div>
      
      <!-- 404 Number -->
      <div class="error-number mb-8">
        404
      </div>
      
      <!-- Page Not Found Text -->
      <div class="error-title mb-6">
        PAGE NOT FOUND
      </div>
      
      <!-- Description -->
      <div class="error-description mb-8">
        It seems you've ventured too far...
      </div>
      
      <!-- Back to Home Button -->
      <v-btn
        color="primary"
        variant="flat"
        size="large"
        class="back-btn"
        @click="goHome"
      >
        BACK TO HOME
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  width: 100vw;
  background: #d4c5b9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}

.error-content {
  text-align: center;
  max-width: 600px;
  padding: 40px 20px;
}

.oops-text {
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Roboto', sans-serif;
  margin-bottom: 1rem;
}

.error-number {
  font-size: 15rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  line-height: 0.8;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 2rem;
}

.error-title {
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Roboto', sans-serif;
  margin-bottom: 1.5rem;
}

.error-description {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  margin-bottom: 3rem;
  font-family: 'Roboto', sans-serif;
}

.back-btn {
  background-color: white !important;
  color: #333 !important;
  padding: 16px 32px !important;
  font-weight: 600 !important;
  letter-spacing: 0.1rem !important;
  font-size: 0.9rem !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  text-transform: uppercase !important;
}

.back-btn:hover {
  background-color: rgba(255, 255, 255, 0.9) !important;
  transform: translateY(-1px);
  transition: all 0.3s ease;
}

/* Responsive design */
@media (max-width: 768px) {
  .oops-text {
    font-size: 2rem;
    letter-spacing: 0.8rem;
  }
  
  .error-number {
    font-size: 10rem;
  }
  
  .error-title {
    font-size: 1.5rem;
    letter-spacing: 0.3rem;
  }
  
  .error-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .oops-text {
    font-size: 1.8rem;
    letter-spacing: 0.6rem;
  }
  
  .error-number {
    font-size: 8rem;
  }
  
  .error-title {
    font-size: 1.3rem;
    letter-spacing: 0.25rem;
  }
  
  .error-description {
    font-size: 0.85rem;
  }
  
  .back-btn {
    padding: 14px 28px !important;
    font-size: 0.85rem !important;
  }
}
</style>