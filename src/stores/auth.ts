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

      // ==== Đăng nhập tĩnh: kiểm tra email và mật khẩu cố định ====
      // Bỏ comment 3 dòng dưới để dùng đăng nhập tĩnh
      
      const STATIC_EMAIL = 'hiepvu@gmail.com'
      const STATIC_PASSWORD = 'Abc123789!@#'
      if (email === STATIC_EMAIL && password === STATIC_PASSWORD) {
        this.token = 'static-token'
        localStorage.setItem('token', this.token)
        this.loading = false
        return true
      } else {
        this.error = 'Sai tài khoản hoặc mật khẩu'
        this.loading = false
        return false
      }
      

      // ==== Đăng nhập bằng API ====
      // Bỏ comment đoạn dưới để dùng đăng nhập qua API
      /*
      try {
        const res = await axios.post(
          'https://api.cyberonegate.com/Authorize/SignIn',
          {
            reCaptcha: 'test',
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
      */
    },
    async logout() {
      // ==== Logout tĩnh ====
      // Bỏ comment đoạn dưới để dùng logout tĩnh
      
      this.token = ''
      localStorage.removeItem('token')
      

      // ==== Logout qua API ====
      // Bỏ comment đoạn dưới để dùng logout qua API
      /*
      try {
        await axios.get('https://api.cyberonegate.com/Authorize/SignOut', {
          headers: { Authorization: `Bearer ${this.token}` }
        })
      } catch {}
      this.token = ''
      localStorage.removeItem('token')
      */
    },
    isAuthenticated() {
      return !!this.token
    }
  }
})