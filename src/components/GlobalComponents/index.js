import SvgIcon from "./SvgIcon.vue";
import LoadBtn from "./LoadBtn.vue";
import { Field as VField, Form as VForm, ErrorMessage } from "vee-validate";
// 全局安裝組件
const globalComponents = { SvgIcon, VField, VForm, ErrorMessage, LoadBtn };
export default {
  install(app) {
    Object.keys(globalComponents).forEach((key) => {
      app.component(key, globalComponents[key]);
    });
  },
};
