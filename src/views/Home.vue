<script setup>
import topBar from "../components/Home/topBar.vue";
import newsCard from "../components/Home/newsCard.vue";
import mainBanner from "../components/Home/mainBanner.vue";
</script>

<template>
  <section class="banner-wrap">
    <div class="banner-main">
      <mainBanner></mainBanner>
    </div>
  </section>
  <topBar />
  <div class="news-wrap">
    <newsCard><h3>副標題副標副標題</h3></newsCard>
    <newsCard><h3>副標題副標題副標題副標題</h3></newsCard>
    <newsCard><h3>副標題副標題副標題副標題</h3></newsCard>
  </div>
</template>

<style lang="scss" scoped>
.banner-wrap {
  height: 100vh;
  .banner-main {
    height: 100%;
  }
}

.news-wrap {
  width: 50%;
}
</style>
