import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // Set the root to the project root directory
  server: {
    host: true,
    port: 3000,
  },
  build: {
    outDir: 'dist', // Output to dist folder in root
    emptyOutDir: true,
  },
  css: {
    postcss: './postcss.config.js'
  },
  publicDir: 'src/assets' // Set public directory to src/assets if it exists
})