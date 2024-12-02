import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { __APP_INFO__ } from "./src/build/utils";

export default defineConfig({
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
  assetsInclude: ["md/**/*.md"],
  define: {
    __INTLIFY_PROD_DEVTOOLS__: false,
    __APP_INFO__: JSON.stringify(__APP_INFO__),
  },
});
