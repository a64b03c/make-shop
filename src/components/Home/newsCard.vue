<template>
  <div class="news-card">
    <div class="new-content">
      <slot></slot>
    </div>
    <div class="news-img-mask">
      <img :src="imgUrl" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const imgUrl = ref("https://fakeimg.pl/350/");
</script>

<style lang="scss" scoped>
.news-card {
  height: 150px;
  background-color: transparent;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #eee;
  .new-content {
    padding-left: 36px;
    width: 200px;
  }
  .news-img-mask {
    position: absolute;
    width: 150px;
    height: 100%;
    right: 0;
    top: 0;
    clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
    margin-right: -2px;
  }
}
</style>
