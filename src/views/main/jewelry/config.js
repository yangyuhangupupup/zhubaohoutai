/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-09-21 16:31:39
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-21 18:44:59
 */

const tableConfig = [
  {
    prop: "code",
    label: "珠宝编号",
    minWidth: "100",
    showoverflowtooltip: true,
  },
  {
    prop: "createTime",
    label: "创建时间",
    minWidth: "160",
    showoverflowtooltip: true,
  },
  { prop: "deviceName", label: "托盘名称", minWidth: "140" },
  { prop: "isScan", label: "是否盘点", minWidth: "100" },
  {
    prop: "itemName",
    label: "分类名称",
    minWidth: "140",
  },
  { prop: "model", label: "品牌型号", minWidth: "100" },
  { prop: "name", label: "名称", minWidth: "140" },
  {
    prop: "purchaseCode",
    label: "采购单编号",
    minWidth: "100",
    showoverflowtooltip: true,
  },
  { prop: "purchasePrice", label: "进货价", minWidth: "100" },
  { prop: "safeName", label: "保险柜名称", minWidth: "140" },
  { prop: "scanStatus", label: "盘点状态", minWidth: "100" },
  { prop: "sellingPrice", label: "销售价", minWidth: "100" },
  { prop: "size", label: "规格", minWidth: "100" },
  { prop: "status", label: "状态", minWidth: "100" },
  { prop: "supplier", label: "供应商", minWidth: "100" },
  { prop: "unit", label: "单位", minWidth: "100" },
  { prop: "weight", label: "重量", minWidth: "100" },
  { prop: "tid", label: "TID", minWidth: "140", showoverflowtooltip: true },
  {
    prop: "operation",
    label: "操作",
    minWidth: "150",
    otherOptions: {
      fixed: "right",
    },
  },
];
const DialogFormConfig = {
  formItems: [
    {
      label: "珠宝编号:",
      placeholder: "",
      field: "code",
      type: "input",
      span: 22,
    },

    {
      label: "托盘名称:",
      placeholder: "",
      field: "deviceName",
      type: "select",
      options: [],
      span: 22,
    },

    {
      label: "销售价:",
      placeholder: "",
      field: "sellingPrice",
      type: "input",
      span: 22,
    },

    {
      label: "TID:",
      placeholder: "",
      field: "tid",
      type: "input",
      span: 22,
    },
    {
      type: "button",
      label: "",
      field: "",
      span: 2,
    },
  ],
  labelWidth: "120px",
  itemStyle: { padding: "10px 0px", width: "100%" },
  rules: {
    tid: [{ required: true, message: " ", trigger: "blur" }],
  },
};
let DialogFormData = {};
for (let i of DialogFormConfig.formItems) {
  DialogFormData[i.field] = "";
}
export default {
  tableConfig,
  DialogFormConfig,
  DialogFormData,
};
