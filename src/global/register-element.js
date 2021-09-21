/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-09-05 15:35:26
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-20 23:58:34
 */
import {
  Button,
  Row,
  Col,
  Icon,
  Form,
  Input,
  FormItem,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Avatar,
  Table,
  TableColumn,
  Pagination,
  Popconfirm,
  Select,
  Option,
  Dialog,
  MessageBox,
  Tag,
  DatePicker,
  Cascader,
} from "element-ui";
const components = [
  Button,
  Row,
  Col,
  Icon,
  Form,
  Input,
  FormItem,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Avatar,
  Submenu,
  Table,
  TableColumn,
  Pagination,
  Popconfirm,
  Select,
  Option,
  Dialog,
  Tag,
  DatePicker,
  Cascader,
];
export default function(Vue) {
  for (const component of components) {
    Vue.component(component.name, component);
  }
  Vue.prototype.$message = Message;
  Vue.prototype.$confirm = MessageBox.confirm;
}
