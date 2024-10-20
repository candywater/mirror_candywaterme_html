import postcss from './postcss.config.cjs';
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { fileURLToPath } from 'url'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // base: '',
  build: {
    rollupOptions: {
      input: {
        appIndex: fileURLToPath(new URL('./index.html', import.meta.url)),
        appResume: fileURLToPath(new URL('./pages/resume/index.html', import.meta.url)),
        appAbout: fileURLToPath(new URL('./pages/times/index.html', import.meta.url)),
        appBlog:  fileURLToPath(new URL('./pages/blog/index.html', import.meta.url)),
      },
      output: {
        dir: "./dist",
        // format:"iife",
      }
    },
  },
  css: {
    postcss,
  },
  resolve: {
    alias: [
      //https://stackoverflow.com/questions/68241263/absolute-path-not-working-in-vite-project-react-ts
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
})
