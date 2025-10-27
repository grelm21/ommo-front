/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  // добавляй сюда другие свои переменные, если есть
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
