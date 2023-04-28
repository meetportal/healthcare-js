import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'healthcare',
      fileName: 'healthcare',
      formats: ['es', 'iife', 'umd'],
    },
    minify: true,
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
})
