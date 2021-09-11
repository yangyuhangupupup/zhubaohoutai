<!--
 * @Descripttion: 
 * @Author: yyh
 * @Date: 2021-09-11 20:27:03
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-11 22:03:48
-->
<template>
  <div class="line">
    <div class="first">销售数量 (件)</div>
    <div class="second">
      <div class="item">
        <div class="title">今日</div>
        <div class="info">
          <span class="num">1125</span>
          <span class="font">件</span>
        </div>
      </div>
      <div class="item">
        <div class="title">昨日</div>
        <div class="info">
          <span class="num green">1255</span>
          <span class="font">件</span>
        </div>
      </div>
      <div class="item">
        <div class="title">本周</div>
        <div class="info">
          <span class="num blue">1.65</span>
          <span class="font">件</span>
        </div>
      </div>
    </div>
    <div class="echart">
      <base-echart :option="option"></base-echart>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import BaseEchart from "./base-echart.vue";
export default {
  components: {
    BaseEchart,
  },
  data() {
    return {
      option: {
        title: {
          text: "近七天销售趋势",
        },
        backgroundColor: "#fff",
        tooltip: {
          trigger: "axis",
          backgroundColor: "#e7ecf7",
        },
        grid: {
          top: "25%",
          left: "10%",
          right: "5%",
          bottom: "10%",
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: "#ececec",
              },
            },

            axisLabel: {
              //坐标轴刻度标签的相关设置
              textStyle: {
                color: "#333",
                padding: 5,
                fontSize: 12,
              },
              formatter: function(data) {
                return data;
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            data: [
              "06-21",
              "06-22",
              "06-23",
              "06-24",
              "06-25",
              "06-26",
              "06-27",
            ],
          },
        ],
        yAxis: [
          {
            name: "单位:万元",
            nameTextStyle: {
              color: "#333",
              fontSize: 14,
              padding: 10,
            },
            min: 0,
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: "#ececec",
              },
            },
            axisLabel: {
              //坐标轴刻度标签的相关设置
              textStyle: {
                color: "#333",
                padding: 0,
                fontSize: 12,
              },
              formatter: function(data) {
                return data;
              },
            },
          },
        ],
        series: [
          {
            name: "上学",
            type: "line",
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
              normal: {
                width: 2,
                color: "rgba(131, 91, 244,1)", // 线条颜色
              },
              borderColor: "rgba(0,0,0,.4)",
            },

            tooltip: {
              show: true,
            },
            areaStyle: {
              //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(131, 91, 244)",
                    },
                    {
                      offset: 1,
                      color: "rgba(250, 249, 255, 0)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(204, 191, 255, 0.5)", //阴影颜色
                shadowBlur: 10, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              },
            },
            data: ["40", "60", "22", "85", "50", "40", "40"],
          },
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped>
.line {
  width: 100%;
  height: 100%;

  padding: 10px;
  box-sizing: border-box;
  .first {
    font-weight: 600;
    color: #333;
    height: 30px;
  }
  .second {
    height: 100px;
    margin-top: 25px;
    display: flex;
    align-items: center;
    .item {
      flex: 1;

      height: 100%;
      text-align: center;
      .title {
        color: #666;
        font-size: 20px;
      }
      .info {
        margin-top: 8px;
        .num {
          font-size: 50px;
          color: #f45f3a;
          font-weight: 600;
        }
        .green {
          color: #6cc042;
        }
        .blue {
          color: #48a0ff;
        }
        .font {
          margin-left: 5px;
          font-size: 20px;
          color: #333;
        }
      }
    }
  }
  .echart {
    height: calc(100% - 155px);
  }
}
</style>
