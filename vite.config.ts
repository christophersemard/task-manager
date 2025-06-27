import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import lightningcss from "vite-plugin-lightningcss";

export default defineConfig({
    plugins: [react(), lightningcss()],
});
