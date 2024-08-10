import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',  // Add this line
  build: {
    outDir: 'dist',  // This specifies the output directory
  },
})
