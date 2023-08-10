<template>
  <Header id="header" class="border-bottom" />
  <main class="mt-8">
    <!-- 主要 banner -->
    <section id="banner">
      <div class="container-xl">
        <MySwiper
          :data="imgUrls"
          :breakpoints="{
            576: {
              slidesPerView: 2,
            },
          }"
        >
          <template #body="{ swiperItem }">
            <div
              class="w-full h-400 h-lg-600 overflow-hidden position-relative"
            >
              <img :src="swiperItem" class="d-block" />
            </div>
          </template>
        </MySwiper>
      </div>
    </section>
    <!-- 類別Bar -->
    <aside id="categories-bar">
      <div class="container-xl">
        <CategoriesBar />
      </div>
    </aside>
    <!-- 跑馬燈 -->
    <section id="marquee">
      <Marquee />
    </section>

    <section id="content" class="mb-10 fs-7">
      <div class="container-xl">
        <div class="row">
          <div
            class="col-xl-4 border-start-xl border-end-xl order-3 order-xl-1"
          >
            <!-- 物流資訊 -->
            <div class="border-bottom p-4">
              <h4 class="tracking-wide mb-3">物流資訊</h4>
              <ul class="list-disc mb-3 ps-5">
                <li v-for="(item, index) in logisticsInfo" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
            <!-- 優惠券 -->
            <div class="p-4 border-bottom border-bottom-xl-0">
              <h4 class="tracking-wide mb-3">領取本月優惠券代碼</h4>
              <p class="fs-4 py-1 bg-light text-center mb-3">
                {{ couponCode }}
              </p>
              <LoadBtn
                class="w-full h-6 fs-6 m-0 tracking-wider bg-black text-light mb-5"
                @btnclick="copy(couponCode)"
              >
                複製代碼
              </LoadBtn>

              <h6 class="mb-3">注意事項：</h6>
              <ul class="list-disc ps-5 mb-3">
                <li v-for="(item, index) in couponInfo" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <!-- 最新商品 -->
          <div
            class="col-xl-4 border-end-xl p-4 border-bottom border-bottom-xl-0 order-1 order-xl-2"
          >
            <h4 class="mb-3 tracking-wider">新品上架</h4>
            <div class="border-top border-bottom bg-light mb-3">
              <div
                class="load w-full h-15 border-start border-end"
                v-if="isLoading"
              ></div>

              <MySwiper :data="newProducts" v-if="!isLoading">
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
            <p class="mb-3">
              帶平常穿的尺寸就可以囉 平常穿S就帶S 平常穿M就帶M
              兩個尺寸間可以帶小一號 SM之間帶S，ML之間帶M，以此類推
            </p>
            <a class="d-block mb-3">查看更多</a>
          </div>

          <div class="col-xl-4 d-flex flex-column order-2 border-end-xl">
            <div class="border-bottom d-flex justify-center items-center">
              <SvgIcon name="flash" width="28px" height="28px" class="me-2" />
              <CountDown></CountDown>
            </div>
            <!-- banner -->
            <div class="p-4">
              <div class="border-top border-bottom bg-light">
                <div
                  class="load w-full h-15 border-start border-end"
                  v-if="isLoading"
                ></div>

                <MySwiper :data="discountProducts">
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

            <div
              class="border-top border-bottom border-bottom-xl-0 d-flex grow-1"
            >
              <div
                class="w-50p fw-bolder tracking-wider d-flex flex-column items-center justify-center"
              >
                <h3 class="m-0 py-2">限時優惠</h3>
              </div>
              <!-- 折扣 -->
              <div
                class="w-50p bg-black text-white d-flex justify-center items-center fs-2 py-2 fw-bolder"
              >
                -30%
              </div>
            </div>
          </div>
        </div>

        <div class="border-bottom border-xl p-4">
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
      <Modal ref="statement" modalTitle="本站聲明">
        <template #body>
          <p>
            本網站為作業用模擬電商成品並無商業用途，若是對網站借用圖片商品有興趣可以轉址至
            <a
              href="https://brandavenue.rakuten.co.jp/ladies/?l-id=brn_head_logo"
              class="fs-5 td-underline fw-bolder"
            >
              RakutenFashion
            </a>
          </p>
        </template>
        <template #footer>
          <button
            class="w-full h-6 bg-primary border text-white me-2"
            @click="closeModal"
          >
            確認
          </button>
        </template>
      </Modal>
    </section>
  </main>
</template>

<script setup>
import {
  CategoriesBar,
  Marquee,
  CountDown,
  MySwiper,
  Header,
  Modal,
} from "@/components";
import { logisticsInfo, couponInfo } from "@/docs";
import { ref, reactive, onMounted, toRefs, computed, provide } from "vue";
import { useClipboard } from "@vueuse/core";
import { getAllProductsApi } from "@/api/products.js";
import Swal from "sweetalert2";

const couponCode = ref("good");
const { copy } = useClipboard({ couponCode });

const data = reactive({
  isLoading: true,
  discountProducts: [],
  hotProducts: [],
  newProducts: [],
});

const { isLoading, newProducts, discountProducts, hotProducts } = toRefs(data);
provide("hotProducts", hotProducts);

const getProducts = async () => {
  data.isLoading = true;
  try {
    const result = await getAllProductsApi();
    if (!result.data.success) {
      throw new Error("加載失敗");
    }
    // 所有資料
    const { products: allProducts } = result.data;

    // 限時優惠
    data.discountProducts = allProducts
      .filter((item) => {
        return item.discount !== 0;
      })
      .splice(0, 12);
    // 熱銷推薦
    data.hotProducts = allProducts.slice(0, 12);
    //  新品上架
    data.newProducts = allProducts.reverse().slice(0, 12);
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

const getImgUrls = (name) => {
  return new URL(`../assets/imgs/${name}.jpg`, import.meta.url).href;
};

const imgUrls = [
  getImgUrls("1040_1820_1"),
  getImgUrls("1040_1820_2"),
  getImgUrls("1040_1820_3"),
  getImgUrls("1040_1820_4"),
  getImgUrls("1040_1820_5"),
  getImgUrls("1040_1820_6"),
];

const statement = ref(null);

const closeModal = () => {
  if (statement.value) {
    statement.value.closeModal();
  }
};

onMounted(() => {
  statement.value.openModal();
  getProducts();
});
</script>
