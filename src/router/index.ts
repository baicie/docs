import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "../layouts/index.vue";
import docsRoutes from "./docsRoutes";
import componentsRoutes from "./componentsRoutes";
import { afterEach, beforeEach } from "./helper";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/:lang(.*)",
    redirect: "/docs",
  },
  {
    path: "/docs",
    component: Layout,
    // redirect: "/docs/demo",
    children: [...docsRoutes],
  },
  {
    path: "/components",
    component: Layout,
    children: [...componentsRoutes],
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
