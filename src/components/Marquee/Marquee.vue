<template>
  <div class="marquee">
    <div class="context">
      <span class="marquee-text" v-for="item in data" :key="item">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    default: () => {
      return [
        "本網站為作業用網站，無商業用途",
        "本網站為作業用網站，無商業用途",
        "本網站為作業用網站，無商業用途",
      ];
    },
  },
  height: {
    type: String,
    default: "48px",
  },
  fontSize: {
    type: String,
    default: "16px",
  },
  backgroundColor: {
    type: String,
    default: "black",
  },
  second: {
    type: String,
    default: "60s",
  },
});
</script>

<style lang="scss" scoped>
.marquee {
  display: flex;
  align-items: center;
  position: relative;
  color: white;
  width: 100vw;
  height: v-bind(height);
  font-size: v-bind(fontSize);
  font-weight: 700;
  // padding: 4px;
  background-color: v-bind(backgroundColor);
  overflow-x: hidden;
  .context {
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: marquee v-bind(second) linear infinite;
    .marquee-text {
      padding: 0 32px;
    }
  }
}

@keyframes marquee {
  from {
    transform: translateX(100vw);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
