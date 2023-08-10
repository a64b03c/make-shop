<template>
  <div class="vnis">
    <button
      @mousedown="decreaseNumber"
      @click="whileMouseDown(clearTimer)"
      :class="buttonClass"
    >
      -
    </button>
    <input
      type="number"
      v-bind:value="numericValue"
      @keypress="validateInput"
      @input="inputValue"
      :min="min"
      :max="max"
      debounce="500"
      :class="inputClass"
    />
    <button
      @mousedown="increaseNumber"
      @click="whileMouseDown(clearTimer)"
      :class="buttonClass"
    >
      +
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const numericValue = ref(props.value);
const timer = ref(null);

const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  basicLength: {
    type: String,
    default: "32px",
  },
  min: {
    default: 0,
    type: Number,
  },
  max: {
    default: 10,
    type: Number,
  },
  step: {
    default: 1,
    type: Number,
  },
  mouseDownSpeed: {
    default: 500,
    type: Number,
  },
  inputClass: {
    default: "vnis__input",
    type: String,
  },
  buttonClass: {
    default: "vnis__button",
    type: String,
  },
  integerOnly: {
    default: false,
    type: Boolean,
  },
});

const clearTimer = () => {
  if (timer.value) {
    clearInterval(timer.value);
    timer.value = null;
  }
};

const whileMouseDown = (callback) => {
  if (timer.value === null) {
    timer.value = setInterval(() => {
      callback();
    }, props.mouseDownSpeed);
  }
};

const increaseNumber = () => {
  numericValue.value += props.step;
};

const decreaseNumber = () => {
  numericValue.value -= props.step;
};

const isInteger = (evt) => {
  evt = evt ? evt : window.event;
  let key = evt.keyCode || evt.which;
  key = String.fromCharCode(key);
  const regex = /[0-9]/;

  if (!regex.test(key)) {
    evt.returnValue = false;
    if (evt.preventDefault) evt.preventDefault();
  }
};

const isNumber = (evt) => {
  // 處理不同瀏覽器的事件對象差異
  evt = evt ? evt : window.event;
  // 此行代碼用於獲取輸入字符的 ASCII 碼（Unicode 碼點）。
  // 同樣，由於不同的瀏覽器使用不同的屬性，這裡通過條件表達式確保 charCode 變數包含了正確的字符碼。
  let charCode = evt.which ? evt.which : evt.keyCode;
  // charCode > 31: 確保忽略空格等非打印字符
  // charCode < 48 || charCode > 57: 確保輸入字符的 ASCII 碼不在數字 '0' 到 '9' 的範圍內，排除數字字符。
  // charCode !== 46: 確保輸入字符的 ASCII 碼不是小數點的碼點
  if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
    evt.preventDefault();
  } else {
    return true;
  }
};

const validateInput = (evt) => {
  console.log(evt);
  if (props.integerOnly === true) {
    isInteger(evt);
  } else {
    isNumber(evt);
  }
};
// 手動輸入數值
const inputValue = (evt) => {
  numericValue.value = evt.target.value
    ? parseInt(evt.target.value)
    : props.min;
};

const emits = defineEmits(["input"]);

watch(
  () => numericValue.value,
  (val) => {
    if (val <= props.min) {
      numericValue.value = parseInt(props.min);
    }

    if (val >= props.max) {
      numericValue.value = parseInt(props.max);
    }

    if (val <= props.max && val >= props.min) {
      emits("input", val);
    }
  },
);
</script>

<style lang="scss">
.vnis {
  display: flex;
  justify-content: space-between;

  &__input {
    flex: 1;
    border: 1px solid var(--border-color);
    // 原生外觀
    appearance: none;
    background: none;
    outline: none;
    font-size: 1rem;
    height: v-bind(basicLength);
    text-align: center;
  }

  &__button {
    background: black;
    margin: 0;
    padding: 0;
    border: 1px solid black;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    height: v-bind(basicLength);
    width: v-bind(basicLength);
  }
}
</style>
