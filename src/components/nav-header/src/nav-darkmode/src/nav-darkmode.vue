<template>
  <div class="nav-darkmode-container">
    <el-switch
      v-model="darkMode"
      :active-icon="Moon"
      :inactive-icon="Sunny"
      inline-prompt
      @change="handleChange"
    ></el-switch>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavDarkmode'
})
</script>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import useSystemStore from '@/store/modules/system'
import { Sunny, Moon } from '@element-plus/icons-vue'

// const props = defineProps({})
// const emits = defineEmits([])
const systemStore = useSystemStore()

const darkMode = ref(systemStore.darkMode)
const handleChange = (val: boolean) => {
  systemStore.changeDarkMode(val)
}
</script>

<style scoped lang="less">
.nav-darkmode-container {
}
</style>
