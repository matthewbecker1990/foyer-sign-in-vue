import { createRouter, createWebHistory } from "vue-router";

import StepHello from "../pages/StepHello.vue";
import StepName from "../pages/StepName.vue";
import StepEmail from "../pages/StepEmail.vue";
import StepRole from "../pages/StepRole.vue";

const routes = [
  { path: "/", component: StepHello },
  { path: "/name", component: StepName },
  { path: "/email", component: StepEmail },
  { path: "/role", component: StepRole },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
