import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: () => import("../layout/Layout.vue"),
      // 跳轉頁面
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
      ],
    },
  ],
});

export default router;
