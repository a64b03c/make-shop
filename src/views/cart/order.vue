<template>
  <section id="order">
    <div class="container-xl p-4 fs-7">
      <div class="row justify-center">
        <div class="col-10 col-xl-4 items-center mt-4">
          <VForm v-slot="{ meta, resetForm }" @submit="postOrder">
            <!-- 用戶名 -->
            <div class="mb-4">
              <label for="name" class="d-block mb-2">用戶名</label>
              <VField name="姓名" rules="required" v-slot="{ field }">
                <input
                  v-bind="field"
                  class="w-full"
                  id="name"
                  type="text"
                  v-model="user.name"
                />
              </VField>
              <ErrorMessage
                name="姓名"
                class="d-block text-danger mt-1"
              ></ErrorMessage>
            </div>

            <!-- E-mail -->
            <div class="mb-4">
              <label for="email" class="d-block mb-2">E-mail</label>
              <VField name="E-mail" rules="required|email" v-slot="{ field }">
                <input
                  v-bind="field"
                  class="w-full"
                  id="email"
                  type="email"
                  v-model="user.email"
                />
              </VField>
              <ErrorMessage
                name="E-mail"
                class="d-block text-danger mt-1"
              ></ErrorMessage>
            </div>

            <!-- 電話 -->
            <div class="mb-4">
              <label for="tel" class="d-block mb-2">電話</label>
              <VField name="電話" :rules="isPhone" v-slot="{ field }">
                <input
                  v-bind="field"
                  class="w-full"
                  id="tel"
                  type="text"
                  v-model="user.tel"
                />
              </VField>
              <ErrorMessage
                name="電話"
                class="d-block text-danger mt-1"
              ></ErrorMessage>
            </div>

            <!-- 地址 -->
            <div class="mb-4">
              <label for="address" class="d-block mb-2">地址</label>
              <VField name="地址" rules="required" v-slot="{ field }">
                <input
                  v-bind="field"
                  class="w-full"
                  id="address"
                  type="text"
                  v-model="user.address"
                />
              </VField>
              <ErrorMessage
                name="地址"
                class="d-block text-danger mt-1"
              ></ErrorMessage>
            </div>

            <!-- 訊息留言 -->
            <div class="mb-6">
              <label for="message" class="d-block mb-2">訊息留言</label>
              <input
                type="text"
                id="message"
                v-model="message"
                class="d w-full h-8"
              />
            </div>

            <div class="d-flex">
              <button
                class="w-50p h-6 bg-primary border text-white me-2"
                type="submit"
                :disabled="!meta.valid"
              >
                送出
              </button>
              <button class="w-50p h-6 border" type="button" @click="resetForm">
                重設
              </button>
            </div>
          </VForm>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, toRefs } from "vue";
import { postOrderApi } from "@/api/carts.js";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

const order = reactive({
  user: {},
  message: "",
});

const { user, message } = toRefs(order);

const router = useRouter();

const isPhone = (value) => {
  const phoneNumber = /^(09)[0-9]{8}$/;
  return phoneNumber.test(value) ? true : "請輸入正確的電話號碼";
};

const postOrder = async () => {
  try {
    const result = await postOrderApi(order);
    router.push({
      name: "checkorder",
      params: {
        id: result.data.orderId,
      },
    });
  } catch (error) {
    Swal.fire({
      position: "top-end",
      text: error,
      timer: 1500,
    });
  }
};
</script>
