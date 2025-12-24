import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    // `base` can be set with env var VITE_BASE or via `vite build --base /repo-name/`.
    // For GitHub Pages you typically want `'/repo-name/'`.
    base: process.env.VITE_BASE || '/',
    plugins: [react()],
    server: { port: 5173 }
})
