import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Set to '/' instead for custom domain.
  base: '/site/',
  plugins: [react()],
})
