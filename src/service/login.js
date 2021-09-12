/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-09-12 14:08:56
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-12 14:12:12
 */

import request from "./config";

export function accountLoginRequest(data) {
  return request.post("/login/login", data);
}
