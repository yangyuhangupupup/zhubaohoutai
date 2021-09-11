<!--
 * @Descripttion: 
 * @Author: yyh
 * @Date: 2021-09-11 15:12:01
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-11 16:47:58
-->

<template>
  <div class="header">
    <div class="left">
      <img src="../../assets/images/logo.png" alt="" />
      <span>珠宝盘点管理系统</span>
    </div>
    <div class="right">
      <el-avatar
        size="medium"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      ></el-avatar>
      <span class="username">admin,欢迎登录</span>
      <span class="password"><i class="el-icon-edit-outline"></i>修改密码</span>
      <span class="exit"><i class="el-icon-switch-button"></i>退出</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    padding-left: 30px;
    height: 100%;
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
    }
    span {
      color: #fff;
      font-size: 22px;
      font-weight: 600;
      margin-left: 30px;
      letter-spacing: 3px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 14px;
    .exit,
    .password {
      margin: 0 15px;
      cursor: pointer;
    }
    .username {
      margin: 0 20px 0 5px;
    }
    i {
      margin: 0 5px;
    }
  }
}
</style>
