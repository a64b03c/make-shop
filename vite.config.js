import path from "node:path";
import { defineConfig, loadEnv } from "vite";
import createVitePlugins from "./vite/plugins";

export default defineConfig(({ command, mode }) => {
  console.log(command);
  const env = loadEnv(mode, "./");
  return {
    plugins: createVitePlugins(),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      port: 8080,
      cors: true,
      proxy: {
        "/api": {
          target: env.VITE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
