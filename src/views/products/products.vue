<template>
  <!-- 搜尋功能 -->
  <section id="filtterbar" class="fs-7">
    <div class="container-xl border-bottom border-start-xl border-end-xl">
      <ul class="mb-0 ps-0 d-flex items-center">
        <li class="sort border-end">
          <a
            href="#"
            class="d-block text-primary px-5 py-4 tracking-wide"
            @click.prevent
          >
            排序
          </a>
          <ul class="w-11 bg-white p-0 border">
            <li class="p-2" v-for="item in sorts" :key="item.title">
              <router-link
                :to="{
                  path: '/products',
                  query: { category: route.query.category, sort: item.sort },
                }"
              >
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
  <!-- 產品卡片 -->
  <section id="products" class="fs-7 pb-10">
    <div class="container-xl">
      <div class="cards row">
        <template v-if="isLoading">
          <div
            class="card-wrap col-sm-6 col-lg-4 col-xl-3"
            v-for="item in 8"
            :key="item"
          >
            <div class="h-70p load"></div>
            <div class="h-30p d-flex flex-column justify-between">
              <div class="mt-4">
                <div class="w-75p h-4 load"></div>
                <div class="w-25p h-4 load mt-4"></div>
              </div>
              <div class="mt-4 w-full h-6 load"></div>
            </div>
          </div>
        </template>

        <template v-if="!isLoading">
          <div
            class="card-wrap col-sm-6 col-lg-4 col-xl-3"
            v-for="item in products"
            :key="item.title"
          >
            <Card :product="item"></Card>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, onMounted, toRefs, watch } from "vue";
import { Card } from "@/components";
import { useRoute } from "vue-router";
import { getAllProductsApi } from "@/api/products.js";
import Swal from "sweetalert2";

const data = reactive({
  isLoading: true,
  products: [],
});

const { isLoading, products } = toRefs(data);
const sorts = [
  { title: "價格由高至低", sort: "high" },
  { title: "價格由低至高", sort: "short" },
  { title: "最新到貨", sort: "new" },
];

// 資料取得
const route = useRoute();
const getProducts = async () => {
  data.isLoading = true;
  try {
    const result = await getAllProductsApi();

    if (!result.data.success) {
      throw new Error("加載失敗");
    }
    // 所有資料
    const { products: allProducts } = result.data;
    // 篩選類別
    if (route.query.category !== "全部商品") {
      data.products = allProducts.filter((item) => {
        return item.category === route.query.category;
      });
    } else {
      data.products = allProducts;
    }
    // 價格由高至低
    if (route.query.sort === "high") {
      data.products.sort((a, b) => b.price - a.price);
    }
    // 價格由低至高
    if (route.query.sort === "short") {
      data.products.sort((a, b) => a.price - b.price);
    }
    // 最新排序
    if (route.query.sort === "new") {
      data.products.reverse();
    }
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

watch(
  route,
  () => {
    getProducts();
  },
  {
    deep: true,
  },
);

onMounted(() => {
  getProducts();
});
</script>

<style lang="scss">
.card-wrap {
  height: 500px;
  padding: 1rem;
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  @media (min-width: 1200px) {
    &:nth-child(4n + 1) {
      border-left: 1px solid var(--border-color);
    }
  }
  @media (max-width: 1200px) and (min-width: 992px) {
    &:nth-child(3n) {
      border-right: 0px solid var(--border-color);
    }
  }
  @media (max-width: 992px) and (min-width: 576px) {
    height: 550px;
    &:nth-child(2n) {
      border-right: 0px solid var(--border-color);
    }
  }
  @media (max-width: 576px) {
    height: 550px;
    border-right: 0px solid var(--border-color);
  }
}

.sort {
  position: relative;

  & ul {
    position: absolute;
    z-index: 2;
    top: 100%;
    left: 0;
    display: none;
  }

  &:hover ul {
    display: block;
    background-color: var(--primary);
    color: #fff;

    li:hover {
      background-color: var(--primary);
      a {
        color: #fff;
      }
    }
  }
}
</style>
