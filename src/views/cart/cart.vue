<template>
  <section id="cart" class="position-relactive">
    <div class="container-xl fs-7 mb-12">
      <div class="orderlist">
        <ul class="mb-0 ps-0">
          <!-- 購物車列表 -->
          <li
            class="p-2 border-start-xl border-end-xl border-bottom"
            v-for="item in carts"
            :key="item"
          >
            <div class="row items-center">
              <div class="col-auto">
                <router-link
                  class="d-block w-10 h-11 overflow-hidden"
                  :to="{ name: 'product', params: { id: item.product_id } }"
                >
                  <img
                    :src="item.product.imagesUrl[0]"
                    class="d-block w-full h-full object-cover object-center"
                  />
                </router-link>
              </div>
              <div class="col-6 col-sm-6 ms-6">
                <h6>{{ item.product.title }}</h6>
                <span class="mb-0 me-4">顏色-{{ item.color }}</span>
                <span class="mb-0">尺寸-{{ item.size }}</span>
              </div>

              <!-- 資訊 -->
              <div
                class="col-12 col-xl-3 d-flex justify-between mt-2 mt-xl-0 ms-xl-auto"
              >
                <div class="w-75p me-4">
                  <NumberInput
                    :integerOnly="true"
                    :value="item.qty"
                    :min="1"
                    :max="10"
                    @input="updateCart($event, item.product_id, item.id)"
                  ></NumberInput>
                </div>
                <button
                  class="w-25p me-sm-4 h-6 text-center border"
                  @click="cart.deleteCart(item.id)"
                >
                  刪除
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 結帳 -->
    <div
      class="checkout container-xl p-4 border-xl border-bottom-xl-0 border-top bg-white d-flex flex-column justify-between"
    >
      <div class="d-flex justify-between items-center mb-2">
        <h5 class="mb-0">共計{{ carts.length }}件商品</h5>
        <p class="fs-3 mb-0">NT {{ total }} 元</p>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6 d-flex mb-2 mb-sm-0">
          <input type="text" class="ps-2 me-4" v-model="couponCode" />
          <LoadBtn
            class="d-block w-12 m-0 tracking-wider bg-primary text-white"
            @btnclick="postCoupon"
            :disabled="couponCode === ''"
          >
            套用優惠券
          </LoadBtn>
        </div>
        <LoadBtn
          class="col-12 col-sm-6 d-block w-full w-sm-12 m-0 tracking-wider bg-primary text-white ms-auto"
          @btnclick="checkOut"
          :disabled="carts.length === 0"
        >
          前往結帳
        </LoadBtn>
      </div>
    </div>
  </section>
</template>

<script setup>
import { NumberInput } from "@/components";
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import useCart from "@/store/modules/cartStore.js";
import { useRouter } from "vue-router";
import { postCouponApi } from "@/api/carts.js";
import Swal from "sweetalert2";

const cart = useCart();
const { carts, total } = storeToRefs(cart);
const couponCode = ref("");
const postCoupon = async () => {
  try {
    await postCouponApi(couponCode.value);
    cart.getCart();
  } catch (error) {
    Swal.fire({
      position: "top-end",
      text: error,
      timer: 1500,
    });
  }
};

const router = useRouter();
const checkOut = () => {
  router.push("/cart/order");
};

const updateCart = (val, product_id, id) => {
  const data = { product_id, qty: val };
  cart.updateCart(data, id);
};

onMounted(() => {
  cart.getCart();
});
</script>

<style lang="scss">
.checkout {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
