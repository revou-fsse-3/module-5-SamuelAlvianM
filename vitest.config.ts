import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "node:url";
 
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true
  },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "@components": fileURLToPath(
              new URL("./src/components", import.meta.url)
            ),
            "@common": fileURLToPath(
              new URL("./src/components/common", import.meta.url)
            ),
            "@layout": fileURLToPath(
              new URL("./src/components/layout", import.meta.url)
            ),
            "@container": fileURLToPath(
              new URL("./src/components/container", import.meta.url)
            ),
            "@template": fileURLToPath(
              new URL("./src/components/template", import.meta.url)
            ),
            "@context": fileURLToPath(
              new URL("./src/components/context", import.meta.url)
            ),
            "@features": fileURLToPath(new URL("./src/features", import.meta.url)),
            "@libs": fileURLToPath(new URL("./src/features/libs", import.meta.url)),
            "@fetch": fileURLToPath(new URL("./src/features/fetch", import.meta.url)),
            "@hooks": fileURLToPath(new URL("./src/features/hooks", import.meta.url)),
            "@query": fileURLToPath(new URL("./src/features/query", import.meta.url)),
            "@utils": fileURLToPath(new URL("./src/features/utils", import.meta.url)),
            "@typesUtils": fileURLToPath(
              new URL("./src/features/utils/types-utils", import.meta.url)
            ),
            "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      
        },
    }
})