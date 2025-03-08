import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// await build({
//   build: {
//     rollupOptions: {
//       assetsInclude: "**/*.md",
//     },
//   },
// });

export default defineConfig({
  assetsInclude: ["**/*.md"],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
