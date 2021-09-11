<!--
 * @Descripttion: 
 * @Author: yyh
 * @Date: 2021-09-11 18:56:38
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-11 20:22:31
-->
<template>
  <div class="bar">
    <base-echart :option="option"></base-echart>
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
          text: "珠宝总分类数量",
          padding: 20,
        },
        backgroundColor: "#fff",
        grid: {
          top: "25%",
          left: "2%",
          right: "2%",
          bottom: "3%",
          containLabel: true,
        },

        xAxis: [
          {
            data: [
              "分类一级",
              "分类一级",
              "分类一级",
              "分类一级",
              "分类一级",
              "分类一级",
              "分类一级",
              "分类一级",
              "分类一级",
              "分类一级",
            ],
            axisLabel: {
              color: "#000",
              textStyle: {
                fontSize: 12,
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            name: "单位：件",
            type: "value",
            nameTextStyle: { lineHeight: 25 },
            axisLabel: {
              color: "#000",
              textStyle: {
                fontSize: 12,
              },
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            type: "bar",
            data: [826, 673, 588, 782, 779, 855, 588, 782, 779, 855],
            barWidth: "18px",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(89, 34, 240,0.9)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#fff", // 100% 处的颜色
                    },
                  ],
                  false
                ),
                barBorderRadius: [30, 30, 0, 0],
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped>
.bar {
  height: 100%;
  width: 100%;
}
</style>
