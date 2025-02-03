import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './', // Ensure this is correct
  build: {
    outDir: 'dist'
  },
  server: { 
    historyApiFallback: true, // Ensure React Router works on Render

   }
})
