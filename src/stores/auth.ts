import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    loading: false,
    error: '',
  }),
  actions: {
    async login(email: string, password: string) {
      this.loading = true
      this.error = ''
      try {
        const res = await axios.post(
          'https://api.cyberonegate.com/Authorize/SignIn',
          {
            reCaptcha: 'test', // hoặc giá trị captcha hợp lệ nếu có
            email,
            password,
            rememberMe: true
          },
          {
            headers: { 'Content-Type': 'application/json-patch+json' }
          }
        )
        if (res.data?.token) {
          this.token = res.data.token
          localStorage.setItem('token', res.data.token)
          return true
        } else {
          this.error = res.data?.message || 'Sai tài khoản hoặc mật khẩu'
          return false
        }
      } catch (e: any) {
        this.error = e?.response?.data?.message || JSON.stringify(e?.response?.data) || 'Đăng nhập thất bại!'
        return false
      } finally {
        this.loading = false
      }
    },
    async logout() {
      try {
        await axios.get('https://api.cyberonegate.com/Authorize/SignOut', {
          headers: { Authorization: `Bearer ${this.token}` }
        })
      } catch {}
      this.token = ''
      localStorage.removeItem('token')
    },
    isAuthenticated() {
      return !!this.token
    }
  }
})