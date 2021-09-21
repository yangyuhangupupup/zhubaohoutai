/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-09-12 15:01:03
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-21 18:42:07
 */

const tableConfig = [
  { prop: "code", label: "保险柜编号", minWidth: "100" },

  { prop: "name", label: "保险柜名称", minWidth: "100" },

  { prop: "tid", label: "TID", minWidth: "100" },
  { prop: "createTime", label: "创建时间", minWidth: "100" },
  { prop: "operation", label: "操作", minWidth: "100" },
];
const FormConfig = {
  formItems: [
    {
      label: "保险柜名称:",
      placeholder: "",
      field: "name",
      type: "input",
    },
    {
      label: "保险柜编号:",
      placeholder: "",
      field: "code",
      type: "input",
    },
    {
      label: "Tid:",
      placeholder: "",
      field: "tid",
      type: "input",
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
      label: "保险柜名称:",
      placeholder: "",
      field: "name",
      type: "input",
      span: 22,
    },
    {
      label: "保险柜编号:",
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
