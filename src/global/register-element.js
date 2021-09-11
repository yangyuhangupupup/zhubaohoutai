/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-09-05 15:35:26
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-11 16:14:07
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
];
export default function(Vue) {
  for (const component of components) {
    Vue.component(component.name, component);
  }
  Vue.prototype.$message = Message;
}
