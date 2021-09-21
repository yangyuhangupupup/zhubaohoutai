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
        <template #role="scope">
          <span>{{ filterName(scope.row.role) }}</span>
        </template>
        <template #operation="scope">
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
      dialogWidth="600px"
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
import { getUserList, removeUser, saveUser, updateUser } from "@/service";
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

      this.dialogTitle = "新增角色";
      this.dialogVisible = true;
    },
    editTemp(row) {
      this.dialogTitle = "编辑角色";
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
      this.defaultInfo.role = this.filterName(row.role);
    },
    async getList(condition) {
      let defaultCondition = {
        ...this.page,
        storeId: this.storeId,
        ...condition,
      };
      const { data } = await getUserList(defaultCondition);

      this.tableData = data.records;
      this.totalCount = data.total;
    },
    async addSubmitClick(flag) {
      if (flag) {
        let res = await saveUser({
          ...this.DialogFormData,
          storeId: this.storeId,
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
        let res = await updateUser({
          ...this.DialogFormData,
          storeId: this.storeId,
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
      let { code } = await removeUser(id);
      if (code == 0) {
        this.getList();
        this.$message({
          type: "success",
          message: "删除成功!",
        });
      }
    },

    filterName(value) {
      switch (+value) {
        case 1:
          return "系统管理员";
        case 2:
          return "仓库库管";
        case 3:
          return "销售业务员";
      }
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
