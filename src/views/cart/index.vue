<template>
  <aside id="setup" class="fs-7 mt-9 mb-1">
    <div class="container-xl p-4">
      <div class="stepper">
        <div class="stepper-progress">
          <div
            class="stepper-progress-bar"
            :style="'width:' + stepperProgress"
          ></div>
        </div>

        <div
          class="stepper-item"
          v-for="(item, index) in stepper.tabs"
          :key="index"
          :class="{
            current: stepper.step === index + 1,
            success: stepper.step > index + 1,
          }"
        >
          <div class="stepper-item-counter">
            <SvgIcon class="icon-success" name="done" color="#fff" />
            <span class="number">{{ index + 1 }}</span>
            <span class="title">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </aside>
  <Marquee />
  <router-view />
</template>

<script setup>
import { Marquee } from "@/components";
import { reactive, computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const stepper = reactive({
  step: 1,
  tabs: ["購物車", "訂單資訊", "確認訂單", "完成訂單"],
});

watchEffect(() => {
  switch (route.meta.step) {
    case 1: {
      stepper.step = 1;
      break;
    }
    case 2: {
      stepper.step = 2;
      break;
    }
    case 3: {
      stepper.step = 3;
      break;
    }
    case 4: {
      stepper.step = 4;
      break;
    }
  }
});

const stepperProgress = computed(() => {
  return (100 / (stepper.tabs.length - 1)) * (stepper.step - 1) + "%";
});
</script>

<style lang="scss">
$transition: all 500ms ease;
// 進度條
.stepper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  position: relative;
  z-index: 0;

  margin: 0 32px 24px 32px;

  &-progress {
    position: absolute;
    background-color: #c5c5c5;
    left: 0;
    width: 100%;
    height: 2px;
    z-index: -1;

    &-bar {
      position: absolute;
      left: 0;
      height: 100%;
      width: 0;
      border: 1px solid;
      transition: $transition;
    }
  }
}
// 進度名稱
.stepper-item {
  color: #c5c5c5;
  transition: $transition;
  // 完成與為完成的圖示
  &-counter {
    height: 36px;
    width: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    place-items: center;
    background-color: #fff;
    border: 2px solid #c5c5c5;
    border-radius: 100%;
    position: relative;
    transition: $transition;
    // 初始化完成icon
    .icon-success {
      position: absolute;
      opacity: 0;
      transform: scale(0);
      width: 24px;
      transition: $transition;
    }

    .number {
      font-size: 1rem;
      transition: $transition;
    }
    .title {
      position: absolute;
      width: 100px;
      text-align: center;
      font-size: 14px;
      bottom: -28px;
    }
  }
}

.stepper-item.success {
  .stepper-item-counter {
    border-color: black;
    background-color: black;

    .icon-success {
      opacity: 1;
      transform: scale(1);
    }

    .number {
      opacity: 0;
      transform: scale(0);
    }

    .title {
      color: black;
    }
  }
}

.stepper-item.current {
  .stepper-item-counter {
    border-color: black;
    .number {
      color: black;
    }

    .title {
      color: black;
    }
  }
}
</style>
