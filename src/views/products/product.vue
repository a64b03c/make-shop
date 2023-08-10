<template>
  <section id="product" class="mb-10">
    <div class="container-xl fs-7">
      <div class="row">
        <div class="col-xl-8 border-start-xl border-end-xl">
          <template v-if="isLoading">
            <div class="h-15 h-sm-17 p-4 d-flex">
              <div class="w-80px me-3" v-if="!isPhone">
                <div
                  class="load w-80px h-14p mb-3"
                  v-for="i in 4"
                  :key="i"
                ></div>
              </div>
              <div class="load w-full h-full"></div>
            </div>
          </template>

          <template v-if="!isLoading">
            <ThumbsSwiper :imagesUrl="product.imagesUrl">
              <template #thumbItem="{ swiperItem }">
                <img :src="swiperItem" />
              </template>
              <template #mainItem="{ swiperItem }">
                <img :src="swiperItem" class="ms-0 w-sm-550px h-full h-sm-17" />
              </template>
            </ThumbsSwiper>
          </template>

          <div class="col-xl-4 border-top" v-if="!isPc">
            <div class="check border-end-xl p-4 mb-n">
              <h1 class="mb-2 fs-3">{{ product.title }}</h1>
              <span class="px-3 py-1 bg-dark text-light">
                {{ product.category }}
              </span>
              <p class="fs-3 mt-5 mb-0 fw-bolder lh-1">
                NT$&nbsp;{{ product.price }}
              </p>
              <!-- 折價 -->
              <div
                class="d-flex items-center mt-1"
                v-if="product.discount && product.discount !== 0"
              >
                <p class="fs-6 mb-0 text-primary">
                  <span class="td-line-through pe-6">
                    NT$&nbsp;{{ product.origin_price }}
                  </span>

                  <span class="px-2 fs-7 py-1 bg-danger text-white">
                    -{{ product.discount }}%
                  </span>
                </p>
              </div>
              <!-- 顏色 -->
              <div class="mb-4">
                <h5 class="mt-5 mb-0 fs-6 fw-bolder">顏色</h5>
                <div class="mt-2 d-flex">
                  <button
                    v-for="color in product.colors"
                    :key="color"
                    class="border me-3 w-8 h-6 p-0"
                    :class="{ active: order.color === color }"
                    @click="order.color = color"
                  >
                    {{ color }}
                  </button>
                </div>
              </div>
              <!-- 尺寸 -->
              <div class="mb-4">
                <h5 class="mb-2 fs-6 fw-bolder">尺寸</h5>
                <div class="d-flex flex-wrap">
                  <button
                    v-for="size in product.sizes"
                    :key="size"
                    class="border me-3 w-8 h-6 p-0"
                    :class="{ active: order.size === size }"
                    @click="order.size = size"
                  >
                    {{ size }}
                  </button>
                </div>
              </div>
              <!-- 數量 -->
              <div class="mb-6">
                <h5 class="mb-4 fs-6 fw-bolder">數量</h5>
                <NumberInput
                  :integerOnly="true"
                  :value="order.qty"
                  :max="10"
                  @input="
                    (val) => {
                      order.qty = val;
                    }
                  "
                />
              </div>
              <div class="mb-4">
                <LoadBtn
                  class="add-cart w-full m-0 tracking-wider bg-black text-white py-2"
                  @btnclick="cart.addCart(order)"
                  :disabled="!isdisable"
                >
                  加入購物車
                </LoadBtn>
              </div>
            </div>
          </div>

          <!-- 固定資料 商品描述 -->
          <div class="p-4 border-top">
            <h4 class="tracking-wider mb-3">商品描述</h4>
            <ul class="list-decimal mb-3 ps-5">
              <li
                class="pb-1"
                v-for="(item, index) in productInfo"
                :key="index"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <!-- 固定資料 洗滌說明 -->
          <div class="border-top border-bottom-xl p-4">
            <h4 class="tracking-wider mb-3">洗滌說明</h4>
            <ul class="list-decimal mb-3 ps-5">
              <li class="pb-1" v-for="(item, index) in washInfo" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <!-- check -->
        <div class="col-xl-4 border-end-xl" v-if="isPc">
          <div class="check border-bottom p-4">
            <h1 class="mb-2 fs-3">{{ product.title }}</h1>
            <span class="px-3 py-1 bg-dark text-light">
              {{ product.category }}
            </span>
            <p class="fs-3 mt-5 mb-0 fw-bolder lh-1">
              NT$&nbsp;{{ product.price }}
            </p>
            <!-- 折價 -->
            <div
              class="d-flex items-center mt-1"
              v-if="product.discount && product.discount !== 0"
            >
              <p class="fs-6 mb-0 text-primary">
                <span class="td-line-through pe-6">
                  NT$&nbsp;{{ product.origin_price }}
                </span>

                <span class="px-2 fs-7 py-1 bg-danger text-white">
                  -{{ product.discount }}%
                </span>
              </p>
            </div>
            <!-- 顏色 -->
            <div class="mb-4">
              <h5 class="mt-5 mb-0 fs-6 fw-bolder">顏色</h5>
              <div class="mt-2 d-flex">
                <button
                  v-for="color in product.colors"
                  :key="color"
                  class="border me-3 w-8 h-6 p-0"
                  :class="{ active: order.color === color }"
                  @click="order.color = color"
                >
                  {{ color }}
                </button>
              </div>
            </div>
            <!-- 尺寸 -->
            <div class="mb-4">
              <h5 class="mb-2 fs-6 fw-bolder">尺寸</h5>
              <div class="d-flex flex-wrap">
                <button
                  v-for="size in product.sizes"
                  :key="size"
                  class="border me-3 w-8 h-6 p-0"
                  :class="{ active: order.size === size }"
                  @click="order.size = size"
                >
                  {{ size }}
                </button>
              </div>
            </div>
            <!-- 數量 -->
            <div class="mb-6">
              <h5 class="mb-4 fs-6 fw-bolder">數量</h5>
              <NumberInput
                :integerOnly="true"
                :value="order.qty"
                :max="10"
                @input="
                  (val) => {
                    order.qty = val;
                  }
                "
              />
            </div>
            <div class="mb-4">
              <LoadBtn
                class="add-cart w-full m-0 tracking-wider bg-black text-white py-2"
                @btnclick="cart.addCart(order)"
                :disabled="!isdisable"
              >
                加入購物車
              </LoadBtn>
            </div>
          </div>
        </div>
        <div class="hot col-12 p-4 border-xl border-top mt-xl-n">
          <h4 class="mb-3 tracking-wider">熱銷推薦</h4>
          <div class="border-top border-bottom bg-light">
            <div
              class="load w-full h-15 border-start border-end"
              v-if="isLoading"
            ></div>

            <MySwiper
              :data="hotProducts"
              :breakpoints="{
                576: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }"
            >
              <template #body="{ swiperItem }">
                <div class="w-full h-15 overflow-hidden position-relative">
                  <p
                    class="position-absolute bottom-0 ms-n mb-n px-2 h-7 bg-white border w-12 d-flex items-center justify-center"
                  >
                    <span class="d-block fw-medium">
                      {{ swiperItem.title }}
                    </span>
                  </p>
                  <router-link
                    :to="{ name: 'product', params: { id: swiperItem.id } }"
                  >
                    <img :src="swiperItem.imagesUrl[0]" class="d-block" />
                  </router-link>
                </div>
              </template>
            </MySwiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive, onMounted, toRefs, watch } from "vue";
