import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  publicDir: './public',
  root: './',
  mode: 'production',
  plugins: [
    vue(),
    VitePWA({
      base: "/",
      srcDir: "src",
      useCredentials: true,
      filename: "sw.ts",
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],  
      manifest: {
        name: 'Portare',
        short_name: 'Portare',
        description: 'A simple SPA PWA portfolio',
        theme_color: '#1f1f1f',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          }
        ]
      }
    })
  ]
})
