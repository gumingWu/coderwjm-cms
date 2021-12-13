import { bigCamelCase } from '../shared/utils'

export default genViewsTemplate = (name) => {
  return `<template>
  <div class="${name}-container">${name}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: '${bigCamelCase(name)}'
})
</script>

<script setup lang="ts">
import { ref } from 'vue'
</script>

<style scoped lang="less">
.${name}-container {
}
</style>
  `
}
