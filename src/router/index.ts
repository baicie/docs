import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "../layouts/index.vue";
import docsRoutes from "./docsRoutes";
import { afterEach, beforeEach } from "./helper";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/:lang(.*)",
    redirect: "/docs/index",
  },
  {
    path: "/docs",
    component: Layout,
    children: [...docsRoutes],
  },
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
