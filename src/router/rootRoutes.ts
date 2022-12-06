
  import Layout from "../layouts/index.vue";
  import docsRoutes from "./docsRoutes";import H5C3Routes from "./H5C3Routes";import jsRoutes from "./jsRoutes";import testRoutes from "./testRoutes";import ToolsRoutes from "./ToolsRoutes";import dailyRoutes from "./dailyRoutes";import leetcodeRoutes from "./leetcodeRoutes";import projectRoutes from "./projectRoutes";

  export default [
    
          {
            path: '/docs',
            meta: {"category":"docs","subtitle":"按钮index","type":"导航","title":"docs","path":"docs"},
            component: Layout,
            children: [...docsRoutes],
          }
        ,
          {
            path: '/H5C3',
            meta: {"path":"H5C3","title":"H5C3"},
            component: Layout,
            children: [...H5C3Routes],
          }
        ,
          {
            path: '/js',
            meta: {"pathF":"js","path":"js","title":"js进阶"},
            component: Layout,
            children: [...jsRoutes],
          }
        ,
          {
            path: '/test',
            meta: {"category":"test","subtitle":"固钉2","type":"导航2","title":"docs2","path":"test"},
            component: Layout,
            children: [...testRoutes],
          }
        ,
          {
            path: '/Tools',
            meta: {"path":"Tools","title":"Tools"},
            component: Layout,
            children: [...ToolsRoutes],
          }
        ,
          {
            path: '/daily',
            meta: {"pathF":"daily","path":"daily","title":"日程"},
            component: Layout,
            children: [...dailyRoutes],
          }
        ,
          {
            path: '/leetcode',
            meta: {"pathF":"leetcode","path":"leetcode","title":"算法"},
            component: Layout,
            children: [...leetcodeRoutes],
          }
        ,
          {
            path: '/project',
            meta: {"pathF":"project","path":"project","title":"项目"},
            component: Layout,
            children: [...projectRoutes],
          }
        
  ]
  