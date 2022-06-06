import { bigCamelCase } from '../shared/utils'

export default genViewsTemplate = (name, useSetupName) => {
  const noSetupNameNode = `
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: '${bigCamelCase(name)}'
})
</script>
`

  return `<template>
  <div class="${name}-container">${name}</div>
</template>
${useSetupName === 'y' ? '' : noSetupNameNode}
${
  useSetupName === 'y'
    ? `<script setup lang="ts" name="${bigCamelCase(name)}">`
    : '<script setup lang="ts">'
}
import { ref } from 'vue'
</script>

<style scoped lang="less">
.${name}-container {
}
</style>
  `
}
