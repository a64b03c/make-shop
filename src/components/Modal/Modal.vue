<template>
  <div
    class="modal fade"
    ref="modal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rounded-0">
        <div class="modal-header border-bottom-0">
          <h4 class="modal-title">{{ modalTitle }}</h4>
        </div>
        <div class="modal-body py-0">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer border-top-0">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Modal from "bootstrap/js/src/modal";
import { ref, onMounted } from "vue";
const modal = ref(null);
const myModal = ref(null);
defineProps({
  modalTitle: {
    type: String,
    default: "標頭",
  },
});

const openModal = () => {
  myModal.value.show();
};
const closeModal = () => {
  myModal.value.hide();
};

onMounted(() => {
  myModal.value = new Modal(modal.value);
});

defineExpose({ openModal, closeModal });
</script>
