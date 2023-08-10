import { H as Header, M as MySwiper, C as CategoriesBar, a as Marquee, _ as _sfc_main$3, g as getAllProductsApi, u as useCart, T as ThumbsSwiper, b as _sfc_main$4, c as getProductApi } from "./cart-aee43747.js";
import "./dayjs-05d8f374.js";
import "./swiper-7326f1d7.js";
import "./bootstrap-b0d0a60b.js";
import { S as Swal } from "./sweetalert2-dd92db00.js";
import { b as useMediaQuery } from "./@vueuse-9a1afe70.js";
const __vite_glob_0_0 = "/make-shop/jpg/1000_400-3ac59cb7.jpg";
const __vite_glob_0_1 = "/make-shop/jpg/1000_400_2-102240a0.jpg";
const __vite_glob_0_2 = "/make-shop/jpg/1000_400_3-260ad9c4.jpg";
const __vite_glob_0_3 = "/make-shop/jpg/1040_1040-xs-2c417b30.jpg";
const __vite_glob_0_4 = "/make-shop/jpg/1040_1040_2-xs-6d8d0baf.jpg";
const __vite_glob_0_5 = "/make-shop/jpg/1040_1040_3-xs-5cda83b7.jpg";
const __vite_glob_0_6 = "/make-shop/jpg/1040_1820_1-0f8da719.jpg";
const __vite_glob_0_7 = "/make-shop/jpg/1040_1820_2-193c0ef2.jpg";
const __vite_glob_0_8 = "/make-shop/jpg/1040_1820_3-d2ba5e2d.jpg";
const __vite_glob_0_9 = "/make-shop/jpg/1040_1820_4-1f397366.jpg";
const __vite_glob_0_10 = "/make-shop/jpg/1040_1820_5-ab396f90.jpg";
const __vite_glob_0_11 = "/make-shop/jpg/1040_1820_6-21a5c70d.jpg";
const logisticsInfo = [
  "超商門市取貨，因配合超商物流作業流程，預計到貨日約3~5工作天。無法保證配達日。",
  "配合超商作業規範。若商品超重、或超過材積上限，僅能改以宅配方式配送。",
  "使用超取，請務必確認訂單填寫之收件人姓名是否正確，若與證件不符將會影響取件權益。",
  "目前全館送貨範圍限台灣本島，台灣離島及其他國家暫不提供寄送服務。",
  "一張訂單只能配送同一地址，如需寄送不同地址，麻煩請分開下單",
  " 如遇特定節日(例如中秋、端午、農曆新年期間等)物流運量大，到達時間將依實際配送狀況而定，建議提早下單以免久候。"
];
const couponInfo = [
  "於購物車頁面輸入優惠券代碼即可折抵指定折扣",
  "若結帳時未輸入優惠代碼，恕無法於訂單成立後要求補行折抵。",
  "本優惠券代碼僅於活動期間內有效。",
  "使用優惠券抵扣之訂單，該筆訂單若全部取消或全部退貨，則優惠劵視同作廢，不再補發。",
  "其他活動細節則以公告為準。"
];
const productInfo = [
  "實品顏色依單品照為主 尼龍 10% 嫘縈 90% 素材產地 / 中國 加工產地/ 中國 舒適涼感坑條針織/方領 商品長度/適中 商品版型/合身商品厚薄/適中 商品彈性/佳",
  "深色布料因穿著時接觸人體溫度及洗滌後有脫色及染劑移染狀況，第一次下水脫色為正常現象",
  "此款材質特性，不宜使用衣架吊掛，建議平放/避免摩擦",
  "針織材質吸濕性較一般材質大，故洗滌後些微縮水屬正常現象",
  "請避免手錶、飾品或者包包小零件勾住針織網眼"
];
const washInfo = [
  "深淺色請分開洗滌，以避免造成互相移染。",
  "請放入大小適中之細網洗衣袋細中弱速水洗，以保持商品型態。",
  "洗滌時，水溫請低於30℃；請使用中性洗劑；請勿浸泡。",
  "請勿使用漂白劑、螢光增白劑及衣物柔軟劑，以免破壞布料。",
  "不可濕放，以免衣物染色；請弱速輕脫水，不可烘乾，以免衣物縮水。",
  "清洗後請快速調整商品型態並平放陰乾即可，不可擰扭，勿直接曝曬於陽光下",
  "不可熨燙。",
  "穿著時，請留意避免與配件包包等他物接觸摩擦。"
];
const useCheckMedia = () => {
  const isPc = useMediaQuery("(min-width: 1200px)");
  const isTablet = useMediaQuery("(min-width: 576px) and (max-width: 1200px)");
  const isPhone = useMediaQuery("(max-width: 576px)");
  return {
    isPc,
    isTablet,
    isPhone
  };
};
const _hoisted_1$2 = { class: "mt-8" };
const _hoisted_2$2 = {
  id: "banner",
  class: "container-xl"
};
const _hoisted_3$2 = { class: "w-full h-400 h-lg-300 overflow-hidden position-relative" };
const _hoisted_4$2 = ["src"];
const _hoisted_5$2 = { class: "w-full h-400 h-lg-300 overflow-hidden position-relative" };
const _hoisted_6$2 = ["src"];
const _hoisted_7$2 = { id: "categories-bar" };
const _hoisted_8$2 = { class: "container-xl" };
const _hoisted_9$2 = { id: "marquee" };
const _sfc_main$2 = {
  __name: "index",
  setup(__props) {
    const { isPhone } = useCheckMedia();
    const getImgUrls = (name) => {
      return new URL((/* @__PURE__ */ Object.assign({ "../../assets/imgs/1000_400.jpg": __vite_glob_0_0, "../../assets/imgs/1000_400_2.jpg": __vite_glob_0_1, "../../assets/imgs/1000_400_3.jpg": __vite_glob_0_2, "../../assets/imgs/1040_1040-xs.jpg": __vite_glob_0_3, "../../assets/imgs/1040_1040_2-xs.jpg": __vite_glob_0_4, "../../assets/imgs/1040_1040_3-xs.jpg": __vite_glob_0_5, "../../assets/imgs/1040_1820_1.jpg": __vite_glob_0_6, "../../assets/imgs/1040_1820_2.jpg": __vite_glob_0_7, "../../assets/imgs/1040_1820_3.jpg": __vite_glob_0_8, "../../assets/imgs/1040_1820_4.jpg": __vite_glob_0_9, "../../assets/imgs/1040_1820_5.jpg": __vite_glob_0_10, "../../assets/imgs/1040_1820_6.jpg": __vite_glob_0_11 }))[`../../assets/imgs/${name}.jpg`], self.location).href;
    };
    const xsImgUrls = [
      getImgUrls("1040_1040-xs"),
      getImgUrls("1040_1040_2-xs"),
      getImgUrls("1040_1040_3-xs")
    ];
    const smImgUrls = [
      getImgUrls("1000_400"),
      getImgUrls("1000_400_2"),
      getImgUrls("1000_400_3")
    ];
    return (_ctx, _cache) => {
      const _component_router_view = Vue.resolveComponent("router-view");
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createVNode(Vue.unref(Header), {
          id: "header",
          class: "border-bottom"
        }),
        Vue.createElementVNode("main", _hoisted_1$2, [
          Vue.createElementVNode("section", _hoisted_2$2, [
            Vue.unref(isPhone) ? (Vue.openBlock(), Vue.createBlock(Vue.unref(MySwiper), {
              key: 0,
              data: xsImgUrls
            }, {
              body: Vue.withCtx(({ swiperItem }) => [
                Vue.createElementVNode("div", _hoisted_3$2, [
                  Vue.createElementVNode("img", {
                    src: swiperItem,
                    class: "d-block"
                  }, null, 8, _hoisted_4$2)
                ])
              ]),
              _: 1
            })) : (Vue.openBlock(), Vue.createBlock(Vue.unref(MySwiper), {
              key: 1,
              data: smImgUrls,
              breakpoints: {
                576: {
                  slidesPerView: 1
                }
              }
            }, {
              body: Vue.withCtx(({ swiperItem }) => [
                Vue.createElementVNode("div", _hoisted_5$2, [
                  Vue.createElementVNode("img", {
                    src: swiperItem,
                    class: "d-block"
                  }, null, 8, _hoisted_6$2)
                ])
              ]),
              _: 1
            }))
          ]),
          Vue.createElementVNode("aside", _hoisted_7$2, [
            Vue.createElementVNode("div", _hoisted_8$2, [
              Vue.createVNode(Vue.unref(CategoriesBar))
            ])
          ]),
          Vue.createElementVNode("section", _hoisted_9$2, [
            Vue.createVNode(Vue.unref(Marquee))
          ]),
          Vue.createVNode(_component_router_view)
        ])
      ], 64);
    };
  }
};
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const products_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = {
  id: "filtterbar",
  class: "fs-7"
};
const _hoisted_2$1 = { class: "container-xl border-bottom border-start-xl border-end-xl" };
const _hoisted_3$1 = { class: "mb-0 ps-0 d-flex items-center" };
const _hoisted_4$1 = { class: "sort border-end" };
const _hoisted_5$1 = { class: "w-11 bg-white p-0 border" };
const _hoisted_6$1 = {
  id: "products",
  class: "fs-7 pb-10"
};
const _hoisted_7$1 = { class: "container-xl" };
const _hoisted_8$1 = { class: "cards row" };
const _hoisted_9$1 = /* @__PURE__ */ Vue.createStaticVNode('<div class="h-70p load"></div><div class="h-30p d-flex flex-column justify-between"><div class="mt-4"><div class="w-75p h-4 load"></div><div class="w-25p h-4 load mt-4"></div></div><div class="mt-4 w-full h-6 load"></div></div>', 2);
const _hoisted_11$1 = [
  _hoisted_9$1
];
const _sfc_main$1 = {
  __name: "products",
  setup(__props) {
    const data = Vue.reactive({
      isLoading: true,
      products: []
    });
    const { isLoading, products: products2 } = Vue.toRefs(data);
    const sorts = [
      { title: "價格由高至低", sort: "high" },
      { title: "價格由低至高", sort: "short" },
      { title: "最新到貨", sort: "new" }
    ];
    const route = VueRouter.useRoute();
    const getProducts = async () => {
      data.isLoading = true;
      try {
        const result = await getAllProductsApi();
        if (!result.data.success) {
          throw new Error("加載失敗");
        }
        const { products: allProducts } = result.data;
        if (route.query.category !== "全部商品") {
          data.products = allProducts.filter((item) => {
            return item.category === route.query.category;
          });
        } else {
          data.products = allProducts;
        }
        if (route.query.sort === "high") {
          data.products.sort((a, b) => b.price - a.price);
        }
        if (route.query.sort === "short") {
          data.products.sort((a, b) => a.price - b.price);
        }
        if (route.query.sort === "new") {
          data.products.reverse();
        }
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
    Vue.watch(
      route,
      () => {
        getProducts();
      },
      {
        deep: true
      }
    );
    Vue.onMounted(() => {
      getProducts();
    });
    return (_ctx, _cache) => {
      const _component_router_link = Vue.resolveComponent("router-link");
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createElementVNode("section", _hoisted_1$1, [
          Vue.createElementVNode("div", _hoisted_2$1, [
            Vue.createElementVNode("ul", _hoisted_3$1, [
              Vue.createElementVNode("li", _hoisted_4$1, [
                Vue.createElementVNode("a", {
                  href: "#",
                  class: "d-block text-primary px-5 py-4 tracking-wide",
                  onClick: _cache[0] || (_cache[0] = Vue.withModifiers(() => {
                  }, ["prevent"]))
                }, " 排序 "),
                Vue.createElementVNode("ul", _hoisted_5$1, [
                  (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(sorts, (item) => {
                    return Vue.createElementVNode("li", {
                      class: "p-2",
                      key: item.title
                    }, [
                      Vue.createVNode(_component_router_link, {
                        to: {
                          path: "/products",
                          query: { category: Vue.unref(route).query.category, sort: item.sort }
                        }
                      }, {
                        default: Vue.withCtx(() => [
                          Vue.createTextVNode(Vue.toDisplayString(item.title), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]);
                  }), 64))
                ])
              ])
            ])
          ])
        ]),
        Vue.createElementVNode("section", _hoisted_6$1, [
          Vue.createElementVNode("div", _hoisted_7$1, [
            Vue.createElementVNode("div", _hoisted_8$1, [
              Vue.unref(isLoading) ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 0 }, Vue.renderList(8, (item) => {
                return Vue.createElementVNode("div", {
                  class: "card-wrap col-sm-6 col-lg-4 col-xl-3",
                  key: item
                }, _hoisted_11$1);
              }), 64)) : Vue.createCommentVNode("", true),
              !Vue.unref(isLoading) ? (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, { key: 1 }, Vue.renderList(Vue.unref(products2), (item) => {
                return Vue.openBlock(), Vue.createElementBlock("div", {
                  class: "card-wrap col-sm-6 col-lg-4 col-xl-3",
                  key: item.title
                }, [
                  Vue.createVNode(Vue.unref(_sfc_main$3), { product: item }, null, 8, ["product"])
                ]);
              }), 128)) : Vue.createCommentVNode("", true)
            ])
          ])
        ])
      ], 64);
    };
  }
};
const products = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const product_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = {
  id: "product",
  class: "mb-10"
};
const _hoisted_2 = { class: "container-xl fs-7" };
const _hoisted_3 = { class: "row" };
const _hoisted_4 = { class: "col-xl-8 border-start-xl border-end-xl" };
const _hoisted_5 = {
  key: 0,
  class: "h-15 h-sm-17 p-4 d-flex"
};
const _hoisted_6 = {
  key: 0,
  class: "w-80px me-3"
};
const _hoisted_7 = /* @__PURE__ */ Vue.createElementVNode("div", { class: "load w-full h-full" }, null, -1);
const _hoisted_8 = ["src"];
const _hoisted_9 = ["src"];
const _hoisted_10 = {
  key: 2,
  class: "col-xl-4 border-top"
};
const _hoisted_11 = { class: "check border-end-xl p-4 mb-n" };
const _hoisted_12 = { class: "mb-2 fs-3" };
const _hoisted_13 = { class: "px-3 py-1 bg-dark text-light" };
const _hoisted_14 = { class: "fs-3 mt-5 mb-0 fw-bolder lh-1" };
const _hoisted_15 = {
  key: 0,
  class: "d-flex items-center mt-1"
};
const _hoisted_16 = { class: "fs-6 mb-0 text-primary" };
const _hoisted_17 = { class: "td-line-through pe-6" };
const _hoisted_18 = { class: "px-2 fs-7 py-1 bg-danger text-white" };
const _hoisted_19 = { class: "mb-4" };
const _hoisted_20 = /* @__PURE__ */ Vue.createElementVNode("h5", { class: "mt-5 mb-0 fs-6 fw-bolder" }, "顏色", -1);
const _hoisted_21 = { class: "mt-2 d-flex" };
const _hoisted_22 = ["onClick"];
const _hoisted_23 = { class: "mb-4" };
const _hoisted_24 = /* @__PURE__ */ Vue.createElementVNode("h5", { class: "mb-2 fs-6 fw-bolder" }, "尺寸", -1);
const _hoisted_25 = { class: "d-flex flex-wrap" };
const _hoisted_26 = ["onClick"];
const _hoisted_27 = { class: "mb-6" };
const _hoisted_28 = /* @__PURE__ */ Vue.createElementVNode("h5", { class: "mb-4 fs-6 fw-bolder" }, "數量", -1);
const _hoisted_29 = { class: "mb-4" };
const _hoisted_30 = { class: "p-4 border-top" };
const _hoisted_31 = /* @__PURE__ */ Vue.createElementVNode("h4", { class: "tracking-wider mb-3" }, "商品描述", -1);
const _hoisted_32 = { class: "list-decimal mb-3 ps-5" };
const _hoisted_33 = { class: "border-top border-bottom-xl p-4" };
const _hoisted_34 = /* @__PURE__ */ Vue.createElementVNode("h4", { class: "tracking-wider mb-3" }, "洗滌說明", -1);
const _hoisted_35 = { class: "list-decimal mb-3 ps-5" };
const _hoisted_36 = {
  key: 0,
  class: "col-xl-4 border-end-xl"
};
const _hoisted_37 = { class: "check border-bottom p-4" };
const _hoisted_38 = { class: "mb-2 fs-3" };
const _hoisted_39 = { class: "px-3 py-1 bg-dark text-light" };
const _hoisted_40 = { class: "fs-3 mt-5 mb-0 fw-bolder lh-1" };
const _hoisted_41 = {
  key: 0,
  class: "d-flex items-center mt-1"
};
const _hoisted_42 = { class: "fs-6 mb-0 text-primary" };
const _hoisted_43 = { class: "td-line-through pe-6" };
const _hoisted_44 = { class: "px-2 fs-7 py-1 bg-danger text-white" };
const _hoisted_45 = { class: "mb-4" };
const _hoisted_46 = /* @__PURE__ */ Vue.createElementVNode("h5", { class: "mt-5 mb-0 fs-6 fw-bolder" }, "顏色", -1);
const _hoisted_47 = { class: "mt-2 d-flex" };
const _hoisted_48 = ["onClick"];
const _hoisted_49 = { class: "mb-4" };
const _hoisted_50 = /* @__PURE__ */ Vue.createElementVNode("h5", { class: "mb-2 fs-6 fw-bolder" }, "尺寸", -1);
const _hoisted_51 = { class: "d-flex flex-wrap" };
const _hoisted_52 = ["onClick"];
const _hoisted_53 = { class: "mb-6" };
const _hoisted_54 = /* @__PURE__ */ Vue.createElementVNode("h5", { class: "mb-4 fs-6 fw-bolder" }, "數量", -1);
const _hoisted_55 = { class: "mb-4" };
const _hoisted_56 = { class: "hot col-12 p-4 border-xl border-top mt-xl-n" };
const _hoisted_57 = /* @__PURE__ */ Vue.createElementVNode("h4", { class: "mb-3 tracking-wider" }, "熱銷推薦", -1);
const _hoisted_58 = { class: "border-top border-bottom bg-light" };
const _hoisted_59 = {
  key: 0,
  class: "load w-full h-15 border-start border-end"
};
const _hoisted_60 = { class: "w-full h-15 overflow-hidden position-relative" };
const _hoisted_61 = { class: "position-absolute bottom-0 ms-n mb-n px-2 h-7 bg-white border w-12 d-flex items-center justify-center" };
const _hoisted_62 = { class: "d-block fw-medium" };
const _hoisted_63 = ["src"];
const _sfc_main = {
  __name: "product",
  setup(__props) {
    const { isPc, isPhone } = useCheckMedia();
    const data = Vue.reactive({
      isLoading: true,
      product: {},
      hotProducts: []
    });
    const { isLoading, product: product2, hotProducts } = Vue.toRefs(data);
    const route = VueRouter.useRoute();
    const order = Vue.reactive({
      product_id: route.params.id,
      qty: 0,
      size: "",
      color: ""
    });
    const isdisable = Vue.computed(
      () => order.qty !== 0 && order.size !== "" && order.color !== ""
    );
    const getProduct = async () => {
      data.isLoading = true;
      try {
        const result = await getProductApi(route.params.id);
        const result2 = await getAllProductsApi();
        if (!result.data.success || !result2.data.success) {
          throw new Error("資料下載失敗");
        }
        data.product = result.data.product;
        const { products: allProducts } = result2.data;
        data.hotProducts = allProducts.slice(0, 12);
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
    const cart = useCart();
    Vue.onMounted(() => {
      getProduct();
    });
    Vue.watch(
      () => route.params.id,
      () => {
        if (route.params.id) {
          getProduct();
        }
      }
    );
    return (_ctx, _cache) => {
      const _component_LoadBtn = Vue.resolveComponent("LoadBtn");
      const _component_router_link = Vue.resolveComponent("router-link");
      return Vue.openBlock(), Vue.createElementBlock("section", _hoisted_1, [
        Vue.createElementVNode("div", _hoisted_2, [
          Vue.createElementVNode("div", _hoisted_3, [
            Vue.createElementVNode("div", _hoisted_4, [
              Vue.unref(isLoading) ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_5, [
                !Vue.unref(isPhone) ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_6, [
                  (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(4, (i) => {
                    return Vue.createElementVNode("div", {
                      class: "load w-80px h-14p mb-3",
                      key: i
                    });
                  }), 64))
                ])) : Vue.createCommentVNode("", true),
                _hoisted_7
              ])) : Vue.createCommentVNode("", true),
              !Vue.unref(isLoading) ? (Vue.openBlock(), Vue.createBlock(Vue.unref(ThumbsSwiper), {
                key: 1,
                imagesUrl: Vue.unref(product2).imagesUrl
              }, {
                thumbItem: Vue.withCtx(({ swiperItem }) => [
                  Vue.createElementVNode("img", { src: swiperItem }, null, 8, _hoisted_8)
                ]),
                mainItem: Vue.withCtx(({ swiperItem }) => [
                  Vue.createElementVNode("img", {
                    src: swiperItem,
                    class: "ms-0 w-sm-550px h-full h-sm-17"
                  }, null, 8, _hoisted_9)
                ]),
                _: 1
              }, 8, ["imagesUrl"])) : Vue.createCommentVNode("", true),
              !Vue.unref(isPc) ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_10, [
                Vue.createElementVNode("div", _hoisted_11, [
                  Vue.createElementVNode("h1", _hoisted_12, Vue.toDisplayString(Vue.unref(product2).title), 1),
                  Vue.createElementVNode("span", _hoisted_13, Vue.toDisplayString(Vue.unref(product2).category), 1),
                  Vue.createElementVNode("p", _hoisted_14, " NT$ " + Vue.toDisplayString(Vue.unref(product2).price), 1),
                  Vue.unref(product2).discount && Vue.unref(product2).discount !== 0 ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_15, [
                    Vue.createElementVNode("p", _hoisted_16, [
                      Vue.createElementVNode("span", _hoisted_17, " NT$ " + Vue.toDisplayString(Vue.unref(product2).origin_price), 1),
                      Vue.createElementVNode("span", _hoisted_18, " -" + Vue.toDisplayString(Vue.unref(product2).discount) + "% ", 1)
                    ])
                  ])) : Vue.createCommentVNode("", true),
                  Vue.createElementVNode("div", _hoisted_19, [
                    _hoisted_20,
                    Vue.createElementVNode("div", _hoisted_21, [
                      (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(product2).colors, (color) => {
                        return Vue.openBlock(), Vue.createElementBlock("button", {
                          key: color,
                          class: Vue.normalizeClass(["border me-3 w-8 h-6 p-0", { active: order.color === color }]),
                          onClick: ($event) => order.color = color
                        }, Vue.toDisplayString(color), 11, _hoisted_22);
                      }), 128))
                    ])
                  ]),
                  Vue.createElementVNode("div", _hoisted_23, [
                    _hoisted_24,
                    Vue.createElementVNode("div", _hoisted_25, [
                      (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(product2).sizes, (size) => {
                        return Vue.openBlock(), Vue.createElementBlock("button", {
                          key: size,
                          class: Vue.normalizeClass(["border me-3 w-8 h-6 p-0", { active: order.size === size }]),
                          onClick: ($event) => order.size = size
                        }, Vue.toDisplayString(size), 11, _hoisted_26);
                      }), 128))
                    ])
                  ]),
                  Vue.createElementVNode("div", _hoisted_27, [
                    _hoisted_28,
                    Vue.createVNode(Vue.unref(_sfc_main$4), {
                      integerOnly: true,
                      value: order.qty,
                      max: 10,
                      onInput: _cache[0] || (_cache[0] = (val) => {
                        order.qty = val;
                      })
                    }, null, 8, ["value"])
                  ]),
                  Vue.createElementVNode("div", _hoisted_29, [
                    Vue.createVNode(_component_LoadBtn, {
                      class: "add-cart w-full m-0 tracking-wider bg-black text-white py-2",
                      onBtnclick: _cache[1] || (_cache[1] = ($event) => Vue.unref(cart).addCart(order)),
                      disabled: !isdisable.value
                    }, {
                      default: Vue.withCtx(() => [
                        Vue.createTextVNode(" 加入購物車 ")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ])
                ])
              ])) : Vue.createCommentVNode("", true),
              Vue.createElementVNode("div", _hoisted_30, [
                _hoisted_31,
                Vue.createElementVNode("ul", _hoisted_32, [
                  (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(productInfo), (item, index2) => {
                    return Vue.openBlock(), Vue.createElementBlock("li", {
                      class: "pb-1",
                      key: index2
                    }, Vue.toDisplayString(item), 1);
                  }), 128))
                ])
              ]),
              Vue.createElementVNode("div", _hoisted_33, [
                _hoisted_34,
                Vue.createElementVNode("ul", _hoisted_35, [
                  (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(washInfo), (item, index2) => {
                    return Vue.openBlock(), Vue.createElementBlock("li", {
                      class: "pb-1",
                      key: index2
                    }, Vue.toDisplayString(item), 1);
                  }), 128))
                ])
              ])
            ]),
            Vue.unref(isPc) ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_36, [
              Vue.createElementVNode("div", _hoisted_37, [
                Vue.createElementVNode("h1", _hoisted_38, Vue.toDisplayString(Vue.unref(product2).title), 1),
                Vue.createElementVNode("span", _hoisted_39, Vue.toDisplayString(Vue.unref(product2).category), 1),
                Vue.createElementVNode("p", _hoisted_40, " NT$ " + Vue.toDisplayString(Vue.unref(product2).price), 1),
                Vue.unref(product2).discount && Vue.unref(product2).discount !== 0 ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_41, [
                  Vue.createElementVNode("p", _hoisted_42, [
                    Vue.createElementVNode("span", _hoisted_43, " NT$ " + Vue.toDisplayString(Vue.unref(product2).origin_price), 1),
                    Vue.createElementVNode("span", _hoisted_44, " -" + Vue.toDisplayString(Vue.unref(product2).discount) + "% ", 1)
                  ])
                ])) : Vue.createCommentVNode("", true),
                Vue.createElementVNode("div", _hoisted_45, [
                  _hoisted_46,
                  Vue.createElementVNode("div", _hoisted_47, [
                    (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(product2).colors, (color) => {
                      return Vue.openBlock(), Vue.createElementBlock("button", {
                        key: color,
                        class: Vue.normalizeClass(["border me-3 w-8 h-6 p-0", { active: order.color === color }]),
                        onClick: ($event) => order.color = color
                      }, Vue.toDisplayString(color), 11, _hoisted_48);
                    }), 128))
                  ])
                ]),
                Vue.createElementVNode("div", _hoisted_49, [
                  _hoisted_50,
                  Vue.createElementVNode("div", _hoisted_51, [
                    (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(product2).sizes, (size) => {
                      return Vue.openBlock(), Vue.createElementBlock("button", {
                        key: size,
                        class: Vue.normalizeClass(["border me-3 w-8 h-6 p-0", { active: order.size === size }]),
                        onClick: ($event) => order.size = size
                      }, Vue.toDisplayString(size), 11, _hoisted_52);
                    }), 128))
                  ])
                ]),
                Vue.createElementVNode("div", _hoisted_53, [
                  _hoisted_54,
                  Vue.createVNode(Vue.unref(_sfc_main$4), {
                    integerOnly: true,
                    value: order.qty,
                    max: 10,
                    onInput: _cache[2] || (_cache[2] = (val) => {
                      order.qty = val;
                    })
                  }, null, 8, ["value"])
                ]),
                Vue.createElementVNode("div", _hoisted_55, [
                  Vue.createVNode(_component_LoadBtn, {
                    class: "add-cart w-full m-0 tracking-wider bg-black text-white py-2",
                    onBtnclick: _cache[3] || (_cache[3] = ($event) => Vue.unref(cart).addCart(order)),
                    disabled: !isdisable.value
                  }, {
                    default: Vue.withCtx(() => [
                      Vue.createTextVNode(" 加入購物車 ")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])) : Vue.createCommentVNode("", true),
            Vue.createElementVNode("div", _hoisted_56, [
              _hoisted_57,
              Vue.createElementVNode("div", _hoisted_58, [
                Vue.unref(isLoading) ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_59)) : Vue.createCommentVNode("", true),
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
                    Vue.createElementVNode("div", _hoisted_60, [
                      Vue.createElementVNode("p", _hoisted_61, [
                        Vue.createElementVNode("span", _hoisted_62, Vue.toDisplayString(swiperItem.title), 1)
                      ]),
                      Vue.createVNode(_component_router_link, {
                        to: { name: "product", params: { id: swiperItem.id } }
                      }, {
                        default: Vue.withCtx(() => [
                          Vue.createElementVNode("img", {
                            src: swiperItem.imagesUrl[0],
                            class: "d-block"
                          }, null, 8, _hoisted_63)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ])
                  ]),
                  _: 1
                }, 8, ["data"])
              ])
            ])
          ])
        ])
      ]);
    };
  }
};
const product = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_0 as _,
  __vite_glob_0_1 as a,
  __vite_glob_0_2 as b,
  couponInfo as c,
  __vite_glob_0_3 as d,
  __vite_glob_0_4 as e,
  __vite_glob_0_5 as f,
  __vite_glob_0_6 as g,
  __vite_glob_0_7 as h,
  __vite_glob_0_8 as i,
  __vite_glob_0_9 as j,
  __vite_glob_0_10 as k,
  logisticsInfo as l,
  __vite_glob_0_11 as m,
  index as n,
  product as o,
  products as p
};
