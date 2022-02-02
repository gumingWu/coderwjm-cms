<template>
  <div class="w-form-container">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :type="item.type"
                  :show-password="item.type === 'password'"
                  :placeholder="item.placeholder"
                ></el-input>
              </template>
              <template v-if="item.type === 'select'">
                <el-select style="width: 100%">
                  <el-option
                    v-for="option in item.options"
                    :key="option.title"
                    :label="option.title"
                    :value="option.value"
                  ></el-option>
                </el-select>
              </template>
              <template v-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WForm'
})
</script>

<script setup lang="ts">
import { defineProps, defineEmits, PropType } from 'vue'
import { IFormItem } from './type'

const props = defineProps({
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemStyle: {
    type: Object,
    default: () => ({
      padding: '10px 40px'
    })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
})

// const emits = defineEmits([])
</script>

<style scoped lang="less">
.w-form-container {
  padding-top: 20px;
}
</style>
