export default {
  mounted(el) {
    el.addEventListener("mouseover", () => {
      el.classList.add("active");
    });

    el.addEventListener("mouseout", () => {
      el.classList.remove("active");
    });
  },
};
