import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Lesson1 from "./components/tutorial/Lesson1.vue";
import Lesson2 from "./components/tutorial/Lesson2.vue";
import Lesson3 from "./components/tutorial/Lesson3.vue";
import Lesson4 from "./components/tutorial/Lesson4.vue";
import Lesson5 from "./components/tutorial/Lesson5.vue";

const routes = [
  {
    path: "/notes",
    component: Lesson1,
  },
  {
    path: "/practice_notes",
    component: Lesson2,
  },
  {
    path: "/steps_sharps_flats",
    component: Lesson3,
  },
  {
    path: "/scales",
    component: Lesson4,
  },
  {
    path: "/keys",
    component: Lesson5,
  },
  {
    path: "/",
    component: Home,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
