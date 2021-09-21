/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-09-19 23:15:42
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-21 17:15:14
 */

const tableConfig = [
  { prop: "code", label: "采购单编号", minWidth: "100" },

  { prop: "itemName", label: "分类名称", minWidth: "100" },
  { prop: "model", label: "品牌型号", minWidth: "100" },
  { prop: "name", label: "珠宝名称", minWidth: "140" },
  { prop: "purchaseDate", label: "采购时间", minWidth: "150" },
  { prop: "purchasePrice", label: "进货价", minWidth: "100" },
  { prop: "quantity", label: "数量", minWidth: "100" },
  { prop: "size", label: "规格", minWidth: "100" },
  { prop: "supplier", label: "供应商", minWidth: "100" },
  { prop: "unit", label: "单位", minWidth: "100" },
  { prop: "weight", label: "重量", minWidth: "100" },
  { prop: "status", label: "采购单状态", minWidth: "100" },
  {
    prop: "createTime",
    label: "创建时间",
    minWidth: "150",
    showoverflowtooltip: true,
  },
  {
    prop: "operation",
    label: "操作",
    minWidth: "180",
    otherOptions: {
      fixed: "right",
    },
  },
];
const FormConfig = {
  formItems: [],
  labelWidth: "100px",
  itemStyle: { padding: "0px 0px" },
  colLayout: {
    FirstSpan: 18,
    SecondSpan: 4.5,
    ThirdSpan: 6,
  },
};
const DialogFormConfig = {
  formItems: [
    {
      label: "采购单编号:",
      placeholder: "",
      field: "code",
      type: "input",
      span: 12,
    },

    {
      label: "分类名称:",
      placeholder: "",
      field: "itemId",
      type: "cascader",
      span: 12,
      options: [],
      otherOption: {
        props: {
          value: "id",
          label: "name",
          children: "children",
          checkStrictly: true,
        },
      },
    },

    {
      label: "品牌型号:",
      placeholder: "",
      field: "model",
      type: "input",
      span: 12,
    },
    {
      label: "珠宝名称:",
      placeholder: "",
      field: "name",
      type: "input",

      span: 12,
    },
    {
      label: "采购时间:",
      placeholder: "",
      field: "purchaseDate",
      type: "datepicker",
      span: 12,
    },
    {
      label: "进货价:",
      placeholder: "",
      field: "purchasePrice",
      type: "input",
      span: 12,
    },
    {
      label: "数量:",
      placeholder: "",
      field: "quantity",
      type: "input",
      span: 12,
      otherOption: {
        type: "number",
      },
    },
    {
      label: "规格:",
      placeholder: "",
      field: "size",
      type: "input",
      span: 12,
    },
    {
      label: "供应商:",
      placeholder: "",
      field: "supplier",
      type: "input",
      span: 12,
    },
    {
      label: "单位:",
      placeholder: "",
      field: "unit",
      type: "input",
      span: 12,
    },
    {
      label: "重量(g):",
      placeholder: "",
      field: "weight",
      type: "input",
      span: 12,
      otherOption: {
        type: "number",
      },
    },
  ],
  labelWidth: "120px",
  itemStyle: { padding: "10px 0px", width: "100%" },
  rules: {
    licenseCode: [{ required: true, message: " ", trigger: "blur" }],
  },
};
let FormData = {};
for (let i of FormConfig.formItems) {
  FormData[i.field] = "";
}
let DialogFormData = {};
for (let i of DialogFormConfig.formItems) {
  DialogFormData[i.field] = "";
}
export default {
  FormData,
  DialogFormConfig,
  FormConfig,
  tableConfig,
  DialogFormData,
};
