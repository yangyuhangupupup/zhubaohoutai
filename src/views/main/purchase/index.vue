<template>
  <div class="wrapper">
    <div class="search">
      <yh-form ref="yhform" v-bind="FormConfig" :FormData="FormData">
        <template #searchBtns>
          <el-button type="purple" size="small" @click="addTemp"
            >添加</el-button
          >
          <el-button size="small" type="purple" @click="searchData"
            >查询</el-button
          >
        </template>
      </yh-form>
    </div>
    <div class="table">
      <yh-table
        v-model="page"
        :tableData="tableData"
        :tableConfig="TableConfig"
        :showSelection="false"
        :totalCount="totalCount"
      >
        <template #status="scope">
          <el-tag v-if="scope.row.status == 1">创建待审核</el-tag>
          <el-tag type="success" v-if="scope.row.status == 2">已审核</el-tag>
        </template>
        <template #operation="scope">
          <el-popconfirm
            title="您确定审核吗？"
            style="margin-right:10px"
            @confirm="checkInfo(scope.row.id)"
          >
            <el-button slot="reference" type="text" size="small"
              ><i class="el-icon-view"></i>审核</el-button
            >
          </el-popconfirm>
          <el-button type="text" size="small" @click="editTemp(scope.row)">
            <i class="el-icon-edit"></i> 编辑</el-button
          >
          <el-popconfirm
            title="您确定删除吗？"
            style="margin-left:10px"
            @confirm="deleteInfo(scope.row.id)"
          >
            <el-button slot="reference" type="text" size="small"
              ><i class="el-icon-delete"></i>删除</el-button
            >
          </el-popconfirm>
        </template>
      </yh-table>
    </div>
    <yh-dialog
      v-model="dialogVisible"
      dialogWidth="1000px"
      :DialogFormData="DialogFormData"
      :title="dialogTitle"
      :DialogFormConfig="DialogFormConfig"
      @DialogSubmitClick="addSubmitClick"
      :defaultInfo="defaultInfo"
      @DialogEditClick="DialogEditClick"
    >
    </yh-dialog>
  </div>
</template>

<script>
import YhForm from "@/base-ui/form";
import YhTable from "@/base-ui/table";
import Configs from "./config";
import YhDialog from "@/base-ui/dialog";
import {
  getPurchaseList,
  savePurchase,
  updatePurchase,
  removePurchase,
  getCategoryList,
  checkPurchase,
} from "@/service";
import dayjs from "dayjs";

export default {
  components: {
    YhForm,
    YhTable,
    YhDialog,
  },
  data() {
    return {
      FormConfig: Configs.FormConfig,
      TableConfig: Configs.tableConfig,
      FormData: Configs.FormData,
      page: { current: 1, size: 10 },
      dialogVisible: false,
      dialogTitle: "新增托盘",
      DialogFormConfig: Configs.DialogFormConfig,
      DialogFormData: Configs.DialogFormData,
      tableData: [],
      defaultInfo: {},
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
    this.getCateGory();
  },
  methods: {
    //格式化utc时间
    formatUTCDate(time) {
      return dayjs
        .utc(time)
        .utcOffset(8)
        .format("YYYY-MM-DD");
    },

    async searchData() {
      console.log(this.FormData);
      this.getList(this.FormData);
    },
    addTemp() {
      this.defaultInfo = {};
      this.DialogFormConfig.formItems = this.DialogFormConfig.formItems.map(
        (item) => {
          if (item.hidden == true) {
            item.hidden = false;
          }
          if (item.disabled == true) {
            item.disabled = false;
          }
          return item;
        }
      );

      this.dialogTitle = "新增采购单";
      this.dialogVisible = true;
    },
    editTemp(row) {
      console.log(row, "rowowowow");

      this.dialogTitle = "编辑采购单";
      this.DialogFormConfig.formItems = this.DialogFormConfig.formItems.map(
        (item) => {
          if (item.hidden == false) {
            item.hidden = true;
          }
          if (item.disabled == false) {
            item.disabled = true;
          }
          return item;
        }
      );

      this.dialogVisible = true;
      this.defaultInfo = { ...row };
      if (row.fatherId != null) {
        this.defaultInfo.itemId = [row.fatherId, row.itemId];
      } else {
        this.defaultInfo.itemId = [row.itemId];
      }
    },
    async getList(condition) {
      let defaultCondition = {
        ...this.page,
        storeId: this.storeId,
        ...condition,
      };
      const { data } = await getPurchaseList(defaultCondition);

      this.tableData = data.records;
      this.totalCount = data.total;
    },
    async addSubmitClick(flag) {
      if (flag) {
        let res = await savePurchase({
          ...this.DialogFormData,
          storeId: this.storeId,
          itemId: this.DialogFormData.itemId[
            this.DialogFormData.itemId.length - 1
          ],
        });
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
    async DialogEditClick(flag) {
      if (flag) {
        let res = await updatePurchase({
          ...this.DialogFormData,
          storeId: this.storeId,
          itemId: this.DialogFormData.itemId[
            this.DialogFormData.itemId.length - 1
          ],
        });
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
    async deleteInfo(id) {
      let { code } = await removePurchase(id);
      if (code == 0) {
        this.getList();
        this.$message({
          type: "success",
          message: "删除成功!",
        });
      }
    },
    async checkInfo(id) {
      let { code } = await checkPurchase(id);
      if (code == 0) {
        this.getList();
        this.$message({
          type: "success",
          message: "确认采购单成功!",
        });
      }
    },
    async getCateGory() {
      let { data } = await getCategoryList({
        storeId: this.storeId,
      });
      // console.log(data, "11datadatadata");
      this.DialogFormConfig.formItems = this.DialogFormConfig.formItems.map(
        (item) => {
          if (item.field === "itemId") {
            item.options = data;
          }
          return item;
        }
      );
    },
  },
};
</script>
<style>
.el-scrollbar__wrap {
  overflow-x: hidden;
  height: 200px;
}
</style>
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
