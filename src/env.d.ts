/// <reference types="vite/client" />

// Define global constants injected by Vite
declare const __API_KEY__: string
declare const __WS_URL__: string

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_WS_URL: string
  readonly VITE_APP_NAME: string
  readonly VITE_ENABLE_PWA: string
  readonly VITE_ENABLE_NOTIFICATIONS: string
  readonly VITE_ENABLE_DARK_MODE: string
  readonly VITE_ENABLE_WEBSOCKET: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
