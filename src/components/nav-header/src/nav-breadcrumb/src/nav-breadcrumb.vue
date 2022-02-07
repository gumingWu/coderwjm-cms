<template>
  <div class="nav-breadcrumb-container">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumb" :key="item.name">
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBreadcrumb'
})
</script>

<script setup lang="ts">
import { defineProps, defineEmits, PropType } from 'vue'
import { IBreadcrumb } from './type'

const props = defineProps({
  breadcrumb: {
    type: Array as PropType<IBreadcrumb[]>,
    default: () => []
  }
})
// const emits = defineEmits([])
</script>

<style scoped lang="less">
.nav-breadcrumb-container {
}
</style>
