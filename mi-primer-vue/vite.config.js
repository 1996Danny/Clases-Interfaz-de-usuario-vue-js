import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true,  // Habilita la sintaxis simplificada de v-model
        propsDestructure: true  // Permite desestructurar props
      }
    }),
    vueDevTools({
      launchEditor: 'code'  // Abre archivos en VS Code al hacer clic en componentes
    })
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./', import.meta.url))  // Alias adicional para raíz
    }
  },

  // Configuración esencial para WSL2
  server: {
    host: true,  // Permite conexiones externas
    port: 5173,  // Puerto fijo
    strictPort: true,  // Evita cambio automático de puerto
    watch: {
      usePolling: true,  // Necesario para WSL2
      interval: 1000  // Verifica cambios cada 1s
    },
    hmr: {
      overlay: true  // Muestra errores en el navegador
    }
  },

  // Optimización para desarrollo
  optimizeDeps: {
    include: ['vue', 'vue-router'],  // Pre-empaqueta dependencias clave
    exclude: ['vue-demi']  // Evita conflictos con librerías mixtas
  }
})
