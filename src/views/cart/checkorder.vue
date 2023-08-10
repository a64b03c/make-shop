<template>
  <section id="check-order">
    <div class="container-xl p-4 fs-7">
      <div class="row justify-center">
        <div class="col-10 col-xl-4 mt-4 items-center">
          <h3 class="mb-4">訂單資訊</h3>
          <ul class="mb-0 ps-2">
            <li class="mb-1">訂單編號： {{ order.id }}</li>
            <li class="mb-1">生效日期：{{ order.create_at }}</li>
            <li class="mb-1">姓名：{{ user.name }}</li>
            <li class="mb-1">地址：{{ user.address }}</li>
            <li class="mb-1">電話：{{ user.tel }}</li>
            <li class="mb-1">總計： {{ order.total }} 元</li>
          </ul>

          <div class="mt-5 d-flex">
            <button
              class="w-50p h-6 bg-primary border text-white me-2"
              @click="pay"
            >
              確認付款
            </button>
            <button class="w-50p h-6 border" @click="openModal">
              確認商品
            </button>
          </div>

          <Modal ref="checkProducts" modalTitle="確認商品">
            <template #body>
              <ul class="modal-list ps-0 mb-0 h-14 overflow-scroll">
                <li
                  v-for="item in products"
                  :key="item"
                  class="p-2 d-flex border border-bottom-0"
                >
                  <div class="w-10 h-11 overflow-hidden">
                    <img
                      :src="item.product.imagesUrl[0]"
                      class="d-block w-full h-full object-cover object-center"
                    />
                  </div>
                  <ul
                    class="d-flex flex-column ms-6 ps-0 grow-1 items-start justify-center"
                  >
                    <li class="mb-2">
                      <h6 class="mb-0">
                        {{ item.product.title }}
                      </h6>
                    </li>
                    <li>
                      <span class="mb-0 me-4">顏色-{{ item.color }}</span>
                      <span class="mb-0">尺寸-{{ item.size }}</span>
                    </li>
                    <li>數量： {{ item.qty }}</li>
                    <li>價格： {{ item.final_total }} 元</li>
                  </ul>
                </li>
              </ul>
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, toRefs } from "vue";
import { getOrderApi, postPayApi } from "@/api/carts.js";
import { useRoute, useRouter } from "vue-router";
import { Modal } from "@/components";
import useCart from "@/store/modules/cartStore.js";
import Swal from "sweetalert2";

const cart = useCart();

const route = useRoute();
const router = useRouter();
const data = reactive({
  order: {},
  user: {},
  products: [],
});
const { products, user, order } = toRefs(data);

const getOrder = async () => {
  try {
    const result = await getOrderApi(route.params.id);
    if (!result.data.success) {
      throw new Error("訂單有誤");
    }
    const { create_at, id, is_paid, total } = result.data.order;
    data.order = { create_at, id, is_paid, total };
    const { products, user } = result.data.order;
    data.user = user;
    data.products = Object.values(products);
  } catch (error) {
    Swal.fire({
      position: "top-end",
      text: error,
      timer: 1500,
    });
  }
};

const pay = async () => {
  try {
    await postPayApi(route.params.id);
    router.push({
      name: "pay",
    });
    cart.getCart();
  } catch (error) {
    Swal.fire({
      position: "top-end",
      text: error,
      timer: 1500,
    });
  }
};

const checkProducts = ref(null);

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

onMounted(() => {
  getOrder();
});
</script>

<style lang="scss" scoped>
.modal-list > li:last-of-type {
  border-bottom: 1px solid black !important;
}
</style>
