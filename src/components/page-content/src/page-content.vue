<template>
  <div class="page-content-container"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageContent'
})
</script>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({})
const emits = defineEmits([])
</script>

<style scoped lang="less">
.page-content-container {
}
</style>
