// vite.config.js (Repo B - GitHub Pages)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ⚠️ Remplace par le nom EXACT de ton repo Pages
export default defineConfig({
  plugins: [react()],
  base: "/helvio-site/",
});
