<template>
  <nav>
    <ul class="nav-main">
      <li>客廳</li>
      <li>臥室</li>
      <li>書房/辦公室</li>
      <li>廚房</li>
      <li>玄關</li>
      <li>戶外用品</li>
      ｜
      <li>優惠專區</li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 40px;
  border: 1px solid#EEE;
  margin-top: -1px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  .nav-main {
    width: 1140px;
    display: flex;
    align-items: center;
    & > li {
      display: flex;
    }
    & > li:first-child {
      padding-right: 12px;
    }
    & > li:not(:first-child) {
      padding: 0 12px;
    }
  }
}
</style>
