<template>
  <div class="w-table-container">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>

    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectionColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        ></el-pagination>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts" name="WTable">
import { defineProps, defineEmits, PropType } from 'vue'
import type { PropListItem, PageType } from '../type'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  listCount: {
    type: Number,
    default: 0
  },
  listData: {
    type: Array,
    default: () => []
  },
  propList: {
    type: Array as PropType<PropListItem[]>,
    required: true
  },
  page: {
    type: Object as PropType<PageType>,
    default: () => ({})
  },
  childrenProps: {
    type: Object,
    default: () => ({})
  },
  showSelectionColumn: {
    type: Boolean,
    default: false
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showFooter: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['selectionChange', 'update:page'])

const handleSelectionChange = (value: any) => {
  emits('selectionChange', value)
}

const handleCurrentChange = (currentPage: number) => {
  emits('update:page', currentPage)
}

const handleSizeChange = (pageSize: number) => {
  emits('update:page', { ...props.page, pageSize })
}
</script>

<style scoped lang="less">
.w-table-container {
}
</style>
