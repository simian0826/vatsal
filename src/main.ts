import { createApp } from "vue";
import VueScrollTo from "vue-scrollto";
import ElementPlus from "element-plus";
//svg插件需要配置的代码
import "virtual:svg-icons-register";
//注册全局组件
import globalComponents from "@/components";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "element-plus/dist/index.css";
import 'element-plus/theme-chalk/display.css'
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "./style/index.scss";
import App from "@/App.vue";
import { router } from "@/router";
import { pinia } from "@/stores";
// register Swiper custom elements
register();
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
//国际化
app.use(ElementPlus, {
  locale: zhCn,
});

app.use(globalComponents);
app.use(router);
app.use(pinia);
app.use(VueScrollTo);

app.mount("#app");
