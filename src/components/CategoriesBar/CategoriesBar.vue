<template>
  <nav
    class="categories fs-4 fw-bolder border-start-xl border-end-xl border-bottom-0 border-top"
  >
    <ul class="p-0 m-0 row">
      <li
        v-for="item in categories"
        :key="item"
        class="col-sm-2 m-0 border-end-sm border-bottom border-bottom-sm-0"
      >
        <router-link
          class="d-flex justify-around items-center d-block w-full h-8 h-sm-10 text-dark tracking-widest"
          :to="{ path: '/products', query: { category: item } }"
        >
          {{ item }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const categories = ["全部商品", "上衣", "洋裝", "褲子", "裙子", "外著"];
</script>

<style lang="scss" scoped>
.categories li:last-of-type {
  border-right: 0px !important;
}
</style>
