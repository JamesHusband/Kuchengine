/// <reference types="vite/client" />

interface ImportMetaEnv {
  MODE: string;
  DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
