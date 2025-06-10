import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '', '')
  const enablePWA = env.VITE_ENABLE_PWA !== 'false'
  const appName = env.VITE_APP_NAME || 'IoT Air Quality Monitor'
  
  const plugins = [react()]
  
  if (enablePWA) {
    plugins.push(
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
        manifest: {
          name: appName,
          short_name: 'AirQuality',
          description: 'Monitor kualitas udara real-time menggunakan sensor MQ135',
          theme_color: '#3b82f6',
          background_color: '#ffffff',
          display: 'standalone',
          orientation: 'portrait',
          scope: '/',
          start_url: '/',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg}']
        }
      })
    )  }

  return {
    plugins,
    define: {
      // Inject API key securely without VITE_ prefix
      __API_KEY__: JSON.stringify(env.API_KEY || ''),
      __WS_URL__: JSON.stringify(env.WS_URL || env.VITE_WS_URL || 'ws://localhost:3000')
    },
    server: {
      host: true,
      port: 5173
    }
  }
})
