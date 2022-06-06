<template>
  <div class="page-content-container">
    <w-table
      :list-data="dataList"
      :list-count="dataCount"
      v-bind="contentConfig"
    ></w-table>
  </div>
</template>

<script setup lang="ts" name="PageContent">
import { defineProps, defineEmits, ref, computed, nextTick } from 'vue'
import WTable from '@/components/w-table'
import useSystemStore from '@/store/modules/system'

const systemStore = useSystemStore()

const props = defineProps({
  pageName: {
    type: String,
    required: true
  },
  contentConfig: {
    type: Object,
    required: true
  }
})
// const emits = defineEmits([])

// 0. 获取操作权限

// 1. 双向绑定pageInfo
const pageInfo = ref({
  currentPage: 1,
  pageSize: 10
})

// 2. 发送网络请求
const getPageData = (queryInfo: any = {}) => {
  return new Promise((resolve) => {
    systemStore
      .getPageListAction({
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
      .then(() => {
        resolve(true)
      })
  })
}
let dataList = ref([])
let dataCount = ref(0)
getPageData().then(() => {
  dataList.value = computed(() => {
    return systemStore.list.users
  }).value
  dataCount.value = computed(() => {
    return systemStore.count.users
  }).value
})
</script>

<style scoped lang="less">
.page-content-container {
}
</style>
