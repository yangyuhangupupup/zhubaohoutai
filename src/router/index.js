/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-08-09 11:39:11
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-21 16:32:55
 */
import Vue from "vue";
import VueRouter from "vue-router";
import localCache from "@/utils/cache";
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};
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
        path: "/main/jewelry",
        name: "device",
        component: () => import("@/views/main/jewelry"),
      },
      {
        path: "/main/dashboard",
        name: "dashboard",
        component: () => import("@/views/main/dashboard"),
      },
      {
        path: "/main/tray",
        name: "tray",
        component: () => import("@/views/main/tray"),
      },
      {
        path: "/main/rfid",
        name: "rfid",
        component: () => import("@/views/main/rfid"),
      },
      {
        path: "/main/safebox",
        name: "safebox",
        component: () => import("@/views/main/safebox"),
      },
      {
        path: "/main/classity",
        name: "classity",
        component: () => import("@/views/main/classity"),
      },
      {
        path: "/main/purchase",
        name: "purchase",
        component: () => import("@/views/main/purchase"),
      },
      {
        path: "/main/workReceive",
        name: "workReceive",
        component: () => import("@/views/main/workReceive"),
      },
      {
        path: "/main/workReturn",
        name: "workReturn",
        component: () => import("@/views/main/workReturn"),
      },
      {
        path: "/main/saleOutBound",
        name: "saleOutBound",
        component: () => import("@/views/main/saleOutBound"),
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
