import { l as logisticsInfo, c as couponInfo, _ as __vite_glob_0_0, a as __vite_glob_0_1, b as __vite_glob_0_2, d as __vite_glob_0_3, e as __vite_glob_0_4, f as __vite_glob_0_5, g as __vite_glob_0_6, h as __vite_glob_0_7, i as __vite_glob_0_8, j as __vite_glob_0_9, k as __vite_glob_0_10, m as __vite_glob_0_11 } from "./products-bd0867ff.js";
import { H as Header, M as MySwiper, C as CategoriesBar, a as Marquee, e as CountDown, f as _sfc_main$1, g as getAllProductsApi } from "./cart-aee43747.js";
import { c as useClipboard } from "./@vueuse-9a1afe70.js";
import "./swiper-7326f1d7.js";
import { S as Swal } from "./sweetalert2-dd92db00.js";
import "./dayjs-05d8f374.js";
import "./bootstrap-b0d0a60b.js";
const _hoisted_1 = { class: "mt-8" };
const _hoisted_2 = { id: "banner" };
const _hoisted_3 = { class: "container-xl" };
const _hoisted_4 = { class: "w-full h-400 h-lg-600 overflow-hidden position-relative" };
const _hoisted_5 = ["src"];
const _hoisted_6 = { id: "categories-bar" };
const _hoisted_7 = { class: "container-xl" };
const _hoisted_8 = { id: "marquee" };
const _hoisted_9 = {
  id: "content",
  class: "mb-10 fs-7"
};
const _hoisted_10 = { class: "container-xl" };
const _hoisted_11 = { class: "row" };
const _hoisted_12 = { class: "col-xl-4 border-start-xl border-end-xl order-3 order-xl-1" };
const _hoisted_13 = { class: "border-bottom p-4" };
const _hoisted_14 = /* @__PURE__ */ Vue.createElementVNode("h4", { class: "tracking-wide mb-3" }, "物流資訊", -1);
const _hoisted_15 = { class: "list-disc mb-3 ps-5" };
const _hoisted_16 = { class: "p-4 border-bottom border-bottom-xl-0" };
const _hoisted_17 = /* @__PURE__ */ Vue.createElementVNode("h4", { class: "tracking-wide mb-3" }, "領取本月優惠券代碼", -1);
const _hoisted_18 = { class: "fs-4 py-1 bg-light text-center mb-3" };
const _hoisted_19 = /* @__PURE__ */ Vue.createElementVNode("h6", { class: "mb-3" }, "注意事項：", -1);
const _hoisted_20 = { class: "list-disc ps-5 mb-3" };
const _hoisted_21 = { class: "col-xl-4 border-end-xl p-4 border-bottom border-bottom-xl-0 order-1 order-xl-2" };
const _hoisted_22 = /* @__PURE__ */ Vue.createElementVNode("h4", { class: "mb-3 tracking-wider" }, "新品上架", -1);
const _hoisted_23 = { class: "border-top border-bottom bg-light mb-3" };
const _hoisted_24 = {
  key: 0,
  class: "load w-full h-15 border-start border-end"
};
const _hoisted_25 = { class: "w-full h-15 overflow-hidden position-relative" };
const _hoisted_26 = { class: "position-absolute bottom-0 ms-n mb-n px-2 h-7 bg-white border w-12 d-flex items-center justify-center" };
const _hoisted_27 = { class: "d-block fw-medium" };
const _hoisted_28 = ["src"];
const _hoisted_29 = /* @__PURE__ */ Vue.createElementVNode("p", { class: "mb-3" }, " 帶平常穿的尺寸就可以囉 平常穿S就帶S 平常穿M就帶M 兩個尺寸間可以帶小一號 SM之間帶S，ML之間帶M，以此類推 ", -1);
const _hoisted_30 = /* @__PURE__ */ Vue.createElementVNode("a", { class: "d-block mb-3" }, "查看更多", -1);
const _hoisted_31 = { class: "col-xl-4 d-flex flex-column order-2 border-end-xl" };
const _hoisted_32 = { class: "border-bottom d-flex justify-center items-center" };
const _hoisted_33 = { class: "p-4" };
const _hoisted_34 = { class: "border-top border-bottom bg-light" };
const _hoisted_35 = {
  key: 0,
  class: "load w-full h-15 border-start border-end"
};
const _hoisted_36 = { class: "w-full h-15 overflow-hidden position-relative" };
const _hoisted_37 = { class: "position-absolute bottom-0 ms-n mb-n px-2 h-7 bg-white border w-12 d-flex items-center justify-center" };
const _hoisted_38 = { class: "d-block fw-medium" };
const _hoisted_39 = ["src"];
const _hoisted_40 = /* @__PURE__ */ Vue.createElementVNode("div", { class: "border-top border-bottom border-bottom-xl-0 d-flex grow-1" }, [
  /* @__PURE__ */ Vue.createElementVNode("div", { class: "w-50p fw-bolder tracking-wider d-flex flex-column items-center justify-center" }, [
    /* @__PURE__ */ Vue.createElementVNode("h3", { class: "m-0 py-2" }, "限時優惠")
  ]),
  /* @__PURE__ */ Vue.createElementVNode("div", { class: "w-50p bg-black text-white d-flex justify-center items-center fs-2 py-2 fw-bolder" }, " -30% ")
], -1);
const _hoisted_41 = { class: "border-bottom border-xl p-4" };
const _hoisted_42 = /* @__PURE__ */ Vue.createElementVNode("h4", { class: "mb-3 tracking-wider" }, "熱銷推薦", -1);
const _hoisted_43 = { class: "border-top border-bottom bg-light" };
const _hoisted_44 = {
  key: 0,
  class: "load w-full h-15 border-start border-end"
};
const _hoisted_45 = { class: "w-full h-15 overflow-hidden position-relative" };
const _hoisted_46 = { class: "position-absolute bottom-0 ms-n mb-n px-2 h-7 bg-white border w-12 d-flex items-center justify-center" };
const _hoisted_47 = { class: "d-block fw-medium" };
const _hoisted_48 = ["src"];
const _hoisted_49 = /* @__PURE__ */ Vue.createElementVNode("p", null, [
  /* @__PURE__ */ Vue.createTextVNode(" 本網站為作業用模擬電商成品並無商業用途，若是對網站借用圖片商品有興趣可以轉址至 "),
  /* @__PURE__ */ Vue.createElementVNode("a", {
    href: "https://brandavenue.rakuten.co.jp/ladies/?l-id=brn_head_logo",
    class: "fs-5 td-underline fw-bolder"
  }, " RakutenFashion ")
], -1);
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const couponCode = Vue.ref("good");
    const { copy } = useClipboard({ couponCode });
    const data = Vue.reactive({
      isLoading: true,
      discountProducts: [],
      hotProducts: [],
      newProducts: []
    });
    const { isLoading, newProducts, discountProducts, hotProducts } = Vue.toRefs(data);
    Vue.provide("hotProducts", hotProducts);
    const getProducts = async () => {
      data.isLoading = true;
      try {
        const result = await getAllProductsApi();
        if (!result.data.success) {
          throw new Error("加載失敗");
        }
        const { products: allProducts } = result.data;
        data.discountProducts = allProducts.filter((item) => {
          return item.discount !== 0;
        }).splice(0, 12);
        data.hotProducts = allProducts.slice(0, 12);
        data.newProducts = allProducts.reverse().slice(0, 12);
      } catch (error) {
        Swal.fire({
          position: "top-end",
          text: error,
          timer: 1500
        });
      } finally {
        data.isLoading = false;
      }
    };
    const getImgUrls = (name) => {
      return new URL((/* @__PURE__ */ Object.assign({ "../assets/imgs/1000_400.jpg": __vite_glob_0_0, "../assets/imgs/1000_400_2.jpg": __vite_glob_0_1, "../assets/imgs/1000_400_3.jpg": __vite_glob_0_2, "../assets/imgs/1040_1040-xs.jpg": __vite_glob_0_3, "../assets/imgs/1040_1040_2-xs.jpg": __vite_glob_0_4, "../assets/imgs/1040_1040_3-xs.jpg": __vite_glob_0_5, "../assets/imgs/1040_1820_1.jpg": __vite_glob_0_6, "../assets/imgs/1040_1820_2.jpg": __vite_glob_0_7, "../assets/imgs/1040_1820_3.jpg": __vite_glob_0_8, "../assets/imgs/1040_1820_4.jpg": __vite_glob_0_9, "../assets/imgs/1040_1820_5.jpg": __vite_glob_0_10, "../assets/imgs/1040_1820_6.jpg": __vite_glob_0_11 }))[`../assets/imgs/${name}.jpg`], self.location).href;
    };
    const imgUrls = [
      getImgUrls("1040_1820_1"),
      getImgUrls("1040_1820_2"),
      getImgUrls("1040_1820_3"),
      getImgUrls("1040_1820_4"),
      getImgUrls("1040_1820_5"),
      getImgUrls("1040_1820_6")
    ];
    const statement = Vue.ref(null);
    const closeModal = () => {
      if (statement.value) {
        statement.value.closeModal();
      }
    };
    Vue.onMounted(() => {
      statement.value.openModal();
      getProducts();
    });
    return (_ctx, _cache) => {
      const _component_LoadBtn = Vue.resolveComponent("LoadBtn");
      const _component_router_link = Vue.resolveComponent("router-link");
      const _component_SvgIcon = Vue.resolveComponent("SvgIcon");
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createVNode(Vue.unref(Header), {
          id: "header",
          class: "border-bottom"
        }),
        Vue.createElementVNode("main", _hoisted_1, [
          Vue.createElementVNode("section", _hoisted_2, [
            Vue.createElementVNode("div", _hoisted_3, [
              Vue.createVNode(Vue.unref(MySwiper), {
                data: imgUrls,
                breakpoints: {
                  576: {
                    slidesPerView: 2
                  }
                }
              }, {
                body: Vue.withCtx(({ swiperItem }) => [
                  Vue.createElementVNode("div", _hoisted_4, [
                    Vue.createElementVNode("img", {
                      src: swiperItem,
                      class: "d-block"
                    }, null, 8, _hoisted_5)
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          Vue.createElementVNode("aside", _hoisted_6, [
            Vue.createElementVNode("div", _hoisted_7, [
              Vue.createVNode(Vue.unref(CategoriesBar))
            ])
          ]),
          Vue.createElementVNode("section", _hoisted_8, [
            Vue.createVNode(Vue.unref(Marquee))
          ]),
          Vue.createElementVNode("section", _hoisted_9, [
            Vue.createElementVNode("div", _hoisted_10, [
              Vue.createElementVNode("div", _hoisted_11, [
                Vue.createElementVNode("div", _hoisted_12, [
                  Vue.createElementVNode("div", _hoisted_13, [
                    _hoisted_14,
                    Vue.createElementVNode("ul", _hoisted_15, [
                      (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(logisticsInfo), (item, index) => {
                        return Vue.openBlock(), Vue.createElementBlock("li", { key: index }, Vue.toDisplayString(item), 1);
                      }), 128))
                    ])
                  ]),
                  Vue.createElementVNode("div", _hoisted_16, [
                    _hoisted_17,
                    Vue.createElementVNode("p", _hoisted_18, Vue.toDisplayString(couponCode.value), 1),
                    Vue.createVNode(_component_LoadBtn, {
                      class: "w-full h-6 fs-6 m-0 tracking-wider bg-black text-light mb-5",
                      onBtnclick: _cache[0] || (_cache[0] = ($event) => Vue.unref(copy)(couponCode.value))
                    }, {
                      default: Vue.withCtx(() => [
                        Vue.createTextVNode(" 複製代碼 ")
                      ]),
                      _: 1
                    }),
                    _hoisted_19,
                    Vue.createElementVNode("ul", _hoisted_20, [
                      (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(couponInfo), (item, index) => {
                        return Vue.openBlock(), Vue.createElementBlock("li", { key: index }, Vue.toDisplayString(item), 1);
                      }), 128))
                    ])
                  ])
                ]),
                Vue.createElementVNode("div", _hoisted_21, [
                  _hoisted_22,
                  Vue.createElementVNode("div", _hoisted_23, [
                    Vue.unref(isLoading) ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_24)) : Vue.createCommentVNode("", true),
                    !Vue.unref(isLoading) ? (Vue.openBlock(), Vue.createBlock(Vue.unref(MySwiper), {
                      key: 1,
                      data: Vue.unref(newProducts)
                    }, {
                      body: Vue.withCtx(({ swiperItem }) => [
                        Vue.createElementVNode("div", _hoisted_25, [
                          Vue.createElementVNode("p", _hoisted_26, [
                            Vue.createElementVNode("span", _hoisted_27, Vue.toDisplayString(swiperItem.title), 1)
                          ]),
                          Vue.createVNode(_component_router_link, {
                            to: { name: "product", params: { id: swiperItem.id } }
                          }, {
                            default: Vue.withCtx(() => [
                              Vue.createElementVNode("img", {
                                src: swiperItem.imagesUrl[0],
                                class: "d-block"
                              }, null, 8, _hoisted_28)
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["data"])) : Vue.createCommentVNode("", true)
                  ]),
                  _hoisted_29,
                  _hoisted_30
                ]),
                Vue.createElementVNode("div", _hoisted_31, [
                  Vue.createElementVNode("div", _hoisted_32, [
                    Vue.createVNode(_component_SvgIcon, {
                      name: "flash",
                      width: "28px",
                      height: "28px",
                      class: "me-2"
                    }),
                    Vue.createVNode(Vue.unref(CountDown))
                  ]),
                  Vue.createElementVNode("div", _hoisted_33, [
                    Vue.createElementVNode("div", _hoisted_34, [
                      Vue.unref(isLoading) ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_35)) : Vue.createCommentVNode("", true),
                      Vue.createVNode(Vue.unref(MySwiper), { data: Vue.unref(discountProducts) }, {
                        body: Vue.withCtx(({ swiperItem }) => [
                          Vue.createElementVNode("div", _hoisted_36, [
                            Vue.createElementVNode("p", _hoisted_37, [
                              Vue.createElementVNode("span", _hoisted_38, Vue.toDisplayString(swiperItem.title), 1)
                            ]),
                            Vue.createVNode(_component_router_link, {
                              to: { name: "product", params: { id: swiperItem.id } }
                            }, {
                              default: Vue.withCtx(() => [
                                Vue.createElementVNode("img", {
                                  src: swiperItem.imagesUrl[0],
                                  class: "d-block"
                                }, null, 8, _hoisted_39)
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ])
                        ]),
                        _: 1
                      }, 8, ["data"])
                    ])
                  ]),
                  _hoisted_40
                ])
              ]),
              Vue.createElementVNode("div", _hoisted_41, [
                _hoisted_42,
                Vue.createElementVNode("div", _hoisted_43, [
                  Vue.unref(isLoading) ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_44)) : Vue.createCommentVNode("", true),
                  Vue.createVNode(Vue.unref(MySwiper), {
                    data: Vue.unref(hotProducts),
                    breakpoints: {
                      576: {
                        slidesPerView: 2
                      },
                      1200: {
                        slidesPerView: 3
                      }
                    }
                  }, {
                    body: Vue.withCtx(({ swiperItem }) => [
                      Vue.createElementVNode("div", _hoisted_45, [
                        Vue.createElementVNode("p", _hoisted_46, [
                          Vue.createElementVNode("span", _hoisted_47, Vue.toDisplayString(swiperItem.title), 1)
                        ]),
                        Vue.createVNode(_component_router_link, {
                          to: { name: "product", params: { id: swiperItem.id } }
                        }, {
                          default: Vue.withCtx(() => [
                            Vue.createElementVNode("img", {
                              src: swiperItem.imagesUrl[0],
                              class: "d-block"
                            }, null, 8, _hoisted_48)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["data"])
                ])
              ])
            ]),
            Vue.createVNode(Vue.unref(_sfc_main$1), {
              ref_key: "statement",
              ref: statement,
              modalTitle: "本站聲明"
            }, {
              body: Vue.withCtx(() => [
                _hoisted_49
              ]),
              footer: Vue.withCtx(() => [
                Vue.createElementVNode("button", {
                  class: "w-full h-6 bg-primary border text-white me-2",
                  onClick: closeModal
                }, " 確認 ")
              ]),
              _: 1
            }, 512)
          ])
        ])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
