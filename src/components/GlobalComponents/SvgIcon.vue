<template>
  <svg aria-hidden="true" :style="{ width, height }">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  prefix: {
    type: String,
    default: "icon",
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "color",
  },
  width: {
    type: String,
    default: "20px",
  },
  height: {
    type: String,
    default: "20px",
  },
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>
