/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-08-09 11:39:11
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-12 16:39:39
 */
import Vue from "vue";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import App from "./App.vue";
import "normalize.css";
import "./assets/css/base.css";
import { setupStore } from "@/store";
import { registerApp } from "@/global";
import router from "./router";
import store from "./store";
dayjs.extend(utc);
Vue.config.productionTip = false;

Vue.use(registerApp);
new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    setupStore();
  },
}).$mount("#app");
