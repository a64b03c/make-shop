<template>
  <div class="swiper-content">
    <Swiper
      :loop="true"
      :loop-additional-slides="1"
      :modules="[Autoplay, EffectFade, Mousewheel]"
      :effect="'fade'"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      class="mySwiper"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";

import "swiper/scss/effect-fade";
import "swiper/css/pagination";
import { Mousewheel, Autoplay, EffectFade } from "swiper";
</script>

<style lang="scss" scoped>
.swiper-content {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid #eee;
  overflow: hidden;
  .swiper {
    width: 100%;
    height: 100%;
  }
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
