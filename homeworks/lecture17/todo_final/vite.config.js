import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/todos': {
        target: 'http://localhost:3000', // 后端地址
        changeOrigin: true,
      },
    },
  },
})
