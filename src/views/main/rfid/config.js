/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-09-12 15:01:03
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-21 18:25:58
 */

const tableConfig = [
  {
    prop: "rfidTid",
    label: "RFID",
    minWidth: "100",
    showoverflowtooltip: true,
  },
  { prop: "rfidStatus", label: "绑定状态", minWidth: "100" },
  { prop: "registerTime", label: "注册日期", minWidth: "100" },
  { prop: "bindTime", label: "绑定时间", minWidth: "100" },
  { prop: "operation", label: "操作", minWidth: "100" },
];
const FormConfig = {
  formItems: [],
  labelWidth: "100px",
  itemStyle: { padding: "0px 0px" },
  // colLayout: { xl: 6, lg: 8, md: 12, sm: 24, xs: 24 }
};
const DialogFormConfig = {
  formItems: [
    {
      label: "Tid:",
      placeholder: "",
      field: "rfidTid",
      type: "input",
      span: 20,
    },
    {
      type: "button",
      label: "",
      field: "",
      span: 4,
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
