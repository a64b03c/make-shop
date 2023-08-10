import { d as dayjs, a as duration } from "./dayjs-05d8f374.js";
import { u as useIntervalFn, a as useWindowSize } from "./@vueuse-9a1afe70.js";
import { S as Swiper, a as SwiperSlide, f as freeMode, N as Navigation, T as Thumb, A as Autoplay } from "./swiper-7326f1d7.js";
import { M as Modal } from "./bootstrap-b0d0a60b.js";
import { S as Swal } from "./sweetalert2-dd92db00.js";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const CategoriesBar_vue_vue_type_style_index_0_scoped_3662c1cf_lang = "";
const _hoisted_1$d = { class: "categories fs-4 fw-bolder border-start-xl border-end-xl border-bottom-0 border-top" };
const _hoisted_2$c = { class: "p-0 m-0 row" };
const _sfc_main$d = {
  __name: "CategoriesBar",
  setup(__props) {
    const categories = ["全部商品", "上衣", "洋裝", "褲子", "裙子", "外著"];
    return (_ctx, _cache) => {
      const _component_router_link = Vue.resolveComponent("router-link");
      return Vue.openBlock(), Vue.createElementBlock("nav", _hoisted_1$d, [
        Vue.createElementVNode("ul", _hoisted_2$c, [
          (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(categories, (item) => {
            return Vue.createElementVNode("li", {
              key: item,
              class: "col-sm-2 m-0 border-end-sm border-bottom border-bottom-sm-0"
            }, [
              Vue.createVNode(_component_router_link, {
                class: "d-flex justify-around items-center d-block w-full h-8 h-sm-10 text-dark tracking-widest",
                to: { path: "/products", query: { category: item } }
              }, {
                default: Vue.withCtx(() => [
                  Vue.createTextVNode(Vue.toDisplayString(item), 1)
                ]),
                _: 2
              }, 1032, ["to"])
            ]);
          }), 64))
        ])
      ]);
    };
  }
};
const CategoriesBar = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-3662c1cf"]]);
const Marquee_vue_vue_type_style_index_0_scoped_d34080ea_lang = "";
const _hoisted_1$c = { class: "marquee" };
const _hoisted_2$b = { class: "context" };
const _sfc_main$c = {
  __name: "Marquee",
  props: {
    data: {
      type: Array,
      default: () => {
        return [
          "本網站為作業用網站，無商業用途",
          "本網站為作業用網站，無商業用途",
          "本網站為作業用網站，無商業用途"
        ];
      }
    },
    height: {
      type: String,
      default: "48px"
    },
    fontSize: {
      type: String,
      default: "16px"
    },
    backgroundColor: {
      type: String,
      default: "black"
    },
    second: {
      type: String,
      default: "60s"
    }
  },
  setup(__props) {
    Vue.useCssVars((_ctx) => ({
      "1194d67c": __props.height,
      "4a2ae505": __props.fontSize,
      "7c883dc0": __props.backgroundColor,
      "245789c9": __props.second
    }));
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$c, [
        Vue.createElementVNode("div", _hoisted_2$b, [
          (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(__props.data, (item) => {
            return Vue.openBlock(), Vue.createElementBlock("span", {
              class: "marquee-text",
              key: item
            }, Vue.toDisplayString(item), 1);
          }), 128))
        ])
      ]);
    };
  }
};
const Marquee = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-d34080ea"]]);
const CountDown_vue_vue_type_style_index_0_scoped_95013275_lang = "";
const _hoisted_1$b = { class: "cd d-flex items-center justify-center py-4" };
const _hoisted_2$a = { class: "d-flex items-center" };
const _hoisted_3$9 = { class: "d-flex items-center justify-center" };
const _hoisted_4$8 = { class: "w-5 text-center" };
const _hoisted_5$8 = { class: "w-5 text-center" };
const _hoisted_6$7 = { class: "w-5 text-center" };
const _hoisted_7$6 = { class: "w-5 text-center" };
const _hoisted_8$5 = {
  key: 0,
  class: "mb-0"
};
const _sfc_main$b = {
  __name: "CountDown",
  props: {
    until: { type: String, default: "2023/08/20" }
  },
  setup(__props) {
    const props = __props;
    dayjs.extend(duration);
    const now = Vue.ref(dayjs());
    const lastSec = Vue.ref(null);
    const nowTime = Vue.computed({
      get: () => now.value,
      set: (value) => {
        lastSec.value = now.value;
        now.value = value;
      }
    });
    const formatTime = (duration2) => {
      const hms = duration2.format("DDHHmmss");
      const displayHms = [...hms];
      return displayHms;
    };
    const timeLeft = Vue.computed(() => {
      const untilDay = dayjs(props.until);
      if (untilDay.isBefore(nowTime.value))
        return dayjs.duration(0);
      const diffDays = dayjs.duration(untilDay.diff(nowTime.value));
      return formatTime(diffDays);
    });
    const oTimeLeft = Vue.computed(() => {
      if (lastSec.value === null)
        return dayjs.duration(0);
      const untilDay = dayjs(props.until);
      if (untilDay.isBefore(lastSec.value))
        return dayjs.duration(0);
      const diffDays = dayjs.duration(untilDay.diff(lastSec.value));
      return formatTime(diffDays);
    });
    const { pause } = useIntervalFn(() => {
      nowTime.value = dayjs();
    }, 1e3);
    const cols = Vue.ref([]);
    let countSec = null;
    const stopWatchEffect = Vue.watchEffect(() => {
      if (cols.value) {
        Array.from(cols.value).forEach((c, i) => {
          if (timeLeft.value[i] !== oTimeLeft.value[i]) {
            cols.value[i].classList.add("roll-in");
            countSec = setTimeout(() => {
              cols.value[i].classList.remove("roll-in");
            }, 500);
          }
        });
      }
    });
    Vue.onBeforeUnmount(() => {
      pause();
      stopWatchEffect();
      clearTimeout(countSec);
    });
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$b, [
        Vue.createElementVNode("div", _hoisted_2$a, [
          Vue.createElementVNode("div", _hoisted_3$9, [
            (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(4, (i, index2) => {
              return Vue.createElementVNode("div", {
                class: "cd-groups d-flex",
                key: index2
              }, [
                Vue.createElementVNode("div", {
                  ref_for: true,
                  ref_key: "cols",
                  ref: cols
                }, [
                  Vue.createElementVNode("div", _hoisted_4$8, Vue.toDisplayString(timeLeft.value[index2 * 2]), 1),
                  Vue.createElementVNode("div", _hoisted_5$8, Vue.toDisplayString(oTimeLeft.value[index2 * 2]), 1)
                ], 512),
                Vue.createElementVNode("div", {
                  ref_for: true,
                  ref_key: "cols",
                  ref: cols
                }, [
                  Vue.createElementVNode("div", _hoisted_6$7, Vue.toDisplayString(timeLeft.value[index2 * 2 + 1]), 1),
                  Vue.createElementVNode("div", _hoisted_7$6, Vue.toDisplayString(oTimeLeft.value[index2 * 2 + 1]), 1)
                ], 512),
                index2 < 3 ? (Vue.openBlock(), Vue.createElementBlock("p", _hoisted_8$5, "：")) : Vue.createCommentVNode("", true)
              ]);
            }), 64))
          ])
        ])
      ]);
    };
  }
};
const CountDown = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-95013275"]]);
const http = axios.create({
  baseURL: "https://vue3-course-api.hexschool.io",
  timeout: 1e4
});
http.interceptors.request.use((config) => {
  return config;
});
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const path$1 = "a64b03cv2-api";
function addCartApi(data) {
  return http({
    url: `/api/${path$1}/cart`,
    method: "post",
    data: { data }
  });
}
function updateCartApi(data, id) {
  return http({
    url: `/api/${path$1}/cart/${id}`,
    method: "put",
    data: { data }
  });
}
function deleteCartApi(id) {
  return http({
    url: `/api/${path$1}/cart/${id}`,
    method: "delete"
  });
}
function getCartApi() {
  return http({
    url: `/api/${path$1}/cart`,
    method: "get"
  });
}
function postCouponApi(code) {
  return http({
    url: `/api/${path$1}/coupon`,
    method: "post",
    data: {
      data: {
        code
      }
    }
  });
}
function postOrderApi(data) {
  return http({
    url: `/api/${path$1}/order`,
    method: "post",
    data: { data }
  });
}
function getOrderApi(id) {
  return http({
    url: `/api/${path$1}/order/${id}`,
    method: "get"
  });
}
function postPayApi(id) {
  return http({
    url: `/api/${path$1}/pay/${id}`,
    method: "post"
  });
}
const path = "a64b03cv2-api";
function getAllProductsApi() {
  return http({
    url: `/api/${path}/products/all`,
    method: "get"
  });
}
function getProductApi(id) {
  return http({
    url: `/api/${path}/product/${id}`,
    method: "get"
  });
}
const useCart = Pinia.defineStore("cart", {
  state: () => ({
    carts: [],
    favorite: JSON.parse(localStorage.getItem("favorite")) || [],
    favoriteData: []
  }),
  actions: {
    async getFavorite() {
      try {
        const promiseAll = [];
        this.favorite.forEach((item) => {
          promiseAll.push(getProductApi(item));
        });
        const results = await Promise.all(promiseAll);
        const hasFalse = results.find((item) => item.data.success === false);
        if (hasFalse) {
          throw new Error("加載失敗");
        }
        const products = [];
        results.forEach((item) => {
          products.push(item.data.product);
        });
        this.favoriteData = products;
      } catch (error) {
        console.log(error);
      }
    },
    addFavorite(id) {
      const hasId = this.favorite.includes(id);
      if (!hasId) {
        this.favorite.push(id);
        localStorage.setItem("favorite", JSON.stringify(this.favorite));
        this.getFavorite();
      }
    },
    deleteFavorite(index2) {
      this.favorite.splice(index2, 1);
      localStorage.setItem("favorite", JSON.stringify(this.favorite));
      this.getFavorite();
    },
    async getCart() {
      try {
        const result = await getCartApi();
        if (!result.data.success) {
          throw new Error("加載失敗");
        }
        this.carts = result.data.data.carts;
      } catch (error) {
        console.log(error);
      }
    },
    async addCart(data) {
      try {
        const result = await addCartApi(data);
        if (!result.data.success) {
          throw new Error("加入失敗");
        }
        this.getCart();
      } catch (error) {
        console.log(error);
      }
    },
    async updateCart(data, id) {
      try {
        const result = await updateCartApi(data, id);
        if (!result.data.success) {
          throw new Error("更新購物車失敗");
        }
        this.getCart();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteCart(id) {
      try {
        const result = await deleteCartApi(id);
        if (!result.data.success) {
          throw new Error("加載失敗");
        }
        this.getCart();
      } catch (error) {
        console.log(error);
      }
    },
    deleteAllCarts() {
    }
  },
  getters: {
    total() {
      return this.carts.reduce((a, b) => {
        return a + b.final_total;
      }, 0);
    }
  }
});
const Header_vue_vue_type_style_index_0_scoped_34c9beca_lang = "";
const _hoisted_1$a = { class: "border-bottom position-fixed top-0 start-0 end-0 z-999 bg-white" };
const _hoisted_2$9 = { class: "m-0 fs-7" };
const _hoisted_3$8 = { class: "container-xl d-flex justify-between" };
const _hoisted_4$7 = { class: "logo ms-2 ms-xl-0 mb-0 fw-bold h-8 d-flex items-center justify-center" };
const _hoisted_5$7 = { class: "d-flex m-0 ps-0 items-center justify-center position-relative" };
const _hoisted_6$6 = { class: "position-relative" };
const _hoisted_7$5 = {
  key: 0,
  class: "num text-center text-white bg-danger rounded-circle"
};
const _hoisted_8$4 = { class: "list p-4" };
const _hoisted_9$4 = { class: "w-8 overflow-hidden" };
const _hoisted_10$4 = ["src"];
const _hoisted_11$4 = { class: "p-4 d-flex flex-column justify-start grow-1" };
const _hoisted_12$4 = { class: "mb-0" };
const _hoisted_13$4 = { class: "mb-0" };
const _hoisted_14$3 = {
  key: 0,
  class: "fs-5 text-center"
};
const _hoisted_15$3 = { class: "position-relative" };
const _hoisted_16$3 = {
  key: 0,
  class: "num text-center text-white bg-danger rounded-circle"
};
const _sfc_main$a = {
  __name: "Header",
  setup(__props) {
    const cart2 = useCart();
    const { favoriteData, carts } = Pinia.storeToRefs(cart2);
    const deleteFavorite = (index2) => {
      cart2.deleteFavorite(index2);
    };
    Vue.onMounted(() => {
      cart2.getFavorite();
      cart2.getCart();
    });
    return (_ctx, _cache) => {
      const _component_router_link = Vue.resolveComponent("router-link");
      const _component_SvgIcon = Vue.resolveComponent("SvgIcon");
      const _component_LoadBtn = Vue.resolveComponent("LoadBtn");
      const _directive_drown = Vue.resolveDirective("drown");
      return Vue.openBlock(), Vue.createElementBlock("header", _hoisted_1$a, [
        Vue.createElementVNode("nav", _hoisted_2$9, [
          Vue.createElementVNode("div", _hoisted_3$8, [
            Vue.createElementVNode("h1", _hoisted_4$7, [
              Vue.createVNode(_component_router_link, {
                class: "d-block text-dark",
                to: "/"
              }, {
                default: Vue.withCtx(() => [
                  Vue.createTextVNode("Shop")
                ]),
                _: 1
              })
            ]),
            Vue.createElementVNode("ul", _hoisted_5$7, [
              Vue.createElementVNode("li", null, [
                Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("a", {
                  class: "favorite-link d-block w-7 h-8 text-dark d-flex items-center justify-center",
                  onClick: _cache[0] || (_cache[0] = Vue.withModifiers(() => {
                  }, ["prevent"]))
                }, [
                  Vue.createElementVNode("div", _hoisted_6$6, [
                    Vue.createVNode(_component_SvgIcon, {
                      name: "favorite",
                      width: "28px",
                      height: "28px"
                    }),
                    Vue.unref(favoriteData).length !== 0 ? (Vue.openBlock(), Vue.createElementBlock("span", _hoisted_7$5, Vue.toDisplayString(Vue.unref(favoriteData).length), 1)) : Vue.createCommentVNode("", true)
                  ]),
                  Vue.createElementVNode("ul", _hoisted_8$4, [
                    (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(favoriteData), (item, index2) => {
                      return Vue.openBlock(), Vue.createElementBlock("li", {
                        class: "d-flex items-center p-3 border border-top-0 justify-between",
                        key: item
                      }, [
                        Vue.createElementVNode("div", _hoisted_9$4, [
                          Vue.createVNode(_component_router_link, {
                            to: { name: "product", params: { id: item.id } }
                          }, {
                            default: Vue.withCtx(() => [
                              Vue.createElementVNode("img", {
                                src: item.imagesUrl[0],
                                class: "d-block w-full h-full object-cover object-center"
                              }, null, 8, _hoisted_10$4)
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]),
                        Vue.createElementVNode("div", _hoisted_11$4, [
                          Vue.createElementVNode("h6", _hoisted_12$4, Vue.toDisplayString(item.title), 1),
                          Vue.createElementVNode("p", _hoisted_13$4, "價格：" + Vue.toDisplayString(item.origin_price) + " 元", 1)
                        ]),
                        Vue.createVNode(_component_LoadBtn, {
                          class: "bg-dark text-white h-6 w-8 p-0",
                          onBtnclick: ($event) => deleteFavorite(index2)
                        }, {
                          default: Vue.withCtx(() => [
                            Vue.createTextVNode(" 刪除 ")
                          ]),
                          _: 2
                        }, 1032, ["onBtnclick"])
                      ]);
                    }), 128)),
                    Vue.unref(favoriteData).length === 0 ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_14$3, " 我的最愛已清空 ")) : Vue.createCommentVNode("", true)
                  ])
                ])), [
                  [_directive_drown]
                ])
              ]),
              Vue.createElementVNode("li", null, [
                Vue.createVNode(_component_router_link, {
                  class: "d-block w-7 h-8 text-dark d-flex items-center justify-center",
                  to: "/cart"
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createElementVNode("div", _hoisted_15$3, [
                      Vue.createVNode(_component_SvgIcon, {
                        name: "cart",
                        width: "28px",
                        height: "28px"
                      }),
                      Vue.unref(carts).length !== 0 ? (Vue.openBlock(), Vue.createElementBlock("span", _hoisted_16$3, Vue.toDisplayString(Vue.unref(carts).length), 1)) : Vue.createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ])
      ]);
    };
  }
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-34c9beca"]]);
const NumberInput_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$9 = { class: "vnis" };
const _hoisted_2$8 = ["value", "min", "max"];
const _sfc_main$9 = {
  __name: "NumberInput",
  props: {
    value: {
      type: Number,
      default: 0
    },
    basicLength: {
      type: String,
      default: "32px"
    },
    min: {
      default: 0,
      type: Number
    },
    max: {
      default: 10,
      type: Number
    },
    step: {
      default: 1,
      type: Number
    },
    mouseDownSpeed: {
      default: 500,
      type: Number
    },
    inputClass: {
      default: "vnis__input",
      type: String
    },
    buttonClass: {
      default: "vnis__button",
      type: String
    },
    integerOnly: {
      default: false,
      type: Boolean
    }
  },
  emits: ["input"],
  setup(__props, { emit: emits }) {
    const props = __props;
    Vue.useCssVars((_ctx) => ({
      "b4fb81a6": __props.basicLength
    }));
    const numericValue = Vue.ref(props.value);
    const timer = Vue.ref(null);
    const clearTimer = () => {
      if (timer.value) {
        clearInterval(timer.value);
        timer.value = null;
      }
    };
    const whileMouseDown = (callback) => {
      if (timer.value === null) {
        timer.value = setInterval(() => {
          callback();
        }, props.mouseDownSpeed);
      }
    };
    const increaseNumber = () => {
      numericValue.value += props.step;
    };
    const decreaseNumber = () => {
      numericValue.value -= props.step;
    };
    const isInteger = (evt) => {
      evt = evt ? evt : window.event;
      let key = evt.keyCode || evt.which;
      key = String.fromCharCode(key);
      const regex = /[0-9]/;
      if (!regex.test(key)) {
        evt.returnValue = false;
        if (evt.preventDefault)
          evt.preventDefault();
      }
    };
    const isNumber = (evt) => {
      evt = evt ? evt : window.event;
      let charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    };
    const validateInput = (evt) => {
      console.log(evt);
      if (props.integerOnly === true) {
        isInteger(evt);
      } else {
        isNumber(evt);
      }
    };
    const inputValue = (evt) => {
      numericValue.value = evt.target.value ? parseInt(evt.target.value) : props.min;
    };
    Vue.watch(
      () => numericValue.value,
      (val) => {
        if (val <= props.min) {
          numericValue.value = parseInt(props.min);
        }
        if (val >= props.max) {
          numericValue.value = parseInt(props.max);
        }
        if (val <= props.max && val >= props.min) {
          emits("input", val);
        }
      }
    );
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$9, [
        Vue.createElementVNode("button", {
          onMousedown: decreaseNumber,
          onClick: _cache[0] || (_cache[0] = ($event) => whileMouseDown(clearTimer)),
          class: Vue.normalizeClass(__props.buttonClass)
        }, " - ", 34),
        Vue.createElementVNode("input", {
          type: "number",
          value: numericValue.value,
          onKeypress: validateInput,
          onInput: inputValue,
          min: __props.min,
          max: __props.max,
          debounce: "500",
          class: Vue.normalizeClass(__props.inputClass)
        }, null, 42, _hoisted_2$8),
        Vue.createElementVNode("button", {
          onMousedown: increaseNumber,
          onClick: _cache[1] || (_cache[1] = ($event) => whileMouseDown(clearTimer)),
          class: Vue.normalizeClass(__props.buttonClass)
        }, " + ", 34)
      ]);
    };
  }
};
const ThumbsSwiper_vue_vue_type_style_index_0_scoped_2da60424_lang = "";
const _hoisted_1$8 = { class: "d-flex p-4" };
const _sfc_main$8 = {
  __name: "ThumbsSwiper",
  props: {
    imagesUrl: Array
  },
  setup(__props) {
    const modules = [freeMode, Navigation, Thumb];
    const thumbsSwiper = Vue.ref(null);
    const windowWidth = Vue.ref(window.innerWidth);
    const isphone = Vue.computed(() => windowWidth.value < 576);
    const { width } = useWindowSize();
    Vue.watch(
      () => width.value,
      () => {
        windowWidth.value = width.value;
      }
    );
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$8, [
        !isphone.value ? (Vue.openBlock(), Vue.createBlock(Vue.unref(Swiper), {
          key: 0,
          onSwiper: setThumbsSwiper,
          spaceBetween: 10,
          slidesPerView: 7,
          direction: "vertical",
          freeMode: false,
          watchSlidesProgress: true,
          modules,
          class: "mySwiper"
        }, {
          default: Vue.withCtx(() => [
            (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(__props.imagesUrl, (item, index2) => {
              return Vue.openBlock(), Vue.createBlock(Vue.unref(SwiperSlide), { key: index2 }, {
                default: Vue.withCtx(() => [
                  Vue.renderSlot(_ctx.$slots, "thumbItem", { swiperItem: item }, void 0, true)
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]),
          _: 3
        })) : Vue.createCommentVNode("", true),
        Vue.createVNode(Vue.unref(Swiper), {
          style: {
            "--swiper-pagination-color": "#fff"
          },
          initialSlide: 0,
          spaceBetween: 16,
          thumbs: { swiper: thumbsSwiper.value },
          modules,
          class: "mySwiper2"
        }, {
          default: Vue.withCtx(() => [
            (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(__props.imagesUrl, (item, index2) => {
              return Vue.openBlock(), Vue.createBlock(Vue.unref(SwiperSlide), {
                key: index2,
                class: "bg-light"
              }, {
                default: Vue.withCtx(() => [
                  Vue.renderSlot(_ctx.$slots, "mainItem", { swiperItem: item }, void 0, true)
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]),
          _: 3
        }, 8, ["thumbs"])
      ]);
    };
  }
};
const ThumbsSwiper = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-2da60424"]]);
const MySwiper_vue_vue_type_style_index_0_scoped_9b6a0710_lang = "";
const _hoisted_1$7 = { class: "control" };
const _hoisted_2$7 = { class: "carousel-prev" };
const _hoisted_3$7 = { class: "carousel-next" };
const _sfc_main$7 = {
  __name: "MySwiper",
  props: {
    data: {
      type: Array
    },
    breakpoints: {
      type: Object,
      default: () => {
        return {
          576: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 1
          }
        };
      }
    }
  },
  setup(__props) {
    const modules = [Autoplay, Navigation];
    return (_ctx, _cache) => {
      const _component_SvgIcon = Vue.resolveComponent("SvgIcon");
      return Vue.openBlock(), Vue.createBlock(Vue.unref(Swiper), {
        slidesPerView: 1,
        breakpoints: __props.breakpoints,
        spaceBetween: 16,
        modules,
        navigation: {
          nextEl: ".carousel-next",
          prevEl: ".carousel-prev"
        },
        autoplay: {
          delay: 5e3,
          disableOnInteraction: false
        }
      }, {
        default: Vue.withCtx(() => [
          (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(__props.data, (item, index2) => {
            return Vue.openBlock(), Vue.createBlock(Vue.unref(SwiperSlide), {
              key: index2,
              class: "border-start border-end"
            }, {
              default: Vue.withCtx(() => [
                Vue.renderSlot(_ctx.$slots, "body", { swiperItem: item }, void 0, true)
              ]),
              _: 2
            }, 1024);
          }), 128)),
          Vue.createElementVNode("div", _hoisted_1$7, [
            Vue.createElementVNode("button", _hoisted_2$7, [
              Vue.createVNode(_component_SvgIcon, { name: "prev" })
            ]),
            Vue.createElementVNode("button", _hoisted_3$7, [
              Vue.createVNode(_component_SvgIcon, { name: "next" })
            ])
          ])
        ]),
        _: 3
      }, 8, ["breakpoints", "navigation"]);
    };
  }
};
const MySwiper = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-9b6a0710"]]);
const _hoisted_1$6 = { class: "modal-dialog modal-dialog-centered" };
const _hoisted_2$6 = { class: "modal-content rounded-0" };
const _hoisted_3$6 = { class: "modal-header border-bottom-0" };
const _hoisted_4$6 = { class: "modal-title" };
const _hoisted_5$6 = { class: "modal-body py-0" };
const _hoisted_6$5 = { class: "modal-footer border-top-0" };
const _sfc_main$6 = {
  __name: "Modal",
  props: {
    modalTitle: {
      type: String,
      default: "標頭"
    }
  },
  setup(__props, { expose: __expose }) {
    const modal = Vue.ref(null);
    const myModal = Vue.ref(null);
    const openModal = () => {
      myModal.value.show();
    };
    const closeModal = () => {
      myModal.value.hide();
    };
    Vue.onMounted(() => {
      myModal.value = new Modal(modal.value);
    });
    __expose({ openModal, closeModal });
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", {
        class: "modal fade",
        ref_key: "modal",
        ref: modal,
        tabindex: "-1",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true"
      }, [
        Vue.createElementVNode("div", _hoisted_1$6, [
          Vue.createElementVNode("div", _hoisted_2$6, [
            Vue.createElementVNode("div", _hoisted_3$6, [
              Vue.createElementVNode("h4", _hoisted_4$6, Vue.toDisplayString(__props.modalTitle), 1)
            ]),
            Vue.createElementVNode("div", _hoisted_5$6, [
              Vue.renderSlot(_ctx.$slots, "body")
            ]),
            Vue.createElementVNode("div", _hoisted_6$5, [
              Vue.renderSlot(_ctx.$slots, "footer")
            ])
          ])
        ])
      ], 512);
    };
  }
};
const _hoisted_1$5 = { class: "card w-full h-full" };
const _hoisted_2$5 = ["src"];
const _hoisted_3$5 = { class: "h-30p d-flex flex-column justify-between" };
const _hoisted_4$5 = { class: "mt-4" };
const _hoisted_5$5 = { class: "d-flex products-start justify-between" };
const _hoisted_6$4 = { class: "mb-2 fs-6 fw-medium tracking-wide" };
const _hoisted_7$4 = { class: "d-block mb-0 px-2 py-0 bg-dark text-white" };
const _hoisted_8$3 = { class: "fs-4 mb-0 fw-bolder me-0 lh-1" };
const _hoisted_9$3 = /* @__PURE__ */ Vue.createElementVNode("span", { class: "fs-6" }, "NT$", -1);
const _hoisted_10$3 = {
  key: 0,
  class: "d-flex products-center justify-between mb-0 mt-1"
};
const _hoisted_11$3 = { class: "fs-6 mb-0 text-primary lh-1" };
const _hoisted_12$3 = { class: "td-line-through" };
const _hoisted_13$3 = { class: "d-block mb-0 px-2 py-0 me-0 bg-danger text-white" };
const _sfc_main$5 = {
  __name: "Card",
  props: {
    product: {
      type: Object
    }
  },
  setup(__props) {
    const cart2 = useCart();
    return (_ctx, _cache) => {
      const _component_router_link = Vue.resolveComponent("router-link");
      const _component_LoadBtn = Vue.resolveComponent("LoadBtn");
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$5, [
        Vue.createVNode(_component_router_link, {
          class: "d-block h-70p overflow-hidden",
          to: { name: "product", params: { id: __props.product.id } }
        }, {
          default: Vue.withCtx(() => [
            Vue.createElementVNode("img", {
              class: "d-block w-full h-full object-cover object-center",
              src: __props.product.imagesUrl[0]
            }, null, 8, _hoisted_2$5)
          ]),
          _: 1
        }, 8, ["to"]),
        Vue.createElementVNode("div", _hoisted_3$5, [
          Vue.createElementVNode("div", _hoisted_4$5, [
            Vue.createElementVNode("div", _hoisted_5$5, [
              Vue.createVNode(_component_router_link, {
                to: { name: "product", params: { id: __props.product.id } },
                class: "d-block text-dark"
              }, {
                default: Vue.withCtx(() => [
                  Vue.createElementVNode("h3", _hoisted_6$4, Vue.toDisplayString(__props.product.title), 1)
                ]),
                _: 1
              }, 8, ["to"]),
              Vue.createVNode(_component_router_link, {
                to: {
                  path: "/products",
                  query: { category: __props.product.category }
                },
                class: "d-block flex-shrink-0"
              }, {
                default: Vue.withCtx(() => [
                  Vue.createElementVNode("span", _hoisted_7$4, Vue.toDisplayString(__props.product.category), 1)
                ]),
                _: 1
              }, 8, ["to"])
            ]),
            Vue.createElementVNode("p", _hoisted_8$3, [
              _hoisted_9$3,
              Vue.createTextVNode(" " + Vue.toDisplayString(__props.product.price), 1)
            ]),
            __props.product.discount !== 0 ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_10$3, [
              Vue.createElementVNode("p", _hoisted_11$3, [
                Vue.createElementVNode("span", _hoisted_12$3, " NT$  " + Vue.toDisplayString(__props.product.origin_price), 1)
              ]),
              Vue.createElementVNode("span", _hoisted_13$3, " -" + Vue.toDisplayString(__props.product.discount) + "% ", 1)
            ])) : Vue.createCommentVNode("", true)
          ]),
          Vue.createVNode(_component_LoadBtn, {
            class: "w-full m-0 tracking-wider bg-black text-white py-2",
            onBtnclick: _cache[0] || (_cache[0] = ($event) => Vue.unref(cart2).addFavorite(__props.product.id))
          }, {
            default: Vue.withCtx(() => [
              Vue.createTextVNode(" 加入我的最愛 ")
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
};
const index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$4 = {
  id: "setup",
  class: "fs-7 mt-9 mb-1"
};
const _hoisted_2$4 = { class: "container-xl p-4" };
const _hoisted_3$4 = { class: "stepper" };
const _hoisted_4$4 = { class: "stepper-progress" };
const _hoisted_5$4 = { class: "stepper-item-counter" };
const _hoisted_6$3 = { class: "number" };
const _hoisted_7$3 = { class: "title" };
const _sfc_main$4 = {
  __name: "index",
  setup(__props) {
    const route = VueRouter.useRoute();
    const stepper = Vue.reactive({
      step: 1,
      tabs: ["購物車", "訂單資訊", "確認訂單", "完成訂單"]
    });
    Vue.watchEffect(() => {
      switch (route.meta.step) {
        case 1: {
          stepper.step = 1;
          break;
        }
        case 2: {
          stepper.step = 2;
          break;
        }
        case 3: {
          stepper.step = 3;
          break;
        }
        case 4: {
          stepper.step = 4;
          break;
        }
      }
    });
    const stepperProgress = Vue.computed(() => {
      return 100 / (stepper.tabs.length - 1) * (stepper.step - 1) + "%";
    });
    return (_ctx, _cache) => {
      const _component_SvgIcon = Vue.resolveComponent("SvgIcon");
      const _component_router_view = Vue.resolveComponent("router-view");
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createVNode(Vue.unref(Header), {
          id: "header",
          class: "border-bottom"
        }),
        Vue.createElementVNode("aside", _hoisted_1$4, [
          Vue.createElementVNode("div", _hoisted_2$4, [
            Vue.createElementVNode("div", _hoisted_3$4, [
              Vue.createElementVNode("div", _hoisted_4$4, [
                Vue.createElementVNode("div", {
                  class: "stepper-progress-bar",
                  style: Vue.normalizeStyle("width:" + stepperProgress.value)
                }, null, 4)
              ]),
              (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(stepper.tabs, (item, index2) => {
                return Vue.openBlock(), Vue.createElementBlock("div", {
                  class: Vue.normalizeClass(["stepper-item", {
                    current: stepper.step === index2 + 1,
                    success: stepper.step > index2 + 1
                  }]),
                  key: index2
                }, [
                  Vue.createElementVNode("div", _hoisted_5$4, [
                    Vue.createVNode(_component_SvgIcon, {
                      class: "icon-success",
                      name: "done",
                      color: "#fff"
                    }),
                    Vue.createElementVNode("span", _hoisted_6$3, Vue.toDisplayString(index2 + 1), 1),
                    Vue.createElementVNode("span", _hoisted_7$3, Vue.toDisplayString(item), 1)
                  ])
                ], 2);
              }), 128))
            ])
          ])
        ]),
        Vue.createVNode(Vue.unref(Marquee)),
        Vue.createVNode(_component_router_view)
      ], 64);
    };
  }
};
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const cart_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = {
  id: "cart",
  class: "position-relactive"
};
const _hoisted_2$3 = { class: "container-xl fs-7 mb-12" };
const _hoisted_3$3 = { class: "orderlist" };
const _hoisted_4$3 = { class: "mb-0 ps-0" };
const _hoisted_5$3 = { class: "row items-center" };
const _hoisted_6$2 = { class: "col-auto" };
const _hoisted_7$2 = ["src"];
const _hoisted_8$2 = { class: "col-6 col-sm-6 ms-6" };
const _hoisted_9$2 = { class: "mb-0 me-4" };
const _hoisted_10$2 = { class: "mb-0" };
const _hoisted_11$2 = { class: "col-12 col-xl-3 d-flex justify-between mt-2 mt-xl-0 ms-xl-auto" };
const _hoisted_12$2 = { class: "w-75p me-4" };
const _hoisted_13$2 = ["onClick"];
const _hoisted_14$2 = { class: "checkout container-xl p-4 border-xl border-bottom-xl-0 border-top bg-white d-flex flex-column justify-between" };
const _hoisted_15$2 = { class: "d-flex justify-between items-center mb-2" };
const _hoisted_16$2 = { class: "mb-0" };
const _hoisted_17$2 = { class: "fs-3 mb-0" };
const _hoisted_18$1 = { class: "row" };
const _hoisted_19$1 = { class: "col-12 col-sm-6 d-flex mb-2 mb-sm-0" };
const _sfc_main$3 = {
  __name: "cart",
  setup(__props) {
    const cart2 = useCart();
    const { carts, total } = Pinia.storeToRefs(cart2);
    const couponCode = Vue.ref("");
    const postCoupon = async () => {
      try {
        await postCouponApi(couponCode.value);
        cart2.getCart();
      } catch (error) {
        Swal.fire({
          position: "top-end",
          text: error,
          timer: 1500
        });
      }
    };
    const router = VueRouter.useRouter();
    const checkOut = () => {
      router.push("/cart/order");
    };
    const updateCart = (val, product_id, id) => {
      const data = { product_id, qty: val };
      cart2.updateCart(data, id);
    };
    Vue.onMounted(() => {
      cart2.getCart();
    });
    return (_ctx, _cache) => {
      const _component_router_link = Vue.resolveComponent("router-link");
      const _component_LoadBtn = Vue.resolveComponent("LoadBtn");
      return Vue.openBlock(), Vue.createElementBlock("section", _hoisted_1$3, [
        Vue.createElementVNode("div", _hoisted_2$3, [
          Vue.createElementVNode("div", _hoisted_3$3, [
            Vue.createElementVNode("ul", _hoisted_4$3, [
              (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(carts), (item) => {
                return Vue.openBlock(), Vue.createElementBlock("li", {
                  class: "p-2 border-start-xl border-end-xl border-bottom",
                  key: item
                }, [
                  Vue.createElementVNode("div", _hoisted_5$3, [
                    Vue.createElementVNode("div", _hoisted_6$2, [
                      Vue.createVNode(_component_router_link, {
                        class: "d-block w-10 h-11 overflow-hidden",
                        to: { name: "product", params: { id: item.product_id } }
                      }, {
                        default: Vue.withCtx(() => [
                          Vue.createElementVNode("img", {
                            src: item.product.imagesUrl[0],
                            class: "d-block w-full h-full object-cover object-center"
                          }, null, 8, _hoisted_7$2)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]),
                    Vue.createElementVNode("div", _hoisted_8$2, [
                      Vue.createElementVNode("h6", null, Vue.toDisplayString(item.product.title), 1),
                      Vue.createElementVNode("span", _hoisted_9$2, "顏色-" + Vue.toDisplayString(item.color), 1),
                      Vue.createElementVNode("span", _hoisted_10$2, "尺寸-" + Vue.toDisplayString(item.size), 1)
                    ]),
                    Vue.createElementVNode("div", _hoisted_11$2, [
                      Vue.createElementVNode("div", _hoisted_12$2, [
                        Vue.createVNode(Vue.unref(_sfc_main$9), {
                          integerOnly: true,
                          value: item.qty,
                          min: 1,
                          max: 10,
                          onInput: ($event) => updateCart($event, item.product_id, item.id)
                        }, null, 8, ["value", "onInput"])
                      ]),
                      Vue.createElementVNode("button", {
                        class: "w-25p me-sm-4 h-6 text-center border",
                        onClick: ($event) => Vue.unref(cart2).deleteCart(item.id)
                      }, " 刪除 ", 8, _hoisted_13$2)
                    ])
                  ])
                ]);
              }), 128))
            ])
          ])
        ]),
        Vue.createElementVNode("div", _hoisted_14$2, [
          Vue.createElementVNode("div", _hoisted_15$2, [
            Vue.createElementVNode("h5", _hoisted_16$2, "共計" + Vue.toDisplayString(Vue.unref(carts).length) + "件商品", 1),
            Vue.createElementVNode("p", _hoisted_17$2, "NT " + Vue.toDisplayString(Vue.unref(total)) + " 元", 1)
          ]),
          Vue.createElementVNode("div", _hoisted_18$1, [
            Vue.createElementVNode("div", _hoisted_19$1, [
              Vue.withDirectives(Vue.createElementVNode("input", {
                type: "text",
                class: "ps-2 me-4",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => couponCode.value = $event)
              }, null, 512), [
                [Vue.vModelText, couponCode.value]
              ]),
              Vue.createVNode(_component_LoadBtn, {
                class: "d-block w-12 m-0 tracking-wider bg-primary text-white",
                onBtnclick: postCoupon,
                disabled: couponCode.value === ""
              }, {
                default: Vue.withCtx(() => [
                  Vue.createTextVNode(" 套用優惠券 ")
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            Vue.createVNode(_component_LoadBtn, {
              class: "col-12 col-sm-6 d-block w-full w-sm-12 m-0 tracking-wider bg-primary text-white ms-auto",
              onBtnclick: checkOut,
              disabled: Vue.unref(carts).length === 0
            }, {
              default: Vue.withCtx(() => [
                Vue.createTextVNode(" 前往結帳 ")
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])
      ]);
    };
  }
};
const cart = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$2 = { id: "order" };
const _hoisted_2$2 = { class: "container-xl p-4 fs-7" };
const _hoisted_3$2 = { class: "row justify-center" };
const _hoisted_4$2 = { class: "col-10 col-xl-4 items-center mt-4" };
const _hoisted_5$2 = { class: "mb-4" };
const _hoisted_6$1 = /* @__PURE__ */ Vue.createElementVNode("label", {
  for: "name",
  class: "d-block mb-2"
}, "用戶名", -1);
const _hoisted_7$1 = { class: "mb-4" };
const _hoisted_8$1 = /* @__PURE__ */ Vue.createElementVNode("label", {
  for: "email",
  class: "d-block mb-2"
}, "E-mail", -1);
const _hoisted_9$1 = { class: "mb-4" };
const _hoisted_10$1 = /* @__PURE__ */ Vue.createElementVNode("label", {
  for: "tel",
  class: "d-block mb-2"
}, "電話", -1);
const _hoisted_11$1 = { class: "mb-4" };
const _hoisted_12$1 = /* @__PURE__ */ Vue.createElementVNode("label", {
  for: "address",
  class: "d-block mb-2"
}, "地址", -1);
const _hoisted_13$1 = { class: "mb-6" };
const _hoisted_14$1 = /* @__PURE__ */ Vue.createElementVNode("label", {
  for: "message",
  class: "d-block mb-2"
}, "訊息留言", -1);
const _hoisted_15$1 = { class: "d-flex" };
const _hoisted_16$1 = ["disabled"];
const _hoisted_17$1 = ["onClick"];
const _sfc_main$2 = {
  __name: "order",
  setup(__props) {
    const order2 = Vue.reactive({
      user: {},
      message: ""
    });
    const { user, message } = Vue.toRefs(order2);
    const router = VueRouter.useRouter();
    const isPhone = (value) => {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "請輸入正確的電話號碼";
    };
    const postOrder = async () => {
      try {
        const result = await postOrderApi(order2);
        router.push({
          name: "checkorder",
          params: {
            id: result.data.orderId
          }
        });
      } catch (error) {
        Swal.fire({
          position: "top-end",
          text: error,
          timer: 1500
        });
      }
    };
    return (_ctx, _cache) => {
      const _component_VField = Vue.resolveComponent("VField");
      const _component_ErrorMessage = Vue.resolveComponent("ErrorMessage");
      const _component_VForm = Vue.resolveComponent("VForm");
      return Vue.openBlock(), Vue.createElementBlock("section", _hoisted_1$2, [
        Vue.createElementVNode("div", _hoisted_2$2, [
          Vue.createElementVNode("div", _hoisted_3$2, [
            Vue.createElementVNode("div", _hoisted_4$2, [
              Vue.createVNode(_component_VForm, { onSubmit: postOrder }, {
                default: Vue.withCtx(({ meta, resetForm }) => [
                  Vue.createElementVNode("div", _hoisted_5$2, [
                    _hoisted_6$1,
                    Vue.createVNode(_component_VField, {
                      name: "姓名",
                      rules: "required"
                    }, {
                      default: Vue.withCtx(({ field }) => [
                        Vue.withDirectives(Vue.createElementVNode("input", Vue.mergeProps(field, {
                          class: "w-full",
                          id: "name",
                          type: "text",
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => Vue.unref(user).name = $event)
                        }), null, 16), [
                          [Vue.vModelText, Vue.unref(user).name]
                        ])
                      ]),
                      _: 1
                    }),
                    Vue.createVNode(_component_ErrorMessage, {
                      name: "姓名",
                      class: "d-block text-danger mt-1"
                    })
                  ]),
                  Vue.createElementVNode("div", _hoisted_7$1, [
                    _hoisted_8$1,
                    Vue.createVNode(_component_VField, {
                      name: "E-mail",
                      rules: "required|email"
                    }, {
                      default: Vue.withCtx(({ field }) => [
                        Vue.withDirectives(Vue.createElementVNode("input", Vue.mergeProps(field, {
                          class: "w-full",
                          id: "email",
                          type: "email",
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => Vue.unref(user).email = $event)
                        }), null, 16), [
                          [Vue.vModelText, Vue.unref(user).email]
                        ])
                      ]),
                      _: 1
                    }),
                    Vue.createVNode(_component_ErrorMessage, {
                      name: "E-mail",
                      class: "d-block text-danger mt-1"
                    })
                  ]),
                  Vue.createElementVNode("div", _hoisted_9$1, [
                    _hoisted_10$1,
                    Vue.createVNode(_component_VField, {
                      name: "電話",
                      rules: isPhone
                    }, {
                      default: Vue.withCtx(({ field }) => [
                        Vue.withDirectives(Vue.createElementVNode("input", Vue.mergeProps(field, {
                          class: "w-full",
                          id: "tel",
                          type: "text",
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => Vue.unref(user).tel = $event)
                        }), null, 16), [
                          [Vue.vModelText, Vue.unref(user).tel]
                        ])
                      ]),
                      _: 1
                    }),
                    Vue.createVNode(_component_ErrorMessage, {
                      name: "電話",
                      class: "d-block text-danger mt-1"
                    })
                  ]),
                  Vue.createElementVNode("div", _hoisted_11$1, [
                    _hoisted_12$1,
                    Vue.createVNode(_component_VField, {
                      name: "地址",
                      rules: "required"
                    }, {
                      default: Vue.withCtx(({ field }) => [
                        Vue.withDirectives(Vue.createElementVNode("input", Vue.mergeProps(field, {
                          class: "w-full",
                          id: "address",
                          type: "text",
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => Vue.unref(user).address = $event)
                        }), null, 16), [
                          [Vue.vModelText, Vue.unref(user).address]
                        ])
                      ]),
                      _: 1
                    }),
                    Vue.createVNode(_component_ErrorMessage, {
                      name: "地址",
                      class: "d-block text-danger mt-1"
                    })
                  ]),
                  Vue.createElementVNode("div", _hoisted_13$1, [
                    _hoisted_14$1,
                    Vue.withDirectives(Vue.createElementVNode("input", {
                      type: "text",
                      id: "message",
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => Vue.isRef(message) ? message.value = $event : null),
                      class: "d w-full h-8"
                    }, null, 512), [
                      [Vue.vModelText, Vue.unref(message)]
                    ])
                  ]),
                  Vue.createElementVNode("div", _hoisted_15$1, [
                    Vue.createElementVNode("button", {
                      class: "w-50p h-6 bg-primary border text-white me-2",
                      type: "submit",
                      disabled: !meta.valid
                    }, " 送出 ", 8, _hoisted_16$1),
                    Vue.createElementVNode("button", {
                      class: "w-50p h-6 border",
                      type: "button",
                      onClick: resetForm
                    }, " 重設 ", 8, _hoisted_17$1)
                  ])
                ]),
                _: 1
              })
            ])
          ])
        ])
      ]);
    };
  }
};
const order = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const checkorder_vue_vue_type_style_index_0_scoped_7e83c5ca_lang = "";
const _withScopeId = (n) => (Vue.pushScopeId("data-v-7e83c5ca"), n = n(), Vue.popScopeId(), n);
const _hoisted_1$1 = { id: "check-order" };
const _hoisted_2$1 = { class: "container-xl p-4 fs-7" };
const _hoisted_3$1 = { class: "row justify-center" };
const _hoisted_4$1 = { class: "col-10 col-xl-4 mt-4 items-center" };
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ Vue.createElementVNode("h3", { class: "mb-4" }, "訂單資訊", -1));
const _hoisted_6 = { class: "mb-0 ps-2" };
const _hoisted_7 = { class: "mb-1" };
const _hoisted_8 = { class: "mb-1" };
const _hoisted_9 = { class: "mb-1" };
const _hoisted_10 = { class: "mb-1" };
const _hoisted_11 = { class: "mb-1" };
const _hoisted_12 = { class: "mb-1" };
const _hoisted_13 = { class: "modal-list ps-0 mb-0 h-14 overflow-scroll" };
const _hoisted_14 = { class: "w-10 h-11 overflow-hidden" };
const _hoisted_15 = ["src"];
const _hoisted_16 = { class: "d-flex flex-column ms-6 ps-0 grow-1 items-start justify-center" };
const _hoisted_17 = { class: "mb-2" };
const _hoisted_18 = { class: "mb-0" };
const _hoisted_19 = { class: "mb-0 me-4" };
const _hoisted_20 = { class: "mb-0" };
const _sfc_main$1 = {
  __name: "checkorder",
  setup(__props) {
    const cart2 = useCart();
    const route = VueRouter.useRoute();
    const router = VueRouter.useRouter();
    const data = Vue.reactive({
      order: {},
      user: {},
      products: []
    });
    const { products, user, order: order2 } = Vue.toRefs(data);
    const getOrder = async () => {
      try {
        const result = await getOrderApi(route.params.id);
        if (!result.data.success) {
          throw new Error("訂單有誤");
        }
        const { create_at, id, is_paid, total } = result.data.order;
        data.order = { create_at, id, is_paid, total };
        const { products: products2, user: user2 } = result.data.order;
        data.user = user2;
        data.products = Object.values(products2);
      } catch (error) {
        Swal.fire({
          position: "top-end",
          text: error,
          timer: 1500
        });
      }
    };
    const pay2 = async () => {
      try {
        await postPayApi(route.params.id);
        router.push({
          name: "pay"
        });
        cart2.getCart();
      } catch (error) {
        Swal.fire({
          position: "top-end",
          text: error,
          timer: 1500
        });
      }
    };
    const checkProducts = Vue.ref(null);
    const openModal = () => {
      if (checkProducts.value) {
        checkProducts.value.openModal();
      }
    };
    const closeModal = () => {
      if (checkProducts.value) {
        checkProducts.value.closeModal();
      }
    };
    Vue.onMounted(() => {
      getOrder();
    });
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("section", _hoisted_1$1, [
        Vue.createElementVNode("div", _hoisted_2$1, [
          Vue.createElementVNode("div", _hoisted_3$1, [
            Vue.createElementVNode("div", _hoisted_4$1, [
              _hoisted_5$1,
              Vue.createElementVNode("ul", _hoisted_6, [
                Vue.createElementVNode("li", _hoisted_7, "訂單編號： " + Vue.toDisplayString(Vue.unref(order2).id), 1),
                Vue.createElementVNode("li", _hoisted_8, "生效日期：" + Vue.toDisplayString(Vue.unref(order2).create_at), 1),
                Vue.createElementVNode("li", _hoisted_9, "姓名：" + Vue.toDisplayString(Vue.unref(user).name), 1),
                Vue.createElementVNode("li", _hoisted_10, "地址：" + Vue.toDisplayString(Vue.unref(user).address), 1),
                Vue.createElementVNode("li", _hoisted_11, "電話：" + Vue.toDisplayString(Vue.unref(user).tel), 1),
                Vue.createElementVNode("li", _hoisted_12, "總計： " + Vue.toDisplayString(Vue.unref(order2).total) + " 元", 1)
              ]),
              Vue.createElementVNode("div", { class: "mt-5 d-flex" }, [
                Vue.createElementVNode("button", {
                  class: "w-50p h-6 bg-primary border text-white me-2",
                  onClick: pay2
                }, " 確認付款 "),
                Vue.createElementVNode("button", {
                  class: "w-50p h-6 border",
                  onClick: openModal
                }, " 確認商品 ")
              ]),
              Vue.createVNode(Vue.unref(_sfc_main$6), {
                ref_key: "checkProducts",
                ref: checkProducts,
                modalTitle: "確認商品"
              }, {
                body: Vue.withCtx(() => [
                  Vue.createElementVNode("ul", _hoisted_13, [
                    (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(products), (item) => {
                      return Vue.openBlock(), Vue.createElementBlock("li", {
                        key: item,
                        class: "p-2 d-flex border border-bottom-0"
                      }, [
                        Vue.createElementVNode("div", _hoisted_14, [
                          Vue.createElementVNode("img", {
                            src: item.product.imagesUrl[0],
                            class: "d-block w-full h-full object-cover object-center"
                          }, null, 8, _hoisted_15)
                        ]),
                        Vue.createElementVNode("ul", _hoisted_16, [
                          Vue.createElementVNode("li", _hoisted_17, [
                            Vue.createElementVNode("h6", _hoisted_18, Vue.toDisplayString(item.product.title), 1)
                          ]),
                          Vue.createElementVNode("li", null, [
                            Vue.createElementVNode("span", _hoisted_19, "顏色-" + Vue.toDisplayString(item.color), 1),
                            Vue.createElementVNode("span", _hoisted_20, "尺寸-" + Vue.toDisplayString(item.size), 1)
                          ]),
                          Vue.createElementVNode("li", null, "數量： " + Vue.toDisplayString(item.qty), 1),
                          Vue.createElementVNode("li", null, "價格： " + Vue.toDisplayString(item.final_total) + " 元", 1)
                        ])
                      ]);
                    }), 128))
                  ])
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
        ])
      ]);
    };
  }
};
const checkorder = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7e83c5ca"]]);
const checkorder$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: checkorder
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {};
const _hoisted_1 = { id: "check-order" };
const _hoisted_2 = { class: "container-xl fs-7" };
const _hoisted_3 = { class: "row justify-center p-4" };
const _hoisted_4 = { class: "col-10 col-xl-4 items-center mt-8" };
const _hoisted_5 = /* @__PURE__ */ Vue.createElementVNode("h3", { class: "mb-6" }, "訂單完成", -1);
function _sfc_render(_ctx, _cache) {
  const _component_router_link = Vue.resolveComponent("router-link");
  return Vue.openBlock(), Vue.createElementBlock("section", _hoisted_1, [
    Vue.createElementVNode("div", _hoisted_2, [
      Vue.createElementVNode("div", _hoisted_3, [
        Vue.createElementVNode("div", _hoisted_4, [
          _hoisted_5,
          Vue.createVNode(_component_router_link, {
            class: "d-block p-2 bg-primary border text-white me-2 text-center",
            to: "/"
          }, {
            default: Vue.withCtx(() => [
              Vue.createTextVNode(" 繼續購物 ")
            ]),
            _: 1
          })
        ])
      ])
    ])
  ]);
}
const pay = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const pay$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pay
}, Symbol.toStringTag, { value: "Module" }));
export {
  CategoriesBar as C,
  Header as H,
  MySwiper as M,
  ThumbsSwiper as T,
  _sfc_main$5 as _,
  Marquee as a,
  _sfc_main$9 as b,
  getProductApi as c,
  _export_sfc as d,
  CountDown as e,
  _sfc_main$6 as f,
  getAllProductsApi as g,
  cart as h,
  index as i,
  checkorder$1 as j,
  order as o,
  pay$1 as p,
  useCart as u
};
