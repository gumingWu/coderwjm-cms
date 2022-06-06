<template>
  <div class="page-search-container">
    <w-form v-model="formData" v-bind="searchFormConfig">
      <template #header>
        <h1>hi</h1>
      </template>
      <template #footer>
        <h2>hi</h2>
      </template>
    </w-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WForm from '@/components/w-form'

export default defineComponent({
  name: 'PageSearch'
})
</script>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})
// const emits = defineEmits([])

// 双向绑定优化1：formData的属性动态决定
const formItems = props.searchFormConfig?.formItems ?? []
const formOriginData: any = {}
for (let item of formItems) {
  formOriginData[item.field] = ''
}
const formData = ref(formOriginData)
</script>

<style scoped lang="less">
.page-search-container {
}
</style>
