import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  define: {
    global: "globalThis",
  },
});
