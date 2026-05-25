import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [react(), cloudflare()],
  server: {
    port: 5188,
    strictPort: true
  },
  preview: {
    port: 5188,
    strictPort: true
  },
  test: {
    environment: "node",
    globals: true
  }
});