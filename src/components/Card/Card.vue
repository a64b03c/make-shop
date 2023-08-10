<template>
  <div class="card w-full h-full">
    <router-link
      class="d-block h-70p overflow-hidden"
      :to="{ name: 'product', params: { id: product.id } }"
    >
      <img
        class="d-block w-full h-full object-cover object-center"
        :src="product.imagesUrl[0]"
      />
    </router-link>
    <div class="h-30p d-flex flex-column justify-between">
      <div class="mt-4">
        <div class="d-flex products-start justify-between">
          <router-link
            :to="{ name: 'product', params: { id: product.id } }"
            class="d-block text-dark"
          >
            <h3 class="mb-2 fs-6 fw-medium tracking-wide">
              {{ product.title }}
            </h3>
          </router-link>
          <router-link
            :to="{
              path: '/products',
              query: { category: product.category },
            }"
            class="d-block flex-shrink-0"
          >
            <span class="d-block mb-0 px-2 py-0 bg-dark text-white">
              {{ product.category }}
            </span>
          </router-link>
        </div>
        <p class="fs-4 mb-0 fw-bolder me-0 lh-1">
          <span class="fs-6">NT$</span>
          {{ product.price }}
        </p>
        <!-- 限時折扣 -->
        <div
          class="d-flex products-center justify-between mb-0 mt-1"
          v-if="product.discount !== 0"
        >
          <p class="fs-6 mb-0 text-primary lh-1">
            <span class="td-line-through">
              NT$&nbsp; {{ product.origin_price }}
            </span>
          </p>
          <span class="d-block mb-0 px-2 py-0 me-0 bg-danger text-white">
            -{{ product.discount }}%
          </span>
        </div>
      </div>
      <!-- 按鈕選項 -->
      <LoadBtn
        class="w-full m-0 tracking-wider bg-black text-white py-2"
        @btnclick="cart.addFavorite(product.id)"
      >
        加入我的最愛
      </LoadBtn>
    </div>
  </div>
</template>

<script setup>
import useCart from "@/store/modules/cartStore.js";
defineProps({
  product: {
    type: Object,
  },
});
const cart = useCart();
</script>
