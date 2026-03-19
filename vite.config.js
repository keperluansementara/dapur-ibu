import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Ganti 'katering-landing-page' dengan nama repository GitHub Anda yang sebenarnya
  base: '/dapur-ibu/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})