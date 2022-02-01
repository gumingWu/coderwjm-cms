<template>
  <el-dropdown class="user-info-container">
    <span class="el-dropdown-link">
      <el-avatar
        size="small"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      ></el-avatar>
      <span class="user-info-name">{{ name }}</span>
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item icon="el-icon-circle-close" @click="handleLogout"
          >退出登录</el-dropdown-item
        >
        <el-dropdown-item divided>用户信息</el-dropdown-item>
        <el-dropdown-item>系统管理</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserInfo'
})
</script>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { ArrowDown } from '@element-plus/icons'
import useUserStore from '@/store/modules/user'
import storage from '@/utils/storage'
import { useRouter } from 'vue-router'

// const props = defineProps({})
// const emits = defineEmits([])
const userStore = useUserStore()
const name = userStore.userInfo.name

const router = useRouter()
const handleLogout = () => {
  storage.delete('token')
  storage.delete('userInfo')
  storage.delete('userMenus')
  router.push('/login')
}
</script>

<style scoped lang="less">
.user-info-container {
}

.el-dropdown-link {
  display: flex;
  align-items: center;

  .user-info-name {
    margin: 0 5px;
    cursor: pointer;
  }
}
</style>
