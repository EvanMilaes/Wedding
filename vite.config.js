import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  root: 'public',
  resolve: {
    extensions: ['.js', '.html', '.css'],
  },
  server: {
    port: 3000,
  },
});
