import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    open: true,
    fs: {
      allow: ['..']
    }
  },
  // publicDir: path.resolve(__dirname, '../'),  // 👈 删除或注释掉这行
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // copyPublicDir: false,  // 👈 如果注释了 publicDir，这行也可以删除
  },
})
