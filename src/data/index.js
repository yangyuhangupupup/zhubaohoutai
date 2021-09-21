/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-09-09 21:12:31
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-21 16:33:06
 */
const meuns = [
  {
    icon: "el-icon-monitor",
    id: 38,
    name: "首页",
    type: 2,
    path: "/main/dashboard",
  },
  {
    icon: "el-icon-monitor",
    id: 39,
    name: "珠宝管理",
    type: 2,
    path: "/main/jewelry",
  },
  {
    icon: "el-icon-monitor",
    id: 40,
    name: "分类管理",
    type: 1,
    children: [
      {
        children: null,
        id: 100,
        name: "珠宝分类",
        parentId: 40,
        type: 2,
        path: "/main/classity",
      },
      {
        children: null,
        id: 101,
        name: "哈哈哈",
        parentId: 40,
        type: 2,
      },
    ],
  },
  // {
  //   icon: "el-icon-monitor",
  //   id: 41,
  //   name: "设备管理",
  //   type: 2,
  // },
  {
    icon: "el-icon-monitor",
    id: 42,
    name: "标签管理",
    type: 2,
    path: "/main/rfid",
  },
  // {
  //   icon: "el-icon-monitor",
  //   id: 43,
  //   name: "采购入库",
  //   type: 2,
  // },
  {
    icon: "el-icon-monitor",
    id: 44,
    name: "上班领用",
    type: 2,
    path: "/main/workReceive",
  },
  {
    icon: "el-icon-monitor",
    id: 45,
    name: "下班归还",
    type: 2,
    path: "/main/workReturn",
  },
  {
    icon: "el-icon-monitor",
    id: 46,
    name: "销售出库",
    type: 2,
    path: "/main/saleOutBound",
  },
  {
    icon: "el-icon-monitor",
    id: 47,
    name: "人员管理",
    type: 2,
    path: "/main/role",
  },
  {
    icon: "el-icon-monitor",
    id: 47,
    name: "托盘管理",
    type: 2,
    path: "/main/tray",
  },
  {
    icon: "el-icon-monitor",
    id: 48,
    name: "保险柜管理",
    type: 2,
    path: "/main/safebox",
  },
  {
    icon: "el-icon-monitor",
    id: 234,
    name: "采购单管理",
    type: 2,
    path: "/main/purchase",
  },
];
export default meuns;
