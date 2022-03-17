<template>
  <div class="user-container">
    <!-- <w-form v-model="formData" v-bind="searchFormConfig"></w-form> -->
    <page-search :search-form-config="searchFormConfig"></page-search>
    <w-table></w-table>
  </div>
</template>

<script setup lang="ts" name="User">
import { ref } from 'vue'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import WTable from '@/components/w-table'
</script>

<style scoped lang="less">
.user-container {
}
</style>
