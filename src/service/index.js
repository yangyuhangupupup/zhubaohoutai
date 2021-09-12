/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-09-12 15:55:06
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-12 17:17:56
 */
//托盘管理
//获取
import request from "./config";
export function getTrayList(condition) {
  return request.get("/device/queryDevice", {
    params: condition,
  });
} // 根据id获取通
// export function getTechnicalManageById(id) {
//   return request.get("/TechnicalManage/GetTechnicalManageById", {
//     params: {
//       id,
//     },
//   });
// }
// 新增
export function saveTray(data) {
  return request.post("/device/insertDevice", data);
}

// 删除
export function removeTray(id) {
  return request.post("/TechnicalManage/DeleteTechnicalManage", { id });
}

//获取所有的保险柜
export function getSafeList(storeId) {
  return request.post(`/safe/queryAllSafe?storeId=${storeId}`);
}
