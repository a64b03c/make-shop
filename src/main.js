import { createApp } from "vue";
import App from "./App.vue";
// 全域composable
import router from "./router";
import pinia from "./store";

import "virtual:svg-icons-register";

// css
import "@/assets/scss/main.scss";

// 引入 VeeValidate 的驗證規則
import { defineRule, configure } from "vee-validate";
import { required, email, min, max } from "@vee-validate/rules";

// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from "@vee-validate/i18n";
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";
// 全域物件註冊
import globalComponents from "@/components/GlobalComponents";
import directives from "@/directives";

const needRules = { required, email, min, max };
Object.keys(needRules).forEach((rule) => {
  defineRule(rule, needRules[rule]);
});
// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale("zh_TW");

const app = createApp(App);

app.use(router);
app.use(pinia);

app.use(directives);
app.use(globalComponents);

app.mount("#app");
