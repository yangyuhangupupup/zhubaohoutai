<!--
 * @Descripttion: 
 * @Author: yyh
 * @Date: 2021-09-11 17:15:57
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-12 00:08:12
-->
<template>
  <div class="dashboard">
    <div class="left">
      <div class="left-top">
        <Bar></Bar>
      </div>
      <div class="left-bottom">
        <div class="totalsales">
          <sales-line></sales-line>
        </div>
        <div class="salesvolume">
          <num-line></num-line>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="name">
        <div class="item">
          <span class="sub_title">今日热销的珠宝 : </span>
          <span class="sub_name red">祖母绿</span>
        </div>
        <div class="item">
          <span class="sub_title">今日热销的珠宝 : </span>
          <span class="sub_name green">玉石</span>
        </div>
        <div class="item">
          <span class="sub_title">今日热销的珠宝 : </span>
          <span class="sub_name blue">翡翠</span>
        </div>
      </div>
      <div class="godown">
        <div class="title_info">当天异常入库信息</div>
        <div class="table">
          <div class="table_header">
            <span>珠宝名称</span>
            <span>分类等级</span>
            <span>规格</span>
            <span>数量</span>
            <span>存放保险柜编号</span>
          </div>
          <div
            class="table_body"
            v-for="(item, index) in 5"
            :class="index % 2 === 0 ? '' : 'iseven'"
          >
            <span>恋人星空</span>
            <span>等级一级</span>
            <span>40mg/g</span>
            <span>1</span>
            <span>A-1125</span>
          </div>
        </div>
      </div>
      <div class="outbound">
        <div class="title_info">当天异常出库信息</div>
        <div class="table">
          <div class="table_header">
            <span>珠宝名称</span>
            <span>分类等级</span>
            <span>规格</span>
            <span>数量</span>
            <span>存放保险柜编号</span>
          </div>
          <div
            class="table_body"
            v-for="(item, index) in 5"
            :class="index % 2 === 0 ? '' : 'iseven'"
          >
            <span>恋人星空</span>
            <span>等级一级</span>
            <span>40mg/g</span>
            <span>1</span>
            <span>A-1125</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bar from "../../../components/echarts/bar.vue";
import salesLine from "../../../components/echarts/line.vue";
import numLine from "../../../components/echarts/line1.vue";
export default {
  components: {
    Bar,
    salesLine,
    numLine,
  },
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: "myfont";
  src: url("../../../assets/fonts/TengXiangJiaLiChaoCuYuanFan-1.ttf");
}
.dashboard {
  box-sizing: border-box;
  height: 100%;
  width: 100%;

  display: flex;
  .left {
    width: 72%;
    display: flex;
    flex-direction: column;
    .left-top {
      height: 40%;
      background: #fff;
      border-radius: 15px;
    }
    .left-bottom {
      margin-top: 1%;
      flex: 59%;

      border-radius: 15px;
      display: flex;
      justify-content: space-between;
      .totalsales,
      .salesvolume {
        width: 49%;
        background: #fff;
        border-radius: 15px;
      }
    }
  }
  .right {
    width: 27%;
    border-radius: 15px;
    margin-left: 1%;
    background: #fff;
    display: flex;
    flex-direction: column;
    .name {
      height: 25%;

      display: flex;
      flex-direction: column;
      .item {
        flex: 1;
        display: flex;
        align-items: center;

        .sub_title {
          font-size: 20px;
          color: #999;
          text-align: right;
          margin-left: 15%;
        }
        .sub_name {
          font-size: 40px;
          padding-left: 20px;
          font-family: "myfont" !important;
        }
      }
    }
    .godown,
    .outbound {
      flex: 1;

      padding: 20px;
      .title_info {
        height: 20px;
        font-size: 20px;
        color: #333333;
        font-weight: 600;
      }
      .table {
        height: calc(100% - 20px);

        margin-top: 20px;
        box-sizing: border-box;

        .table_header,
        .table_body {
          background: #7660cc;
          height: 15%;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          display: flex;
          align-items: center;
          color: #fff;
          justify-content: space-around;
          span {
            width: 20%;
            text-align: center;
          }
        }
        .table_body {
          background: #fff;
          color: #333;
        }
      }
    }
  }
  .green {
    color: #6cc042;
  }
  .blue {
    color: #48a0ff;
  }
  .red {
    color: #f45c36;
  }
  .iseven {
    background: #f6f3ff !important;
    border-radius: 0 !important;
  }
}
</style>
