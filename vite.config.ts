//vite.config.ts
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom'
  },
});
