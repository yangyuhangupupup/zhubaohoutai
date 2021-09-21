/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-09-05 14:51:06
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-19 21:29:01
 */
const url = "http://402600b1s6.wicp.vip";

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  /* 生产环境构建文件的目录 defalut: dist */
  outputDir: "dist",
  /* 放置生成的静态文件目录（js css img） */
  assetsDir: "static",
  devServer: {
    disableHostCheck: true,
    host: "0.0.0.0",
    port: 8080,
    open: true,
    proxy: {
      "/api": {
        target: url, //对应的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
