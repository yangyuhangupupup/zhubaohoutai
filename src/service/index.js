/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-09-12 15:55:06
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-21 16:34:02
 */
//托盘管理
//获取
import request from "./config";
export function getTrayList(condition) {
  return request.get("/device/queryDevice", {
    params: condition,
  });
}
// 根据id获取通
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
// 修改
export function updateTray(data) {
  return request.post("/device/updateDevice", data);
}
// 删除
export function removeTray(id) {
  return request.post(`/device/deleteDevice?id=${id}`);
}

//获取所有的保险柜
export function getSafeList(storeId) {
  return request.post(`/safe/queryAllSafe?storeId=${storeId}`);
}

/***
 *
 * rfid标签管理
 */
export function getRfidList(condition) {
  return request.get("/Rfid/queryRfid", {
    params: condition,
  });
}

// 新增
export function saveRfid(data) {
  return request.post("/Rfid/insertRfid", data);
}

// 删除
export function removeRfid(id) {
  return request.post(`/Rfid/deleteRfid?id=${id}`);
}

/**
 * 保险柜管理
 */
//分页查询保险柜
export function getsafeBoxList(condition) {
  return request.get("/safe/querySafe", {
    params: condition,
  });
}
//新增保险柜
export function saveSafeBox(data) {
  return request.post("/safe/insertSafe", data);
}
//修改保险柜
export function updateSafeBox(data) {
  return request.post("/safe/updateSafe", data);
}

//删除保险柜
export function removeSafeBox(id) {
  return request.post(`/safe/deleteSafe?id=${id}`);
}

/**
 * 分类管理
 */
//查询
export function getCategoryList(condition) {
  return request.get("/itemCategory/query", {
    params: condition,
  });
}
//新增
export function saveCategory(data) {
  return request.post("/itemCategory/save", data);
}
//修改
export function updateCategory(data) {
  return request.post("/itemCategory/update", data);
}

//删除
export function removeCategory(id) {
  return request.post(`/itemCategory/delete?id=${id}`);
}

/**
 * 角色管理
 */
//查询
export function getUserList(condition) {
  return request.get("/user/queryUser", {
    params: condition,
  });
}
//新增
export function saveUser(data) {
  return request.post("/user/insertUser", data);
}
//修改
export function updateUser(data) {
  return request.post("/user/updateUser", data);
}

//删除
export function removeUser(id) {
  return request.post(`/user/deleteUser?id=${id}`);
}

/**
 * 采购单管理
 */
//查询
export function getPurchaseList(condition) {
  return request.get("/purchase/queryPurchase", {
    params: condition,
  });
}
//新增
export function savePurchase(data) {
  return request.post("/purchase/insertPurchase", data);
}
//修改
export function updatePurchase(data) {
  return request.post("/purchase/updatePurchase", data);
}

//审核
export function checkPurchase(id) {
  return request.post(`/purchase/confirmPurchase?id=${id}`);
}

//删除
export function removePurchase(id) {
  return request.post(`/purchase/deletePurchase?id=${id}`);
}
/**
 * 上班领用
 */
//查询
export function getOutWorkList(condition) {
  return request.get("/outwork/queryOutwork", {
    params: condition,
  });
}

/**
 * 下班归还
 */
//查询
export function getWorkReturnList(condition) {
  return request.get("/return/queryReturn", {
    params: condition,
  });
}
/**
 * 销售出库
 */
//查询
export function getSaleOutList(condition) {
  return request.get("/saleout/querySaleOut", {
    params: condition,
  });
}

/**
 * 珠宝管理
 */
//查询
export function getJewelryList(condition) {
  return request.get("/jewelry/queryJewelry", {
    params: condition,
  });
}

//修改
export function updateJewelry(data) {
  return request.post("/jewelry/updateJewelry", data);
}
