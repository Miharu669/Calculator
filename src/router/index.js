import { createRouter, createWebHistory } from "vue-router";
import Calculator from "../views/Calculator.vue";
import Weather from "../views/Weather.vue";
import Conversor from "../views/Conversor.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "calculator",
      component: Calculator,
    },
    {
      path: "/Conversor",
      name: "conversor",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Conversor.vue"),
    },
    {
      path: "/Weather",
      name: "weather",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Weather.vue"),
    },
  ],
});

export default router;
