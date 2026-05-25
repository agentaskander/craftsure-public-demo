import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
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
