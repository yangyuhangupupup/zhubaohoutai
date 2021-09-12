<!--
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-08-27 17:15:53
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-12 16:36:33
-->
<template>
  <div class="tableWrapper">
    <template>
      <div class="content">
        <el-table
          :data="tableData"
          style="width: 100%;"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            v-if="showSelection"
            type="selection"
            width="50"
            align="center"
          >
          </el-table-column>
          <el-table-column
            v-if="showIndex"
            type="index"
            align="center"
            width="50"
            label="序号"
          >
            <template scope="scope">
              <span>{{
                scope.$index + (page.current - 1) * page.size + 1
              }}</span>
            </template>
          </el-table-column>

          <template v-for="item in tableConfig">
            <el-table-column
              :prop="item.prop"
              :label="item.label"
              :min-width="item.minWidth"
              :show-overflow-tooltip="item.showoverflowtooltip"
              align="center"
            >
              <template slot-scope="scope">
                <slot :name="item.prop" :row="scope.row">
                  {{ scope.row[item.prop] }}
                </slot>
              </template>
            </el-table-column>
          </template>
        </el-table>
      </div>

      <div class="footer">
        <slot name="footer">
          <el-pagination
            background=""
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page.current"
            :page-sizes="[10, 20, 30, 50]"
            :page-size="page.size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalCount"
          >
          </el-pagination>
        </slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  model: {
    prop: "page",
    event: "update",
  },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    tableConfig: {
      type: Array,
      require: true,
    },
    showSelection: {
      type: Boolean,
      default: true,
    },
    showIndex: {
      type: Boolean,
      default: true,
    },
    totalCount: {
      type: Number,
      default: 0,
    },
    page: {
      type: Object,
      default: () => ({ current: 0, size: 10 }),
    },
  },
  data() {
    return {};
  },
  methods: {
    handleSelectionChange(val) {
      console.log(val);
    },
    handleSizeChange(size) {
      this.$emit("update", { ...this.page, size });
    },
    handleCurrentChange(current) {
      this.$emit("update", { ...this.page, current });
    },
  },
};
</script>

<style lang="less" scoped>
::v-deep {
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #551bf0;
    color: #fff;
  }
  .el-select .el-input__inner {
    border-color: #551bf0;
  }
}

.tableWrapper {
  height: 100%;
  background: #f8f8f8;

  .content {
    height: calc(100% - 45px);
    background: #fff;
  }
  ::v-deep.el-table {
    overflow-y: auto;

    border-bottom: 1px solid #ebeef5;

    overflow: auto;
    .el-table__body-wrapper {
    }

    /* .el-input__icon {
      line-height: 32px;
    } */
    /* .el-table__header-wrapper tr th {
      background: #f7f8fa;
      box-shadow: 0px 1px 0px 0px #ebedf0;
    } */
    .el-table__header-wrapper tr th .cell {
      color: #323233;
    }
  }
  .footer {
    padding-top: 5px;
    border: 1px solid transparent;
    padding-right: 10px;
    height: 45px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    // background: rgb(248, 248, 248);
    background: #fff;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
}
</style>
