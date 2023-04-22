<script setup>
const menu_item = [
  {
    title: "最新消息",
    herf: "./",
  },
  {
    title: "聯絡我們",
    herf: "./",
  },
  {
    title: "聯絡我們",
    herf: "./",
  },
  {
    title: "聯絡我們",
    herf: "./",
  },
];
</script>

<template>
  <header class="header">
    <div class="header-left">
      <div class="logo">
        <a href="/">
          <!-- <img src="" alt=""> -->
          <span>logo</span>
        </a>
      </div>
      <div class="navigation-wrap">
        <div
          class="navigation-item"
          v-for="(item, index) in menu_item"
          :key="index"
        >
          <router-link :to="item.herf">
            <p>
              {{ item.title }}
              <!-- <svg></svg> -->
            </p>
            <!-- <templ ate v-if="">
              <ul v-for>
                <li><a href=""></a></li>
              </ul>
            </template> -->
          </router-link>
        </div>
      </div>
    </div>
    <div class="header-right">
      <nav class="navbar">
        <ul>
          <li>
            <a href="" @click.prevent=""
              >語言
              <svg width="10" height="5" class="drop" viewBox="0 0 8 5">
                <title>mainNavArrowDown</title>
                <path
                  d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z"
                  fill="#7E7E7E"
                ></path>
              </svg>
            </a>
          </li>
          <li><a href="" @click.prevent="">購物車</a></li>
          <li><a class="login" href="" @click.prevent="">登入</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/mixins.scss";
$headerPadding_XL: 40px;
$headerHight_XL: 80px;

.header {
  padding: 0 $headerPadding_XL;
  height: $headerHight_XL;
  position: fixed;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid#EEE;
}

.header-left {
  display: flex;
  align-self: center;

  .navigation-wrap {
    margin-left: 18px;
    display: flex;

    .navigation-item {
      border: 1px solid black;

      height: $headerHight_XL;
      display: flex;
      align-items: center;
      background-color: burlywood;
      & a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto 0;
        height: 60px;
        & > p {
          padding: 8px 16px;
        }
      }
    }
  }
}
</style>
