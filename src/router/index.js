/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-08-09 11:39:11
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-12 14:58:49
 */
import Vue from "vue";
import VueRouter from "vue-router";
import localCache from "@/utils/cache";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/main",
    name: "main",
    redirect: "/main/dashboard",
    component: () => import("@/views/main/main.vue"),
    children: [
      {
        path: "/main/role",
        name: "role",
        component: () => import("@/views/main/role"),
      },
      {
        path: "/main/device",
        name: "device",
        component: () => import("@/views/main/device"),
      },
      {
        path: "/main/dashboard",
        name: "device",
        component: () => import("@/views/main/dashboard"),
      },
      {
        path: "/main/tray",
        name: "device",
        component: () => import("@/views/main/tray"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let userInfo = localCache.getCache("userInfo");
  if (!userInfo && to.name !== "login") {
    next({
      name: "login",
    });
  } else if (userInfo && to.name === "login") {
    next({
      name: "main",
    });
  } else {
    next();
  }
});
export default router;
