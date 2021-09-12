/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-09-12 13:59:04
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-12 16:26:10
 */
/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-08-26 14:50:24
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-11 18:29:49
 */
import axios from "axios";
import { MessageBox, Message } from "element-ui";

// create an axios instance
const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "/api"
      : "http://218.94.149.27:8800",
  timeout: 30000,
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    console.log(res, "axios拦截器的打印");
    if (res.errcode !== 0 && res.code !== 0) {
      Message({
        message: res.errmsg || res.msg || "Error",
        type: "error",
        duration: 5 * 1000,
      });

      if (
        res.errcode === 50008 ||
        res.errcode === 50012 ||
        res.errcode === 50014
      ) {
        // to re-login
        MessageBox.confirm(
          "You have been logged out, you can cancel to stay on this page, or log in again",
          "Confirm logout",
          {
            confirmButtonText: "Re-Login",
            cancelButtonText: "Cancel",
            type: "warning",
          }
        ).then(() => {
          //   store.dispatch("user/resetToken").then(() => {
          //     location.reload();
          //   });
        });
      }

      return Promise.resolve(res);
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

service.defaults.withCredentials = true;

export default service;
