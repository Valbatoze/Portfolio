import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const publicPath = process.env.NODE_ENV === 'production' ? '/Portfolio/' : '/'

// https://vitejs.dev/config/
 export default defineConfig({
  publicPath: '/Portfolio/',
   plugins: [react()]
 })
