<template>
  <div class="user-container">
    <!-- <w-form v-model="formData" v-bind="searchFormConfig"></w-form> -->
    <page-search :search-form-config="searchFormConfig"></page-search>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'User'
})
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
</script>

<style scoped lang="less">
.user-container {
}
</style>
