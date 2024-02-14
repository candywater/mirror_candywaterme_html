import postcss from './postcss.config.cjs';
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // base: '',
  build: {
    rollupOptions: {
        input: {
            appIndex: fileURLToPath(new URL('./index.html', import.meta.url)),
            appResume: fileURLToPath(new URL('./pages/resume/index.html', import.meta.url)),
            appAbout: fileURLToPath(new URL('./pages/about/index.html', import.meta.url)),
            // appAes: fileURLToPath(new URL('./src/aes/index.html', import.meta.url)),
            // appTarot: fileURLToPath(new URL('./src/tarot/index.html', import.meta.url)),
        },
        output: {
          dir: "./dist",
          // format:"iife",
        }
    },
    sourcemap: true,
},
  css:{
    postcss,
  }
})
