/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.md" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<any, any, any> & {
    readonly pageDate?: PageData;
  };
  export default component;
}

// declare module "@vue/runtime-core" {
//   import { I18n } from "vue-i18n";
//   interface ComponentCustomProperties {
//     $router: Router;
//     $i18n: I18n;
//   }
// }
