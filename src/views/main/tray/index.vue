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
        <template #operation="scope">
          <el-button type="text" size="small" @click="lookDetail(scope.row.id)">
            <i class="el-icon-tickets"></i>
            详情</el-button
          >
          <el-button type="text" size="small" @click="editTemp(scope.row)">
            <i class="el-icon-edit"></i> 编辑</el-button
          >
          <el-popconfirm
            title="您确定删除吗？"
            style="margin-left:10px"
            @onConfirm="deleteInfo(scope.row.id)"
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
      dialogWidth="700px"
      :DialogFormData="DialogFormData"
      :title="dialogTitle"
      :DialogFormConfig="DialogFormConfig"
      @DialogSubmitClick="addSubmitClick"
      :defaultInfo="defaultInfo"
      @DialogEditClick="DialogEditClick"
    >
      <template #form>
        <yh-form :isDialogForm="true"></yh-form>
      </template>
    </yh-dialog>
  </div>
</template>

<script>
import YhForm from "@/base-ui/form";
import YhTable from "@/base-ui/table";
import Configs from "./config";
import YhDialog from "@/base-ui/dialog";
import { getTrayList, saveTray, removeTray, getSafeList } from "@/service";
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
      dialogTitle: "新增信息",
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
    this.getSafe(this.storeId);
  },
  methods: {
    //格式化utc时间
    formatUTCDate(time) {
      return dayjs
        .utc(time)
        .utcOffset(8)
        .format("YYYY-MM-DD");
    },
    //动态获取保险柜下拉框
    async getSafe(storeId) {
      let { data } = await getSafeList(storeId);
      this.FormConfig.formItems = this.FormConfig.formItems.map((item) => {
        if (item.field === "safeId") {
          item.options = data.map((item) => {
            return {
              value: item.id,
              label: item.name,
            };
          });
        }
        return item;
      });
      this.DialogFormConfig.formItems = this.DialogFormConfig.formItems.map(
        (item) => {
          if (item.field === "safeId") {
            item.options = data.map((item) => {
              return {
                value: item.id,
                label: item.name,
              };
            });
          }
          return item;
        }
      );
    },
    async searchData() {
      console.log(this.FormData);
      this.getList(this.FormData);
    },
    addTemp() {
      this.defaultInfo = {};
      this.dialogTitle = "新增信息";
      this.dialogVisible = true;
    },
    editTemp(row) {
      this.dialogTitle = "编辑信息";
      this.dialogVisible = true;
      this.defaultInfo = { ...row };
    },
    async getList(condition) {
      let defaultCondition = {
        ...this.page,
        storeId: this.storeId,
        ...condition,
      };
      const { data } = await getTrayList(defaultCondition);
      this.tableData = data.records.map((item) => {
        item.createTime = this.formatUTCDate(item.createTime);
        return item;
      });
      this.totalCount = data.total;

      //   console.log(data);
    },
    async addSubmitClick(flag) {
      if (flag) {
        let res = await saveTray({
          ...this.DialogFormData,
          storeId: this.storeId,
        });
        if (res.code && res.code == 1) {
          this.dialogVisible = false;
          this.getList();
          this.$message({
            type: "success",
            message: "操作成功!",
          });
        } else {
          return this.$message.error(res.message);
        }
      } else {
        this.$message.error("带星号的为必填项，请填写相关信息！");
      }
    },
    DialogEditClick(flag) {
      this.addSubmitClick(flag);
    },
    // async deleteInfo(id) {
    //   let { code } = await removeTechnicalManage(id);
    //   if (code && code == 1) {
    //     this.getList();
    //     this.$message({
    //       type: "success",
    //       message: "删除成功!"
    //     });
    //   }
    // },
    lookDetail(id) {
      console.log(id);
      this.showdiv = document.createElement("div");
      this.showdiv.setAttribute("id", "topdiv");
      this.showdiv.setAttribute(
        "style",
        "position:fixed;top:0;z-index:999999999;width:100%;height:100%"
      );

      this.showdiv.innerHTML = `<iframe id="idFrame" name="idFrame" src=//${document.location.host}/shya000/#/TechnicalManage/detail?id=${id} style="height:100%;width:100%"></iframe>`;
      window.parent.document.body.appendChild(this.showdiv);
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
