/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-09-05 15:43:28
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-05 15:45:18
 */
let BASE_URL = "";
if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://coderwhy.org/dev";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "http://coderwhy.org/dev";
} else {
  BASE_URL = "http://coderwhy.org/dev";
}

export { BASE_URL };
