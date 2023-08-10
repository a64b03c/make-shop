<script setup>
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

import { ref, computed, watchEffect, onBeforeUnmount } from "vue";
import { useIntervalFn } from "@vueuse/core";
dayjs.extend(duration);

const props = defineProps({
  until: { type: String, default: "2023/08/20" },
});

// 現在時間
const now = ref(dayjs());
// 上一秒時間
const lastSec = ref(null);
const nowTime = computed({
  get: () => now.value,
  set: (value) => {
    lastSec.value = now.value;
    now.value = value;
  },
});
// 設定格式
const formatTime = (duration) => {
  const hms = duration.format("DDHHmmss");
  const displayHms = [...hms];
  return displayHms;
};

// 計算剩餘時間
const timeLeft = computed(() => {
  // 過期日期
  const untilDay = dayjs(props.until);
  // 時間過期判斷
  if (untilDay.isBefore(nowTime.value)) return dayjs.duration(0);
  // 計算剩餘時間
  const diffDays = dayjs.duration(untilDay.diff(nowTime.value));
  return formatTime(diffDays);
});

// 上一秒的時間
const oTimeLeft = computed(() => {
  if (lastSec.value === null) return dayjs.duration(0);
  const untilDay = dayjs(props.until);
  if (untilDay.isBefore(lastSec.value)) return dayjs.duration(0);
  const diffDays = dayjs.duration(untilDay.diff(lastSec.value));
  return formatTime(diffDays);
});

const { pause } = useIntervalFn(() => {
  nowTime.value = dayjs();
}, 1000);

const cols = ref([]);
let countSec = null;

const stopWatchEffect = watchEffect(() => {
  if (cols.value) {
    Array.from(cols.value).forEach((c, i) => {
      if (timeLeft.value[i] !== oTimeLeft.value[i]) {
        cols.value[i].classList.add("roll-in");
        countSec = setTimeout(() => {
          cols.value[i].classList.remove("roll-in");
        }, 500);
      }
    });
  }
});

onBeforeUnmount(() => {
  pause();
  stopWatchEffect();
  clearTimeout(countSec);
});
</script>

<template>
  <div class="cd d-flex items-center justify-center py-4">
    <div class="d-flex items-center">
      <div class="d-flex items-center justify-center">
        <div class="cd-groups d-flex" v-for="(i, index) in 4" :key="index">
          <div ref="cols">
            <div class="w-5 text-center">
              {{ timeLeft[index * 2] }}
            </div>
            <div class="w-5 text-center">
              {{ oTimeLeft[index * 2] }}
            </div>
          </div>
          <div ref="cols">
            <div class="w-5 text-center">
              {{ timeLeft[index * 2 + 1] }}
            </div>
            <div class="w-5 text-center">
              {{ oTimeLeft[index * 2 + 1] }}
            </div>
          </div>
          <p class="mb-0" v-if="index < 3">：</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cd {
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 1;
}
.cd-groups {
  height: 1.75rem;
  overflow: hidden;
}

.roll-in {
  animation: rollIn 0.5s ease-in-out;
}
.cd__next-digit-fade {
  animation: fade 0.5s ease-in-out;
}
.cd__prev-digit-fade {
  animation: fade 0.5s ease-in-out reverse;
}

@keyframes rollIn {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
