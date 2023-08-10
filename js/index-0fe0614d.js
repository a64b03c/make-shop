import { d as _export_sfc } from "./cart-aee43747.js";
import { F as Field, a as Form, E as ErrorMessage, d as defineRule, c as configure } from "./vee-validate-07fc9528.js";
import { r as requiredValidator, e as emailValidator, m as minValidator, a as maxLengthValidator, l as localize, s as setLocale, z as zhTW } from "./@vee-validate-f1a17fde.js";
import "./dayjs-05d8f374.js";
import "./@vueuse-9a1afe70.js";
import "./swiper-7326f1d7.js";
import "./bootstrap-b0d0a60b.js";
import "./sweetalert2-dd92db00.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const _sfc_main$2 = {};
function _sfc_render(_ctx, _cache) {
  const _component_routerView = Vue.resolveComponent("routerView");
  return Vue.openBlock(), Vue.createBlock(_component_routerView);
}
const App = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/make-shop/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  scrollBehavior: () => {
    return { left: 0, top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "root",
      children: [
        {
          path: "/",
          name: "home",
          component: () => __vitePreload(() => import("./home-dd424ab9.js"), true ? ["js/home-dd424ab9.js","js/products-bd0867ff.js","js/cart-aee43747.js","js/dayjs-05d8f374.js","js/@vueuse-9a1afe70.js","js/swiper-7326f1d7.js","js/bootstrap-b0d0a60b.js","js/sweetalert2-dd92db00.js","css/cart-03a25bb1.css","css/products-88d82a4b.css"] : void 0)
        },
        {
          path: "/products",
          name: "products",
          component: () => __vitePreload(() => import("./products-bd0867ff.js").then((n) => n.n), true ? ["js/products-bd0867ff.js","js/cart-aee43747.js","js/dayjs-05d8f374.js","js/@vueuse-9a1afe70.js","js/swiper-7326f1d7.js","js/bootstrap-b0d0a60b.js","js/sweetalert2-dd92db00.js","css/cart-03a25bb1.css","css/products-88d82a4b.css"] : void 0),
          children: [
            {
              path: "/products",
              name: "products",
              component: () => __vitePreload(() => import("./products-bd0867ff.js").then((n) => n.p), true ? ["js/products-bd0867ff.js","js/cart-aee43747.js","js/dayjs-05d8f374.js","js/@vueuse-9a1afe70.js","js/swiper-7326f1d7.js","js/bootstrap-b0d0a60b.js","js/sweetalert2-dd92db00.js","css/cart-03a25bb1.css","css/products-88d82a4b.css"] : void 0)
            },
            {
              path: "/products/product/:id",
              name: "product",
              component: () => __vitePreload(() => import("./products-bd0867ff.js").then((n) => n.o), true ? ["js/products-bd0867ff.js","js/cart-aee43747.js","js/dayjs-05d8f374.js","js/@vueuse-9a1afe70.js","js/swiper-7326f1d7.js","js/bootstrap-b0d0a60b.js","js/sweetalert2-dd92db00.js","css/cart-03a25bb1.css","css/products-88d82a4b.css"] : void 0)
            }
          ]
        },
        {
          path: "/cart",
          name: "cart",
          component: () => __vitePreload(() => import("./cart-aee43747.js").then((n) => n.i), true ? ["js/cart-aee43747.js","js/dayjs-05d8f374.js","js/@vueuse-9a1afe70.js","js/swiper-7326f1d7.js","js/bootstrap-b0d0a60b.js","js/sweetalert2-dd92db00.js","css/cart-03a25bb1.css"] : void 0),
          children: [
            {
              path: "/cart",
              name: "cart",
              meta: { step: 1 },
              component: () => __vitePreload(() => import("./cart-aee43747.js").then((n) => n.h), true ? ["js/cart-aee43747.js","js/dayjs-05d8f374.js","js/@vueuse-9a1afe70.js","js/swiper-7326f1d7.js","js/bootstrap-b0d0a60b.js","js/sweetalert2-dd92db00.js","css/cart-03a25bb1.css"] : void 0)
            },
            {
              path: "/cart/order",
              name: "order",
              meta: { step: 2 },
              component: () => __vitePreload(() => import("./cart-aee43747.js").then((n) => n.o), true ? ["js/cart-aee43747.js","js/dayjs-05d8f374.js","js/@vueuse-9a1afe70.js","js/swiper-7326f1d7.js","js/bootstrap-b0d0a60b.js","js/sweetalert2-dd92db00.js","css/cart-03a25bb1.css"] : void 0)
            },
            {
              path: "/cart/checkorder/:id",
              name: "checkorder",
              meta: { step: 3 },
              component: () => __vitePreload(() => import("./cart-aee43747.js").then((n) => n.j), true ? ["js/cart-aee43747.js","js/dayjs-05d8f374.js","js/@vueuse-9a1afe70.js","js/swiper-7326f1d7.js","js/bootstrap-b0d0a60b.js","js/sweetalert2-dd92db00.js","css/cart-03a25bb1.css"] : void 0)
            },
            {
              path: "/cart/pay",
              name: "pay",
              meta: { step: 4 },
              component: () => __vitePreload(() => import("./cart-aee43747.js").then((n) => n.p), true ? ["js/cart-aee43747.js","js/dayjs-05d8f374.js","js/@vueuse-9a1afe70.js","js/swiper-7326f1d7.js","js/bootstrap-b0d0a60b.js","js/sweetalert2-dd92db00.js","css/cart-03a25bb1.css"] : void 0)
            }
          ]
        },
        {
          path: "/404",
          name: "404",
          component: () => __vitePreload(() => import("./404-977550cf.js"), true ? ["js/404-977550cf.js","js/cart-aee43747.js","js/dayjs-05d8f374.js","js/@vueuse-9a1afe70.js","js/swiper-7326f1d7.js","js/bootstrap-b0d0a60b.js","js/sweetalert2-dd92db00.js","css/cart-03a25bb1.css"] : void 0)
        },
        {
          path: "/:pathMathch(.*)*",
          redirect: "/404",
          name: "any"
        }
      ]
    }
  ]
});
const store = Pinia.createPinia();
if (typeof window !== "undefined") {
  let loadSvg = function() {
    var body = document.body;
    var svgDom = document.getElementById("__svg__icons__dom__");
    if (!svgDom) {
      svgDom = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgDom.style.position = "absolute";
      svgDom.style.width = "0";
      svgDom.style.height = "0";
      svgDom.id = "__svg__icons__dom__";
      svgDom.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgDom.setAttribute("xmlns:link", "http://www.w3.org/1999/xlink");
    }
    svgDom.innerHTML = '<symbol  viewBox="0 -960 960 960" id="icon-add"><path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z" /></symbol><symbol  viewBox="0 0 40 40" id="icon-cart"><path d="M6.88 7.54H2.59c-.21 0-.43-.02-.63-.09-.62-.21-.97-.83-.88-1.5.08-.62.6-1.14 1.25-1.15 1.9-.02 3.81-.02 5.71 0 .66.01 1.11.43 1.29 1.12.33 1.31.67 2.61.97 3.92.09.38.23.49.62.49 7.22-.01 14.44.01 21.66-.03 1.2-.01 1.86.85 1.57 2-.98 3.76-1.89 7.54-2.84 11.31-.52 2.08-2.09 3.29-4.22 3.29H15.1c-2.11 0-3.68-1.22-4.19-3.28C9.6 18.4 8.29 13.18 6.99 7.95c-.03-.12-.07-.24-.11-.41zM10.74 32.43a2.76 2.76 0 0 1 2.77-2.75c1.52.01 2.77 1.26 2.76 2.77-.01 1.51-1.27 2.76-2.78 2.76-1.52 0-2.76-1.26-2.75-2.78zM25.95 32.46a2.744 2.744 0 0 1 2.74-2.77c1.53 0 2.77 1.22 2.78 2.74.01 1.51-1.24 2.77-2.75 2.78-1.51.01-2.76-1.23-2.77-2.75z" /></symbol><symbol  viewBox="0 -960 960 960" id="icon-done"><path d="m378-332 363-363q9.067-9 21.533-9Q775-704 784-694.947q9 9.052 9 21.5Q793-661 784-652L399-267q-9 9-21 9t-21-9L175-449q-9-9.067-8.5-21.533Q167-483 176.053-492q9.052-9 21.5-9Q210-501 219-492l159 160Z" /></symbol><symbol  viewBox="0 0 40 40" id="icon-favorite"><path d="M3.53 14.6c.14-.67.24-1.35.44-1.99 1.3-4.09 5.37-6.71 9.63-6.25 2.18.24 4.03 1.13 5.59 2.67.26.26.5.53.79.84.31-.33.57-.62.85-.9 4.52-4.42 11.99-3.17 14.7 2.49 1.57 3.28 1.11 6.45-.9 9.43-.93 1.37-2.16 2.46-3.36 3.57-3.21 3-6.59 5.81-9.97 8.6-.4.33-.79.7-1.35.61-.3-.05-.65-.12-.89-.31-4.19-3.44-8.37-6.88-12.23-10.7-1.36-1.35-2.43-2.87-2.94-4.74-.16-.59-.25-1.19-.37-1.79.01-.5.01-1.02.01-1.53zm16.44 15.78c.11-.09.19-.14.26-.21 2.32-1.97 4.67-3.93 6.95-5.95 1.52-1.34 3.02-2.73 4.41-4.21 1.72-1.82 2.36-4.02 1.63-6.46-1.3-4.36-6.91-5.8-10.22-2.65-.63.6-1.25 1.24-1.87 1.86-.72.71-1.61.71-2.32-.01-.6-.6-1.2-1.23-1.82-1.81-1.5-1.41-3.3-1.98-5.32-1.65-4.07.67-6.3 4.78-4.71 8.6.49 1.18 1.31 2.12 2.21 3 2.52 2.49 5.22 4.79 7.93 7.08.94.81 1.89 1.59 2.87 2.41z" /><path d="M19.97 30.38c-.97-.81-1.93-1.61-2.87-2.4-2.7-2.3-5.4-4.59-7.93-7.08-.9-.89-1.72-1.81-2.21-3-1.59-3.82.64-7.93 4.71-8.6 2.02-.33 3.82.25 5.32 1.65.62.59 1.22 1.21 1.82 1.81.72.72 1.61.72 2.32.01.62-.61 1.23-1.26 1.87-1.86 3.33-3.16 8.92-1.72 10.22 2.65.73 2.45.09 4.65-1.63 6.46-1.4 1.47-2.89 2.86-4.41 4.21-2.29 2.02-4.64 3.97-6.95 5.95-.08.05-.15.11-.26.2z" style="fill:#fff" /></symbol><symbol  viewBox="0 0 40 40" id="icon-flash"><path d="M15.99 37.65c-.74-.38-.9-.72-.7-1.53 1.11-4.49 2.23-8.97 3.34-13.46.03-.11.05-.22.08-.38h-.44c-2.92 0-5.84-.03-8.76.02-.86.01-1.49-.66-1.11-1.64 2.28-5.81 4.52-11.63 6.77-17.46.16-.41.41-.71.82-.86H26c.8.44.94.87.57 1.72-1.26 2.87-2.53 5.73-3.79 8.6-.05.12-.1.25-.17.41.15.01.27.02.39.02h7.59c.59 0 .98.28 1.11.78.1.37-.04.67-.24.97-1.68 2.62-3.37 5.23-5.05 7.85-3.05 4.74-6.1 9.48-9.14 14.23-.2.32-.44.58-.79.72-.17.01-.33.01-.49.01z" /></symbol><symbol  viewBox="0 0 40 40" id="icon-next"><path d="M24.9 20 15 10.1c-.2-.2-.3-.5-.3-.9s.1-.6.3-.9c.3-.2.6-.3.9-.3s.6.1.9.4l10.3 10.3c.2.2.3.4.4.6.1.2.1.5.1.7s0 .5-.1.7-.2.4-.4.6L16.8 31.6c-.3.3-.6.4-.9.4-.3 0-.6-.1-.9-.4-.2-.3-.3-.5-.4-.9s.1-.6.4-.9l9.9-9.8z" /></symbol><symbol  viewBox="0 0 40 40" id="icon-prev"><path d="M27.2 29.8c.3.3.5.5.4.9-.1.4-.2.6-.4.9-.3.3-.6.4-.9.4s-.6-.1-.9-.4L15.1 21.3c-.2-.2-.3-.4-.4-.6s-.1-.5-.1-.7 0-.5.1-.7.2-.4.4-.6L25.4 8.4c.3-.3.6-.4.9-.4s.6.1.9.3c.2.3.3.5.3.9s-.1.7-.3.9L17.3 20l9.9 9.8z" /></symbol>';
    body.insertBefore(svgDom, body.lastChild);
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadSvg);
  } else {
    loadSvg();
  }
}
const main = "";
const _hoisted_1$1 = ["href", "fill"];
const _sfc_main$1 = {
  __name: "SvgIcon",
  props: {
    prefix: {
      type: String,
      default: "icon"
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "color"
    },
    width: {
      type: String,
      default: "20px"
    },
    height: {
      type: String,
      default: "20px"
    }
  },
  setup(__props) {
    const props = __props;
    const symbolId = Vue.computed(() => `#${props.prefix}-${props.name}`);
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("svg", {
        "aria-hidden": "true",
        style: Vue.normalizeStyle({ width: __props.width, height: __props.height })
      }, [
        Vue.createElementVNode("use", {
          href: symbolId.value,
          fill: __props.color
        }, null, 8, _hoisted_1$1)
      ], 4);
    };
  }
};
const LoadBtn_vue_vue_type_style_index_0_scoped_e49acabd_lang = "";
const _hoisted_1 = ["disabled"];
const _hoisted_2 = {
  key: 0,
  class: "loader"
};
const _hoisted_3 = { key: 1 };
const _sfc_main = {
  __name: "LoadBtn",
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "32px"
    },
    bgroundColor: {
      type: String,
      default: "black"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["btnclick"],
  setup(__props, { emit: emits }) {
    Vue.useCssVars((_ctx) => ({
      "5e884e59": __props.width,
      "58b282f4": __props.height,
      "66b796f2": __props.bgroundColor
    }));
    const isload = Vue.ref(false);
    const handleClick = () => {
      isload.value = true;
      emits("btnclick");
      setTimeout(() => {
        isload.value = false;
      }, 1e3);
    };
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("button", {
        class: "load-btn",
        disabled: __props.disabled || isload.value,
        onClick: handleClick
      }, [
        isload.value ? (Vue.openBlock(), Vue.createElementBlock("span", _hoisted_2)) : (Vue.openBlock(), Vue.createElementBlock("span", _hoisted_3, [
          Vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]))
      ], 8, _hoisted_1);
    };
  }
};
const LoadBtn = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e49acabd"]]);
const globalComponents = { SvgIcon: _sfc_main$1, VField: Field, VForm: Form, ErrorMessage, LoadBtn };
const globalComponents$1 = {
  install(app2) {
    Object.keys(globalComponents).forEach((key) => {
      app2.component(key, globalComponents[key]);
    });
  }
};
const drown = {
  mounted(el) {
    el.addEventListener("mouseover", () => {
      el.classList.add("active");
    });
    el.addEventListener("mouseout", () => {
      el.classList.remove("active");
    });
  }
};
const directives = { drown };
const directives$1 = {
  install(app2) {
    Object.keys(directives).forEach((key) => {
      app2.directive(key, directives[key]);
    });
  }
};
const needRules = { required: requiredValidator, email: emailValidator, min: minValidator, max: maxLengthValidator };
Object.keys(needRules).forEach((rule) => {
  defineRule(rule, needRules[rule]);
});
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
});
setLocale("zh_TW");
const app = Vue.createApp(App);
app.use(router);
app.use(store);
app.use(directives$1);
app.use(globalComponents$1);
app.mount("#app");
