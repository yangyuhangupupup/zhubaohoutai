<!--
 * @Descripttion: 
 * @Author: yyh
 * @Date: 2021-09-09 21:01:53
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-21 18:54:00
-->
<template>
  <div class="nav-menu">
    <el-menu default-active="2" class="el-menu-vertical-demo" router>
      <template v-for="item in userMenus">
        <template v-if="item.type === 1">
          <el-submenu style="padding-left:0px" :index="1 + ''">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item
              :index="subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
            >
              <!-- <i v-if="item.icon" :class="item.icon"></i> -->
              <span style="margin-left:30px">{{ subItem.name }}</span>
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.path" style="padding-left:40px">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import userMenus from "@/data";
export default {
  data() {
    return {
      userMenus,
    };
  },
};
</script>

<style lang="less" scoped>
.el-menu {
  border: none;
}
</style>
