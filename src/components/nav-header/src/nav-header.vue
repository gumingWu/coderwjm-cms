<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="handleFoldClick"
    ></i>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const isFold = ref(false)

const emits = defineEmits(['foldChange'])
const handleFoldClick = (): void => {
  isFold.value = !isFold.value
  emits('foldChange', isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
  .fold-menu {
    font-size: 24px;
    cursor: pointer;
  }
}
</style>
