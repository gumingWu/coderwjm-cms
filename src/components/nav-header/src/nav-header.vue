<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <div>面包屑</div>
      <user-info></user-info>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import UserInfo from './user-info'

const isFold = ref(false)

const emits = defineEmits(['foldChange'])
const handleFoldClick = (): void => {
  isFold.value = !isFold.value
  emits('foldChange', isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 24px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
