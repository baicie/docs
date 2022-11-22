import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "../layouts/index.vue";
import docsRoutes from "./docsRoutes";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/:lang(.*)",
    redirect: "/docs/demo",
  },
  {
    path: "/docs",
    component: Layout,
    children: [
      {
        path: "demo",
        meta: {
          enTitle: "Demo",
          title: "示例",
          category: "docs",
        },
        component: () => import("../md/index.md"),
      },
      ...docsRoutes,
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to) => {
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: "auto" };
    }
  },
});
