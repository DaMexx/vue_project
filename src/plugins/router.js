import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/Views/index.vue"),
    },
    {
      path: "/grid",
      name: "grid",
      component: () => import("@/components/MyGrid/index.vue"),
    },
    {
      path: "/flex",
      name: "flex",
      component: () => import("@/components/MyFlexbox/index.vue"),
    },
  ],
});

export default router;
