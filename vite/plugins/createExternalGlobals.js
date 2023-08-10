import externalGlobals from "rollup-plugin-external-globals";

export const globals = externalGlobals({
  vue: "Vue",
  axios: "axios",
  ["vue-router"]: "VueRouter",
  ["vue-demi"]: "VueDemi",
  pinia: "Pinia",
});
