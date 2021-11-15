<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside>
        <nav-menu></nav-menu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header"> im header </el-header>
        <el-main class="page-content">
          <div class="page-info">im content</div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavMenu from '@/components/nav-menu'
</script>

<style scoped lang="less">
@header-height: 48px;

.main,
.main-content,
.page {
  width: 100%;
  height: 100%;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-header {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
  height: @header-height !important;
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}

.page-content {
  height: calc(100% - @header-height);

  .page-info {
    background-color: #fff;
    border-radius: 5px;
  }
}
</style>
