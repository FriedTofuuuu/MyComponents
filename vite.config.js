import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root: './', cd
  publicDir: 'public',  
  plugins: [react()],
  base: '/MyComponents2/', 
})
