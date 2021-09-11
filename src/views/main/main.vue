<!--
 * @Descripttion: 
 * @Author: yyh
 * @Date: 2021-09-05 14:59:09
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-11 16:09:27
-->
<template>
  <div class="main">
    <el-container class="page-content">
      <el-header>
        <nav-header></nav-header>
      </el-header>
      <el-container class="main-content">
        <el-aside width="200px">
          <nav-menu></nav-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from "@/components/nav-menu";
import NavHeader from "@/components/nav-header";
export default {
  components: {
    NavMenu,
    NavHeader,
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .page-content {
    width: 100%;
    height: 100%;
    .el-header {
      height: 100px;
      background: linear-gradient(90deg, #7660cc 0%, #8360e3 100%);
    }
    .main-content {
      height: calc(100% - 100px);
      background: #f5f5f9;

      .el-aside {
        background: #fff;
      }
    }
  }
}
</style>
