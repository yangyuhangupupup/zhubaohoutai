<!--
 * @Descripttion: 
 * @Author: yyh
 * @Date: 2021-09-11 18:41:35
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-11 20:19:29
-->
<template>
  <div class="base-echart" ref="echartDivRef"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      echartInstance: null,
    };
  },
  methods: {
    initEchart() {
      this.echartInstance = echarts.init(this.$refs.echartDivRef);
      this.echartInstance.setOption(this.option);
    },
  },
  mounted() {
    this.initEchart();
    window.onresize = () => {
      this.echartInstance.resize();
    };
  },
};
</script>

<style lang="less" scoped>
.base-echart {
  height: 100%;
  width: 100%;
}
</style>
