<!--
 * @Descripttion: 
 * @Author: yyh
 * @Date: 2021-09-21 15:16:26
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-21 16:37:27
-->
<template>
  <div class="wrapper">
    <div class="search"></div>
    <div class="table">
      <yh-table
        v-model="page"
        :tableData="tableData"
        :tableConfig="TableConfig"
        :showSelection="false"
        :totalCount="totalCount"
      >
      </yh-table>
    </div>
  </div>
</template>

<script>
import YhTable from "@/base-ui/table";
import Configs from "./config";

import { getOutWorkList } from "@/service";
import dayjs from "dayjs";

export default {
  components: {
    YhTable,
  },
  data() {
    return {
      TableConfig: Configs.tableConfig,
      page: { current: 1, size: 10 },
      tableData: [],
      totalCount: 0,
      storeId: null, //门店ID
    };
  },
  watch: {
    page: {
      handler(newValue) {
        console.log(newValue, 111);
        this.getList(newValue);
      },
      deep: true,
    },
  },
  created() {
    this.storeId = this.$store.state.login.userInfo.storeId;
    this.getList();
  },
  methods: {
    //格式化utc时间
    formatUTCDate(time) {
      return dayjs
        .utc(time)
        .utcOffset(8)
        .format("YYYY-MM-DD");
    },

    async getList(condition) {
      let defaultCondition = {
        ...this.page,
        storeId: this.storeId,
        ...condition,
      };
      const { data } = await getOutWorkList(defaultCondition);

      this.tableData = data.records;
      this.totalCount = data.total;

      //   console.log(data);
    },
  },
};
</script>

<style lang="less" scoped>
::v-deep {
  .el-button--purple {
    background: #7e60d9;
    color: #fff;
    border-color: #7e60d9;
  }
}
.wrapper {
  height: 100%;

  background: #fff;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  .search {
    display: flex;
    align-items: center;
  }
  .table {
    flex: 1;
    box-sizing: border-box;
    .el-button {
      color: #7d60d9;
    }
  }
}
</style>
