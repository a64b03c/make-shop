import { d as _export_sfc } from "./cart-aee43747.js";
import "./dayjs-05d8f374.js";
import "./@vueuse-9a1afe70.js";
import "./swiper-7326f1d7.js";
import "./bootstrap-b0d0a60b.js";
import "./sweetalert2-dd92db00.js";
const _sfc_main = {};
const _hoisted_1 = {
  id: "cart",
  class: "position-relactive"
};
const _hoisted_2 = { class: "container-xl" };
const _hoisted_3 = { class: "row h-screen justify-center items-center" };
const _hoisted_4 = { class: "col-10 col-sm-6 col-xl-4 items-center" };
const _hoisted_5 = /* @__PURE__ */ Vue.createElementVNode("h1", null, "404", -1);
const _hoisted_6 = /* @__PURE__ */ Vue.createElementVNode("h3", { class: "mb-5" }, "找不到此頁面", -1);
function _sfc_render(_ctx, _cache) {
  const _component_router_link = Vue.resolveComponent("router-link");
  return Vue.openBlock(), Vue.createElementBlock("section", _hoisted_1, [
    Vue.createElementVNode("div", _hoisted_2, [
      Vue.createElementVNode("div", _hoisted_3, [
        Vue.createElementVNode("div", _hoisted_4, [
          _hoisted_5,
          _hoisted_6,
          Vue.createVNode(_component_router_link, {
            class: "d-block p-2 bg-primary border text-white me-2 text-center",
            to: "/"
          }, {
            default: Vue.withCtx(() => [
              Vue.createTextVNode(" 返回首頁 ")
            ]),
            _: 1
          })
        ])
      ])
    ])
  ]);
}
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  _404 as default
};
