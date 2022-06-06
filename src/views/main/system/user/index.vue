<template>
  <div class="user-container">
    <!-- <w-form v-model="formData" v-bind="searchFormConfig"></w-form> -->
    <page-search :search-form-config="searchFormConfig"></page-search>
    <page-content
      page-name="users"
      :content-config="contentConfig"
    ></page-content>
  </div>
</template>

<script setup lang="ts" name="User">
import { ref } from 'vue'
import { searchFormConfig } from './config/search.config'
import contentConfig from './config/content.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
</script>

<style scoped lang="less">
.user-container {
}
</style>
