/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-09-12 14:14:03
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-12 16:18:58
 */
import { accountLoginRequest } from "@/service/login";
import localCache from "@/utils/cache";
import router from "@/router";
const loginModule = {
  namespaced: true,
  state: () => ({
    userInfo: {},
  }),
  mutations: {
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload) {
      const loginResult = await accountLoginRequest(payload);
      //   console.log(loginResult, "loginResultloginResult");
      let { p2pdata } = loginResult;
      if (p2pdata) {
        commit("changeUserInfo", p2pdata);
        localCache.setCache("userInfo", p2pdata);
        router.push("/main");
      }
    },
    loadLocalLogin({ commit, dispatch }) {
      const userInfo = localCache.getCache("userInfo");
      if (userInfo) {
        commit("changeUserInfo", userInfo);
      }
    },
  },
  getters: {},
};
export default loginModule;
