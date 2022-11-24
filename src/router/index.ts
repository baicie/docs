import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "../layouts/index.vue";
import docsRoutes from "./docsRoutes";
import { afterEach, beforeEach } from "./helper";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/:lang(.*)",
    redirect: "/docs/home",
  },
  {
    path: "/docs",
    component: Layout,
    children: [
      {
        path: "home",
        component: () => import("../home.vue"),
      },
      {
        path: "demo",
        meta: {},
        component: () => import("../demo.vue"),
      },
      ...docsRoutes,
    ],
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
