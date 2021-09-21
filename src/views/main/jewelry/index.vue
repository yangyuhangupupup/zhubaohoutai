<!--
 * @Descripttion: 
 * @Author: yyh
 * @Date: 2021-09-21 15:16:26
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-21 18:51:39
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
        <template #status="scope">
          <el-tag v-if="scope.row.status == 1">在库</el-tag>
          <el-tag type="danger" v-if="scope.row.status == 2">已领用</el-tag>
          <el-tag type="success" v-if="scope.row.status == 3">已售出</el-tag>
        </template>
        <template #isScan="scope">
          <el-tag type="success" v-if="scope.row.isScan == 1">已盘点</el-tag>
          <el-tag type="danger" v-if="scope.row.isScan == 2">未盘点</el-tag>
        </template>
        <template #scanStatus="scope">
          <el-tag type="success" v-if="scope.row.scanStatus == 1"
            >账实相符</el-tag
          >
          <el-tag type="danger" v-if="scope.row.scanStatus == 2"
            >账实不符</el-tag
          >
        </template>
        <template #operation="scope">
          <el-button type="text" size="small" @click="editTemp(scope.row)">
            <i class="el-icon-edit"></i> 编辑</el-button
          >
        </template>
      </yh-table>
    </div>
    <yh-dialog
      v-model="dialogVisible"
      dialogWidth="700px"
      :DialogFormData="DialogFormData"
      :title="dialogTitle"
      :DialogFormConfig="DialogFormConfig"
      :defaultInfo="defaultInfo"
      @DialogEditClick="DialogEditClick"
    >
    </yh-dialog>
  </div>
</template>

<script>
import YhTable from "@/base-ui/table";
import Configs from "./config";
import YhDialog from "@/base-ui/dialog";
import bus from "@/utils/bus";
import { getJewelryList, getTrayList, updateJewelry } from "@/service";
import dayjs from "dayjs";

export default {
  components: {
    YhTable,
    YhDialog,
  },
  data() {
    return {
      TableConfig: Configs.tableConfig,
      page: { current: 1, size: 10 },
      tableData: [],
      totalCount: 0,
      storeId: null, //门店ID
      dialogVisible: false,
      dialogTitle: "修改珠宝信息",
      DialogFormConfig: Configs.DialogFormConfig,
      DialogFormData: Configs.DialogFormData,
      defaultInfo: {},
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
    this.getTray();
    bus.$on("readCard", (e) => {
      this.DialogFormData.tid = e;
    });
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
      const { data } = await getJewelryList(defaultCondition);
      console.log(data, "dada");
      this.tableData = data.records;
      this.totalCount = data.total;
    },
    editTemp(row) {
      console.log(row, "www");
      this.dialogTitle = "修改珠宝信息";
      this.dialogVisible = true;
      this.defaultInfo = { ...row };
    },
    async DialogEditClick(flag) {
      if (flag) {
        let res = await updateJewelry({
          ...this.DialogFormData,
          deviceId: this.DialogFormData.deviceName,
          storeId: this.storeId,
        });
        console.log(res, "ssssss");
        if (res.code == 0) {
          this.dialogVisible = false;
          this.getList();
          this.$message({
            type: "success",
            message: "操作成功!",
          });
        }
      } else {
        this.$message.error("带星号的为必填项，请填写相关信息！");
      }
    },

    //获取托盘列表
    async getTray() {
      let res = await getTrayList({
        storeId: this.storeId,
        current: 1,
        size: 100,
      });
      console.log(res, "asdasdasdasd");
      this.DialogFormConfig.formItems = this.DialogFormConfig.formItems.map(
        (item) => {
          if (item.field == "deviceName")
            item.options = res?.data?.records.map((otem) => {
              return {
                label: otem.name,
                value: otem.id,
              };
            });
          return item;
        }
      );
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
