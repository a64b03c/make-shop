<template>
  <button class="load-btn" :disabled="disabled || isload" @click="handleClick">
    <span v-if="isload" class="loader"></span>
    <span v-else>
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
import { ref } from "vue";
const isload = ref(false);

defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "32px",
  },
  bgroundColor: {
    type: String,
    default: "black",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["btnclick"]);

const handleClick = () => {
  isload.value = true;
  emits("btnclick");
  setTimeout(() => {
    isload.value = false;
  }, 1000);
};
</script>

<style lang="scss" scoped>
.load-btn {
  width: v-bind(width);
  height: v-bind(height);
  background-color: v-bind(bgroundColor);
  display: flex;
  align-items: center;
  justify-content: center;
  .loader {
    width: 20px;
    height: 20px;
    border: 2px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

button[disabled] {
  opacity: 0.2;
}
</style>