import { NumberInput, ThumbsSwiper, MySwiper } from "@/components";
import { useRoute } from "vue-router";
import { getProductApi, getAllProductsApi } from "@/api/products.js";
import useCart from "@/store/modules/cartStore.js";
import { productInfo, washInfo } from "@/docs/index.js";
import { useCheckMedia } from "@/composables/useCheckMedia";
import Swal from "sweetalert2";

const { isPc, isPhone } = useCheckMedia();

const data = reactive({
  isLoading: true,
  product: {},
  hotProducts: [],
});

const { isLoading, product, hotProducts } = toRefs(data);
const route = useRoute();

const order = reactive({
  product_id: route.params.id,
  qty: 0,
  size: "",
  color: "",
});

const isdisable = computed(
  () => order.qty !== 0 && order.size !== "" && order.color !== "",
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
      timer: 1500,
    });
  } finally {
    data.isLoading = false;
  }
};

const cart = useCart();

onMounted(() => {
  getProduct();
});

watch(
  () => route.params.id,
  () => {
    if (route.params.id) {
      getProduct();
    }
  },
);
</script>

<style lang="scss">
button.active {
  background: #000;
  color: #fff;
  border: 1px solid #000 !important;
}

.add-cart[disabled] {
  opacity: 0.2;
}
.check {
  @media (min-width: 1200px) {
    position: sticky;
    top: 60px;
  }
}
</style>
