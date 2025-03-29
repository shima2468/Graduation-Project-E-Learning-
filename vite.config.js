import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'/react_assets/',
  plugins: [react()],
  build: {
    outDir: '../../../Project2/school-management-system-main/public/react_assets', 
    emptyOutDir: true, 
  }
 
})


