import { createRouter, createWebHistory } from "vue-router";
import Lesson1a from "./components/tutorial/Lesson1a.vue";
import Lesson1b from "./components/tutorial/Lesson1b.vue";
import Lesson2a from "./components/tutorial/Lesson2a.vue";

const routes = [
  {
    path: "/1a",
    component: Lesson1a,
  },
  {
    path: "/1b",
    component: Lesson1b,
  },
  {
    path: "/2a",
    component: Lesson2a,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
