<template>
  <main class="mt-8">
    <section id="banner" class="container-xl">
      <MySwiper :data="xsImgUrls" v-if="isPhone">
        <template #body="{ swiperItem }">
          <div class="w-full h-400 h-lg-300 overflow-hidden position-relative">
            <img :src="swiperItem" class="d-block" />
          </div>
        </template>
      </MySwiper>

      <MySwiper
        :data="smImgUrls"
        :breakpoints="{
          576: {
            slidesPerView: 1,
          },
        }"
        v-else
      >
        <template #body="{ swiperItem }">
          <div class="w-full h-400 h-lg-300 overflow-hidden position-relative">
            <img :src="swiperItem" class="d-block" />
          </div>
        </template>
      </MySwiper>
    </section>

    <aside id="categories-bar">
      <div class="container-xl">
        <CategoriesBar />
      </div>
    </aside>
    <section id="marquee">
      <Marquee />
    </section>
    <router-view></router-view>
  </main>
</template>

<script setup>
import { CategoriesBar, Marquee, MySwiper } from "@/components";
import { useCheckMedia } from "@/composables/useCheckMedia.js";
const { isPhone } = useCheckMedia();

const getImgUrls = (name) => {
  return new URL(`../../assets/imgs/${name}.jpg`, import.meta.url).href;
};

const xsImgUrls = [
  getImgUrls("1040_1040-xs"),
  getImgUrls("1040_1040_2-xs"),
  getImgUrls("1040_1040_3-xs"),
];

const smImgUrls = [
  getImgUrls("1000_400"),
  getImgUrls("1000_400_2"),
  getImgUrls("1000_400_3"),
];
</script>
