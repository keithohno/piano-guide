import { createRouter, createWebHistory } from "vue-router";
import Lesson1a from "./components/tutorial/Lesson1a/Lesson1a.vue";
import Lesson1b from "./components/tutorial/Lesson1b/Lesson1b.vue";

const routes = [
  {
    path: "/1a",
    component: Lesson1a,
  },
  {
    path: "/1b",
    component: Lesson1b,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
