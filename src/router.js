import { createRouter, createWebHistory } from "vue-router";
import Lesson1 from "./components/tutorial/Lesson1.vue";
import Lesson2 from "./components/tutorial/Lesson2.vue";

const routes = [
  {
    path: "/1",
    component: Lesson1,
  },
  {
    path: "/2",
    component: Lesson2,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
