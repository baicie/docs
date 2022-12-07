import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import rootRoutes from "./rootRoutes";
import { afterEach, beforeEach } from "./helper";
import Nav from "./navInfo";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/:lang(.*)",
    redirect: `${Nav[0].path}`,
  },
  ...rootRoutes,
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to) => {
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: "auto" };
    }
  },
});

router.beforeEach(beforeEach);
router.afterEach(afterEach);
export default router;
