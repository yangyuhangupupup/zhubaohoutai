<!--
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-08-30 15:02:49
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-15 22:32:19
-->

<template>
  <el-dialog
    class="yhdialog"
    :title="title"
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
    :show-close="false"
    :width="dialogWidth"
  >
    <div class="content">
      <yh-form
        :FormData="DialogFormData"
        :isDialogForm="true"
        ref="yhDialogForm"
        v-bind="DialogFormConfig"
        @selectChange="selectChange"
      >
      </yh-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <slot name="readcard"></slot>
      <el-button @click="close">关 闭</el-button>
      <el-button type="primary" @click="save">{{ confirmTitle }}</el-button>
    </span>
  </el-dialog>
</template>

<script>
import YhForm from "@/base-ui/form";
export default {
  components: {
    YhForm,
  },
  model: {
    prop: "dialogVisible",
    event: "update",
  },
  props: {
    title: {
      type: String,
      require: true,
    },
    dialogWidth: {
      type: String,
      default: "50%",
    },
    dialogVisible: {
      type: Boolean,
      default: true,
    },
    DialogFormData: {
      type: Object,
      require: true,
    },
    DialogFormConfig: {
      type: Object,
      require: true,
    },
    confirmTitle: {
      type: String,
      default: "确 定",
    },
    defaultInfo: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {};
  },
  watch: {
    defaultInfo: {
      handler(newValue) {
        this.DialogFormConfig.formItems.forEach((item) => {
          this.DialogFormData[item.field] = newValue[item.field];
          this.DialogFormData.id = newValue?.id;
        });
      },
      deep: true,
    },
  },
  methods: {
    close() {
      this.$emit("update", false);
    },
    save() {
      // // this.$emit("update", false);
      // this.$emit("update");
      if (Object.keys(this.defaultInfo).length < 2) {
        //新增的确定

        this.$emit("DialogSubmitClick", this.$refs.yhDialogForm.submitForm());
      } else {
        this.$emit("DialogEditClick", this.$refs.yhDialogForm.submitForm());
      }
    },
    selectChange(val) {
      this.$emit("selectChange", val);
    },
  },
};
</script>

<style lang="less" scoped>
.yhdialog {
  ::v-deep .el-dialog__body {
    padding: 0 !important;
  }
}
</style>
