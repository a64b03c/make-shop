import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  // 滾動行為歸0
  scrollBehavior: () => {
    return { left: 0, top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "root",
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("@/views/home.vue"),
        },
        {
          path: "/products",
          name: "products",
          component: () => import("@/views/products/index.vue"),
          children: [
            {
              path: "/products",
              name: "products",
              component: () => import("@/views/products/products.vue"),
            },
            {
              path: "/products/product/:id",
              name: "product",
              component: () => import("@/views/products/product.vue"),
            },
          ],
        },
        {
          path: "/cart",
          name: "cart",
          component: () => import("../views/cart/index.vue"),
          children: [
            {
              path: "/cart",
              name: "cart",
              meta: { step: 1 },
              component: () => import("../views/cart/cart.vue"),
            },
            {
              path: "/cart/order",
              name: "order",
              meta: { step: 2 },
              component: () => import("../views/cart/order.vue"),
            },
            {
              path: "/cart/checkorder/:id",
              name: "checkorder",
              meta: { step: 3 },
              component: () => import("../views/cart/checkorder.vue"),
            },
            {
              path: "/cart/pay",
              name: "pay",
              meta: { step: 4 },
              component: () => import("../views/cart/pay.vue"),
            },
          ],
        },
        {
          path: "/404",
          name: "404",
          component: () => import("../views/404.vue"),
        },
        {
          path: "/:pathMathch(.*)*",
          redirect: "/404",
          name: "any",
        },
      ],
    },
  ],
});

export default router;
