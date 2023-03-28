import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/dialog/',
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
})
