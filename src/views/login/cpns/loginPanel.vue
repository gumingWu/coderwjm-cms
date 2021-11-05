<template>
  <div class="login-panel">
    <el-card shadow="hover">
      <template #header> 账号登录 </template>
      <el-form
        ref="formRef"
        :model="form"
        label-width="60px"
        label-position="left"
      >
        <el-form-item label="账号">
          <el-input v-model="form.name" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            type="password"
          ></el-input>
        </el-form-item>
        <el-checkbox v-model="isSavePwd" label="记住密码"></el-checkbox>
        <div class="login-btn-container">
          <el-button class="login-btn" type="primary" @click="loginBtn"
            >登录</el-button
          >
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElForm } from 'element-plus'
import loginStore from '@/store/modules/login'

const form = reactive({
  name: '',
  password: ''
})

const isSavePwd = ref(false)

const formRef = ref<InstanceType<typeof ElForm>>()

const store = loginStore()

const loginBtn = async () => {
  const res = await store.accountLogin({ ...form })
  console.log('🚀 ~ file: loginPanel.vue ~ line 50 ~ loginBtn ~ res', res)
}
</script>

<style scoped lang="less">
.login-panel {
  width: 30%;

  .login-btn-container {
    text-align: center;
  }
  .login-btn {
    width: 80%;
  }
}
</style>
