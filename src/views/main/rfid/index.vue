<template>
  <div class="wrapper">
    <div class="search">
      <yh-form ref="yhform" v-bind="FormConfig" :FormData="FormData">
        <template #searchBtns>
          <el-button type="purple" size="small" @click="addTemp"
            >添加</el-button
          >
          <!-- <el-button size="small" type="purple" @click="searchData"
            >查询</el-button
          > -->
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
          <!-- <el-button type="text" size="small" @click="lookDetail(scope.row.id)">
            <i class="el-icon-tickets"></i>
            详情</el-button
          >
          <el-button type="text" size="small" @click="editTemp(scope.row)">
            <i class="el-icon-edit"></i> 编辑</el-button
          > -->
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
      dialogWidth="700px"
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
import { removeRfid, saveRfid, getRfidList } from "@/service";
import dayjs from "dayjs";
import bus from "@/utils/bus";
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
    bus.$on("readCard", (e) => {
      this.DialogFormData.rfidTid = e;
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

    async searchData() {
      console.log(this.FormData);
      this.getList(this.FormData);
    },
    addTemp() {
      this.defaultInfo = {};
      this.dialogTitle = "新增标签";
      this.dialogVisible = true;
    },
    editTemp(row) {
      this.dialogTitle = "编辑标签";
      this.dialogVisible = true;
      this.defaultInfo = { ...row };
    },
    async getList(condition) {
      let defaultCondition = {
        ...this.page,
        storeId: this.storeId,
        ...condition,
      };
      const { data } = await getRfidList(defaultCondition);
      console.log(data, "dadada");
      this.tableData = data.records.map((item) => {
        if (item.rfidStatus == "1") {
          item.rfidStatus = "已绑定";
        } else {
          item.rfidStatus = "未绑定";
        }
        return item;
      });
      this.totalCount = data.total;

      //   console.log(data);
    },
    async addSubmitClick(flag) {
      if (flag) {
        let res = await saveRfid({
          ...this.DialogFormData,
          storeId: this.storeId,
        });
        console.log(res, 111);
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
    DialogEditClick(flag) {
      this.addSubmitClick(flag);
    },
    async deleteInfo(id) {
      let { code } = await removeRfid(id);

      if (code == 0) {
        this.getList();
        this.$message({
          type: "success",
          message: "删除成功!",
        });
      }
    },
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
<style>
.el-popper,
.el-popover {
  background: #fff !important;
  border: 1px solid #eee;
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
