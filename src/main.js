/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-08-09 11:39:11
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-05 15:56:33
 */
import Vue from "vue";
import App from "./App.vue";
import "normalize.css";
import "./assets/css/base.css";
import { registerApp } from "@/global";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(registerApp);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
