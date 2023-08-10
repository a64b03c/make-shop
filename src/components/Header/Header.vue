<template>
  <header
    class="border-bottom position-fixed top-0 start-0 end-0 z-999 bg-white"
  >
    <nav class="m-0 fs-7">
      <div class="container-xl d-flex justify-between">
        <h1
          class="logo ms-2 ms-xl-0 mb-0 fw-bold h-8 d-flex items-center justify-center"
        >
          <router-link class="d-block text-dark" to="/">Shop</router-link>
        </h1>

        <ul
          class="d-flex m-0 ps-0 items-center justify-center position-relative"
        >
          <li>
            <a
              class="favorite-link d-block w-7 h-8 text-dark d-flex items-center justify-center"
              @click.prevent
              v-drown
            >
              <div class="position-relative">
                <SvgIcon name="favorite" width="28px" height="28px" />
                <span
                  v-if="favoriteData.length !== 0"
                  class="num text-center text-white bg-danger rounded-circle"
                >
                  {{ favoriteData.length }}
                </span>
              </div>
              <!-- 下拉選單 -->
              <ul class="list p-4">
                <li
                  class="d-flex items-center p-3 border border-top-0 justify-between"
                  v-for="(item, index) in favoriteData"
                  :key="item"
                >
                  <div class="w-8 overflow-hidden">
                    <router-link
                      :to="{ name: 'product', params: { id: item.id } }"
                    >
                      <img
                        :src="item.imagesUrl[0]"
                        class="d-block w-full h-full object-cover object-center"
                      />
                    </router-link>
                  </div>
                  <div class="p-4 d-flex flex-column justify-start grow-1">
                    <h6 class="mb-0">{{ item.title }}</h6>
                    <p class="mb-0">價格：{{ item.origin_price }} 元</p>
                  </div>
                  <LoadBtn
                    class="bg-dark text-white h-6 w-8 p-0"
                    @btnclick="deleteFavorite(index)"
                  >
                    刪除
                  </LoadBtn>
                </li>
                <div v-if="favoriteData.length === 0" class="fs-5 text-center">
                  我的最愛已清空
                </div>
              </ul>
            </a>
          </li>
          <li>
            <router-link
              class="d-block w-7 h-8 text-dark d-flex items-center justify-center"
              :to="'/cart'"
            >
              <div class="position-relative">
                <SvgIcon name="cart" width="28px" height="28px" />
                <span
                  v-if="carts.length !== 0"
                  class="num text-center text-white bg-danger rounded-circle"
                >
                  {{ carts.length }}
                </span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { onMounted } from "vue";
import useCart from "@/store/modules/cartStore.js";
import { storeToRefs } from "pinia";

const cart = useCart();
const { favoriteData, carts } = storeToRefs(cart);
const deleteFavorite = (index) => {
  cart.deleteFavorite(index);
};

onMounted(() => {
  cart.getFavorite();
  cart.getCart();
});
</script>

<style lang="scss" scoped>
.favorite-link {
  .list {
    display: none;
    width: 500px;
    max-height: 400px;
    min-height: 100px;
    overflow: scroll;
    position: absolute;
    border: 1px solid black;
    right: 0;
    bottom: 0;
    transform: translateY(100%);
    background-color: #fff;
    overscroll-behavior: contain;
    @media (max-width: 576px) {
      width: 100vw;
      border-left: 0px;
      border-right: 0px;
    }

    & > li:first-of-type {
      border-top: 1px solid black !important;
    }
  }

  &.active {
    .list {
      display: block;
    }
  }
}

.num {
  position: absolute;
  width: 18px;
  height: 18px;
  font-size: 12px;
  top: 0;
  right: 0;
  transform: translate(8px, -6px);
}
</style>
