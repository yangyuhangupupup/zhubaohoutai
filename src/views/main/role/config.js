/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-09-12 15:01:03
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-21 16:58:11
 */

const tableConfig = [
  { prop: "username", label: "姓名", minWidth: "100" },
  { prop: "account", label: "账号", minWidth: "100" },
  { prop: "phone", label: "联系方式", minWidth: "100" },
  { prop: "role", label: "角色", minWidth: "100" },
  { prop: "operation", label: "操作", minWidth: "100" },
];
const FormConfig = {
  formItems: [
    {
      label: "姓名:",
      placeholder: "",
      field: "username",
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
      label: "姓名:",
      placeholder: "",
      field: "username",
      type: "input",
      span: 24,
      disabled: false,
    },

    {
      label: "账号:",
      placeholder: "",
      field: "account",
      type: "input",
      span: 24,
      hidden: false,
    },

    {
      label: "密码:",
      placeholder: "",
      field: "password",
      type: "input",
      span: 24,
      hidden: false,
    },
    {
      label: "角色:",
      placeholder: "",
      field: "role",
      type: "select",
      options: [
        {
          label: "系统管理员",
          value: 1,
        },
        {
          label: "仓库库管",
          value: 2,
        },
        {
          label: "销售业务员",
          value: 3,
        },
      ],
      span: 24,
    },
    {
      label: "手机号:",
      placeholder: "",
      field: "phone",
      type: "input",
      span: 24,
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
