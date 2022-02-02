<template>
  <div class="user-container">
    <w-form v-bind="searchFormConfig"></w-form>
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
import WForm from '@/components/w-form'
import { searchFormConfig } from './config/search.config'
</script>

<style scoped lang="less">
.user-container {
}
</style>
