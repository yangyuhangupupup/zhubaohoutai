/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-09-12 15:01:03
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-19 22:08:18
 */

const tableConfig = [
  { prop: "code", label: "分类编号", minWidth: "100" },

  { prop: "name", label: "分类名称", minWidth: "100" },
  { prop: "level", label: "分类等级", minWidth: "100" },
  { prop: "operation", label: "操作", minWidth: "100" },
];
const FormConfig = {
  formItems: [
    // {
    //   label: "分类名称:",
    //   placeholder: "",
    //   field: "name",
    //   type: "input",
    // },
    // {
    //   label: "分类编号:",
    //   placeholder: "",
    //   field: "code",
    //   type: "input",
    // },
  ],
  labelWidth: "100px",
  itemStyle: { padding: "0px 0px" },
  // colLayout: { xl: 6, lg: 8, md: 12, sm: 24, xs: 24 }
};
const DialogFormConfig = {
  formItems: [
    {
      label: "分类名称:",
      placeholder: "",
      field: "name",
      type: "input",
    },
    {
      label: "分类编号:",
      placeholder: "",
      field: "code",
      type: "input",
    },
    {
      label: "父级分类:",
      placeholder: "",
      field: "pid",
      type: "select",
      options: [],
      hidden: false,
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
