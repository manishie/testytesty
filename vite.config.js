import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  // esbuild: {
  //   pure: [],
  // },
  plugins: [react()],
  server: {
    open: true,
    port: 3000,

  },
});
