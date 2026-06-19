import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://homecra.netlify.app",
  vite: {
    plugins: [tailwindcss()],
  },
});
