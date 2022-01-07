import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import LessonNotes from "./components/lessons/LessonNotes.vue";
import PracticeBasicNotes from "./components/lessons/PracticeBasicNotes.vue";
import LessonStepsSharpsFlats from "./components/lessons/LessonStepsSharpsFlats.vue";
import LessonScales from "./components/lessons/LessonScales.vue";
import LessonKeys from "./components/lessons/LessonKeys.vue";

const routes = [
  {
    path: "/notes",
    component: LessonNotes,
  },
  {
    path: "/practice_notes",
    component: PracticeBasicNotes,
  },
  {
    path: "/steps_sharps_flats",
    component: LessonStepsSharpsFlats,
  },
  {
    path: "/scales",
    component: LessonScales,
  },
  {
    path: "/keys",
    component: LessonKeys,
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
