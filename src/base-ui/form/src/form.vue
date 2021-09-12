<!--
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-08-27 22:19:17
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-12 17:58:42
-->
<template>
  <div class="yh-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="searchForm">
      <el-form
        v-if="!isDialogForm"
        :inline="true"
        ref="Form"
        class="Form"
        :label-width="labelWidth"
        :model="FormData"
        :rules="rules"
      >
        <el-row style="height:100%" class="rowwrap">
          <el-col :span="colLayout.FirstSpan">
            <el-row>
              <template v-for="item in formItems">
                <el-col :span="colLayout.SecondSpan">
                  <transition name="fade">
                    <el-form-item
                      :prop="item.field"
                      :label="item.label"
                      :style="itemStyle"
                      v-if="item.value !== 2"
                    >
                      <template v-if="item.type == 'input'">
                        <el-input
                          :placeholder="item.placeholder"
                          v-model="FormData[item.field]"
                          v-bind="item.otherOption"
                        ></el-input>
                      </template>

                      <template v-else-if="item.type == 'select'">
                        <el-select
                          :placeholder="item.placeholder"
                          v-model="FormData[item.field]"
                        >
                          <el-option
                            v-for="oitem in item.options"
                            :key="oitem.value"
                            :value="oitem.value"
                            :label="oitem.label"
                          ></el-option>
                        </el-select>
                      </template>
                      <template
                        v-else-if="item.type == 'datepicker'"
                        style="width:100%;"
                      >
                        <el-date-picker
                          v-model="FormData[item.field]"
                          v-bind="item.otherOption"
                        >
                        </el-date-picker>
                      </template>
                    </el-form-item>
                  </transition>
                </el-col>
              </template>
            </el-row>
          </el-col>

          <el-col :span="colLayout.ThirdSpan" class="opeartion">
            <el-form-item>
              <slot name="searchBtns"></slot>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <!-- 为了兼容dialog中的Form表单 -->
      <el-form
        v-if="isDialogForm"
        :inline="true"
        ref="Form2"
        :label-width="labelWidth"
        class="dialogForm"
        :model="FormData"
        :rules="rules"
      >
        <el-row>
          <template v-for="item in formItems">
            <el-col :span="item.span">
              <el-form-item
                :label="item.label"
                :style="itemStyle"
                :prop="item.field"
                v-if="!item.hidden"
              >
                <!-- v-if="item.value != 2"切换不同的dialog -->
                <template v-if="item.type == 'input'">
                  <el-input
                    :placeholder="item.placeholder"
                    v-model="FormData[item.field]"
                    v-bind="item.otherOption"
                    :disabled="item.disabled"
                  ></el-input>
                </template>
                <template v-else-if="item.type == 'select'">
                  <el-select
                    :placeholder="item.placeholder"
                    v-model="FormData[item.field]"
                    @change="selectChange(item.field)"
                    :disabled="item.disabled"
                    style="width:100%;"
                  >
                    <el-option
                      v-for="oitem in item.options"
                      :key="oitem.value"
                      :value="oitem.value"
                      :label="oitem.label"
                    ></el-option>
                  </el-select>
                </template>
                <template v-else-if="item.type == 'datepicker'">
                  <el-date-picker
                    v-model="FormData[item.field]"
                    v-bind="item.otherOption"
                    style="width:100%;"
                  >
                  </el-date-picker>
                </template>
              </el-form-item>
            </el-col>
          </template>

          <el-form-item style="margin-left:20px">
            <slot name="searchBtns"></slot>
          </el-form-item>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    formItems: {
      type: Array,
      default: () => [],
    },

    itemStyle: {
      type: Object,
      default: () => ({ padding: "0px" }),
    },
    labelWidth: {
      type: String,
      default: "100px",
    },
    colLayout: {
      type: Object,
      default: () => ({ FirstSpan: 21, SecondSpan: 4.5, ThirdSpan: 3 }),
    },
    FormData: {
      type: Object,
      require: true,
    },
    isDialogForm: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Object,
      default: () => {},
    },
    FloatStyle: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    submitForm() {
      let flag = null;
      this.$refs.Form2.validate((valid) => {
        if (valid) {
          flag = true;
        } else {
          flag = false;
        }
      });
      return flag;
    },
    selectChange(val) {
      this.$emit("selectChange", val);
    },
  },
};
</script>

<style lang="less" scoped>
.yh-form {
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  width: 100%;
  ::v-deep.searchForm {
    display: flex;

    .el-form-item {
      margin-right: 20px !important;
      margin-bottom: 0 !important;
    }

    .Form {
      width: 100%;
      /* .operation {
        width: 100%;
      } */
      .opeartion {
        height: 100% !important;
        display: flex;
        align-items: inherit;
        justify-content: flex-end;
        padding: 8px 0px;
      }
      .rowwrap {
        display: flex;
        align-items: center;
      }
    }

    .Form .el-form-item__label {
      padding: 0 !important;
      padding-right: 10px !important;
      height: 32px;
      line-height: 32px;
    }
    .dialogForm {
      padding: 10px;
      width: 100%;
      .el-form-item {
        margin-right: 0px !important;
      }
      .el-form-item__content {
        width: calc(100% - 190px);
        margin-left: 10px;
      }
      .el-date-editor {
        width: 100% !important;
      }
    }
    .Form .el-input--suffix {
      width: 200px;
      line-height: 32px;
    }
    .Form .el-input__inner {
      width: 200px;
      height: 32px;
      line-height: 32px;
    }

    .Form .el-button {
      min-width: 76px;
    }
  }
}
</style>
