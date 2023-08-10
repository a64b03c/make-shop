<template>
  <div class="d-flex p-4">
    <swiper
      v-if="!isphone"
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      :slidesPerView="7"
      direction="vertical"
      :freeMode="false"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(item, index) in imagesUrl" :key="index">
        <slot name="thumbItem" :swiperItem="item"></slot>
      </swiper-slide>
    </swiper>

    <swiper
      :style="{
        '--swiper-pagination-color': '#fff',
      }"
      :initialSlide="0"
      :spaceBetween="16"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2"
    >
      <swiper-slide
        v-for="(item, index) in imagesUrl"
        :key="index"
        class="bg-light"
      >
        <slot name="mainItem" :swiperItem="item"></slot>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";
import { ref, watch, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

defineProps({
  imagesUrl: Array,
});

const modules = [FreeMode, Navigation, Thumbs];

const thumbsSwiper = ref(null);
const windowWidth = ref(window.innerWidth);
const isphone = computed(() => windowWidth.value < 576);
const { width } = useWindowSize();

watch(
  () => width.value,
  () => {
    windowWidth.value = width.value;
  },
);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
</script>

<style lang="scss" scoped>
$thumbwidth: 80px;

.mySwiper {
  width: $thumbwidth;
  height: auto;

  box-sizing: border-box;
  & .swiper-slide {
    opacity: 0.4;
  }

  & .swiper-slide-thumb-active {
    opacity: 1;
  }
}

.mySwiper2 {
  width: calc(100% - $thumbwidth);
  margin-left: 10px;
  height: 100%;
  @media (max-width: 576px) {
    width: 100%;
    margin-left: 0;
  }
}
</style>
