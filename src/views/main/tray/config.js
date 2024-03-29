/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-09-12 15:01:03
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-21 19:01:24
 */

const tableConfig = [
  { prop: "barCode", label: "二维码", minWidth: "100" },
  { prop: "code", label: "托盘编号", minWidth: "100" },

  { prop: "name", label: "托盘名称", minWidth: "100" },

  { prop: "safeName", label: "保险柜编号", minWidth: "100" },
  { prop: "tid", label: "TID", minWidth: "100", showoverflowtooltip: true },
  { prop: "createTime", label: "创建时间", minWidth: "100" },
  { prop: "operation", label: "操作", minWidth: "100" },
];
const FormConfig = {
  formItems: [
    {
      label: "托盘名称:",
      placeholder: "",
      field: "name",
      type: "input",
    },
    {
      label: "托盘编号:",
      placeholder: "",
      field: "code",
      type: "input",
    },
    {
      label: "保险柜:",
      placeholder: "",
      field: "safeId",
      type: "select",
      //   options: [{ label: "哈哈", value: 2 }],
    },
  ],
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
      label: "托盘名称:",
      placeholder: "",
      field: "name",
      type: "input",
      span: 22,
    },

    {
      label: "保险柜:",
      placeholder: "",
      field: "safeId",
      type: "select",
      span: 22,
    },

    {
      label: "托盘编号:",
      placeholder: "",
      field: "code",
      type: "input",
      span: 22,
    },
    {
      label: "Tid:",
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
