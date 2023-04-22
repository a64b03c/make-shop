import vue from "@vitejs/plugin-vue";
import createSvgIcon from "./svg-icon";

export default function createVitePlugins() {
  const vitePlugins = [vue()];
  vitePlugins.push(createSvgIcon());

  return vitePlugins;
}
