<template>
  <div class="nav-header">
    <!-- <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="handleFoldClick"
    ></i> -->
    <div class="fold-menu" @click="handleFoldClick">
      <expand v-if="isFold"></expand>
      <fold v-else></fold>
    </div>
    <div class="content">
      <nav-breadcrumb :breadcrumb="breadcrumb"></nav-breadcrumb>
      <div class="content-right">
        <nav-darkmode class="content-right-switch"></nav-darkmode>
        <user-info></user-info>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, computed } from 'vue'
import { Fold, Expand } from '@element-plus/icons'
import NavBreadcrumb from './nav-breadcrumb'
import UserInfo from './user-info'
import NavDarkmode from './nav-darkmode'
import { IBreadcrumb } from './nav-breadcrumb'
import useUserStore from '@/store/modules/user'
import { useRoute } from 'vue-router'
import { pathToBreadcrumb } from '@/utils/map-menus'

const isFold = ref(false)

const emits = defineEmits(['foldChange'])
const handleFoldClick = (): void => {
  isFold.value = !isFold.value
  emits('foldChange', isFold.value)
}

const userStore = useUserStore()
const breadcrumb = computed(() => {
  const route = useRoute()
  const breadcrumb: IBreadcrumb[] = pathToBreadcrumb(
    userStore.userMenu,
    route.fullPath
  )
  return breadcrumb
})
</script>

<style scoped lang="less">
@import '~@/assets/style/darkmode.less';
.nav-header {
  display: flex;
  align-items: center;
  width: 100%;
  .fold-menu {
    .dynamic-darkmomde-font-mixin();
    width: 24px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;

    .content-right {
      display: flex;
      align-items: center;

      &-switch {
        margin: 0 6px;
      }
    }
  }
}
</style>
