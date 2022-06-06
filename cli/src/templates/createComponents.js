import { bigCamelCase } from '../shared/utils'
export const genComponentsIndexTemplate = (comName) => {
  const camelName = bigCamelCase(comName)
  return `import ${camelName} from './src/${comName}.vue'

export default ${camelName}
`
}

export const genComponentsVueTemplate = (name, useSetupName) => {
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
import { defineProps, defineEmits } from 'vue'

// const props = defineProps({})
// const emits = defineEmits([])
</script>

<style scoped lang="less">
.${name}-container {
}
</style>
`
}
