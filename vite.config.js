import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const publicPath = process.env.NODE_ENV === 'production' ? '/portfolio/' : '/'

// https://vitejs.dev/config/
 export default defineConfig({
  publicPath: publicPath,
   plugins: [react()]
 })