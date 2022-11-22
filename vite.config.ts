import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import md from "./plugin/md";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  plugins: [
    md(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
  ],
});
