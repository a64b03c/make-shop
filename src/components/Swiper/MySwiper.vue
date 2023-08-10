<template>
  <Swiper
    :slidesPerView="1"
    :breakpoints="breakpoints"
    :spaceBetween="16"
    :modules="modules"
    :navigation="{
      nextEl: '.carousel-next',
      prevEl: '.carousel-prev',
    }"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
  >
    <SwiperSlide
      v-for="(item, index) in data"
      :key="index"
      class="border-start border-end"
    >
      <slot name="body" :swiperItem="item"></slot>
    </SwiperSlide>
    <div class="control">
      <button class="carousel-prev">
        <SvgIcon name="prev" />
      </button>
      <button class="carousel-next">
        <SvgIcon name="next" />
      </button>
    </div>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";

defineProps({
  data: {
    type: Array,
  },
  breakpoints: {
    type: Object,
    default: () => {
      return {
        576: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 1,
        },
      };
    },
  },
});

const modules = [Autoplay, Navigation];
</script>

<style lang="scss" scoped>
.control {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  margin-right: 0px;
  margin-bottom: -1px;
  z-index: 1;

  .carousel-prev,
  .carousel-next {
    width: 48px;
    height: 48px;
    background-color: #fff;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel-next {
    margin-left: -1px;
  }

  button[disabled] {
    opacity: 0.8;
  }
}
</style>
