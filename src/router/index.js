import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "products",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/management",
      name: "management",
      component: () => import("@/views/ManagementView.vue"),
    },
  ],
});

export default router;
