<!--
 * @Descripttion: 
 * @Author: yyh
 * @Date: 2021-08-09 11:39:11
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-21 18:55:10
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
canvas {
  border-radius: 15px;
}
.el-popper,
.el-popover {
  background: #fff !important;
  border: 1px solid #eee;
}
/* 修改表格的滚动条*/
.el-table__body-wrapper::-webkit-scrollbar {
  width: 5px;
  height: 10px;
}

/* 表格滚动条的滑块*/
.el-table__body-wrapper::-webkit-scrollbar-thumb {
  background-color: #7a60d3;
  border-radius: 3px;
}
/**修改全局的滚动条*/
/**滚动条的宽度*/
::-webkit-scrollbar {
  width: 5px;
  height: 5px; /*横向*/
}

/*滚动条的滑块*/
::-webkit-scrollbar-thumb {
  background-color: #7a60d3;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb {
  background-color: #fff;
}
</style>
