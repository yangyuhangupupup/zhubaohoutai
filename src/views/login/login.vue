<!--
 * @Descripttion: 
 * @Author: yyh
 * @Date: 2021-09-05 14:38:58
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-12 14:40:54
-->
<template>
  <div class="login">
    <div class="content">
      <el-row style="height:100%">
        <el-col :span="10" :offset="14" style="height:100%;">
          <div class="formwrap">
            <div class="img">
              <img
                src="../../assets/images/logo.png"
                style="width:100%;height:100%"
                alt=""
              />
            </div>
            <div class="title">欢迎 , 进入</div>
            <div class="subtitle">珠宝盘点管理系统</div>
            <div class="form">
              <div>用户名</div>
              <input type="text" v-model="account.account" />
              <div class="password">输入密码</div>
              <input type="password" v-model="account.password" />
            </div>
            <div class="go" @click="goHome">
              马上进入<i class="el-icon-right"></i>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: {
        account: "",
        password: "",
      },
    };
  },
  methods: {
    goHome() {
      this.$store.dispatch("login/accountLoginAction", { ...this.account });

      // return this.$message.error("您输入的账号密码有误");
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  display: flex;
  align-items: center;

  overflow: hidden;
  .content {
    background: url("../../assets/images/background.png") no-repeat center
      center;
    background-size: 100% 100%;
    margin: 0 auto;
    width: 1430px;
    height: 790px;

    .img {
      width: 50px;
      height: 60px;
    }
    .formwrap {
      // border: 1px solid red;
      height: 100%;
      padding-top: 14%;
      box-sizing: border-box;
      .title {
        font-size: 40px;
        font-weight: 700;
        color: #333;
        margin-top: 40px;
        margin-bottom: 30px;
      }
      .subtitle {
        font-size: 32px;

        color: #333;
        font-weight: 500;
      }
      .form {
        height: 245px;
        padding: 50px 0;

        box-sizing: border-box;
        font-size: 14px;
        color: #999;
        input {
          width: 400px;
          border: none;
          border-bottom: 1px solid #ccc;
          outline: none;
          margin-top: 10px;
        }
        .password {
          margin-top: 50px;
        }
      }
      .go {
        margin-top: 60px;
        width: 320px;
        height: 60px;
        background: #251a5e;
        border-radius: 20px;
        line-height: 60px;
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        line-height: 60px;
        color: #ffffff;
        letter-spacing: 5px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
}
</style>
