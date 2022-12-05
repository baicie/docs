import Layout from "../layouts/index.vue";
import docsRoutes from "./docsRoutes";
import testRoutes from "./testRoutes";

export default [
  {
    path: "docs",
    meta: {
      category: "docs",
      subtitle: "按钮index",
      type: "导航",
      title: "docs",
    },
    component: Layout,
    children: [...docsRoutes],
  },
  {
    path: "test",
    meta: {
      category: "docs2",
      subtitle: "固钉2",
      type: "导航2",
      title: "docs2",
    },
    component: Layout,
    children: [...testRoutes],
  },
];
