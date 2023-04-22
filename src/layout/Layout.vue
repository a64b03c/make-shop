<template>
  <div class="main">
    <Header></Header>
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Header from "../components/header/Header.vue";
import { RouterView } from "vue-router";
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
