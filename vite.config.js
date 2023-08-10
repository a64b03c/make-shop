import path from "node:path";
import vue from "@vitejs/plugin-vue";
import createSvgIcon from "./vite/plugins/svg-icon";
import { defineConfig, loadEnv } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import { globals } from "./vite/plugins/createExternalGlobals";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "./");
  return {
    plugins: [vue(), createSvgIcon(), visualizer({ open: true })],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },

    server: {
      cors: true,
      proxy: {
        "/api": {
          target: env.VITE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    build: {
      minify: false,
      rollupOptions: {
        output: {
          chunkFileNames: "js/[name]-[hash].js",
          entryFileNames: "js/[name]-[hash].js",
          assetFileNames: "[ext]/[name]-[hash].[ext]",
          manualChunks(id) {
            if (id.includes("/src/views/cart/")) {
              return "cart";
            }
            if (id.includes("/src/views/products/")) {
              return "products";
            }
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
        external: ["vue", "axios", "vue-router", "vue-demi", "pinia"],
        plugins: [globals],
      },
      assetsDir: "static",
    },
  };
});
