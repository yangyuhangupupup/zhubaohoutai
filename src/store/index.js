/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-08-09 11:39:11
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-12 16:21:13
 */
import Vue from "vue";
import Vuex from "vuex";
import login from "./login";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: "yyh",
  },
  mutations: {},
  actions: {},
  modules: {
    login,
  },
});
export function setupStore() {
  store.dispatch("login/loadLocalLogin");
}
export default store;
