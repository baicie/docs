import { createApp, Transition, TransitionGroup, version } from "vue";
import "./style.css";
import Antd from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import NProgress from "nprogress";
import i18n from "./i18n";

console.log("vue version: ", version);
console.log("ant design vue version: ", Antd.version);
const app = createApp(App);

app.component("Transition", Transition);
app.component("TransitionGroup", TransitionGroup);

app.component("VNodes", function (_, { attrs: { value } }) {
  return value;
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  if (to.path !== from.path) {
    NProgress.done();
    document.documentElement.scrollTop = 0;
  }
});
app.use(router);
// app.use(store);
app.use(i18n);

// app.config.globalProperties.$i18n = i18n;

app.mount("#app");
