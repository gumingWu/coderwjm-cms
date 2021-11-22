import { bigCamelCase } from "../shared/utils"
export const genComponentsIndexTemplate = (comName) => {
  const camelName = bigCamelCase(comName)
  return `import ${camelName} from './src/${comName}.vue'

export default ${camelName}
`
}

export const genComponentsVueTemplate = (name) => {
  return `<template>
  <div class="${name}-container"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '${bigCamelCase(name)}'
})
</script>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({})
const emits = defineEmits([])
</script>

<style scoped lang="less">
.${name}-container {
}
</style>
`
}
