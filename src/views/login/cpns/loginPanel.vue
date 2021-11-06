<template>
  <div class="login-panel">
    <h2 class="login-panel-title">后台管理系统</h2>
    <el-card class="login-panel-card" shadow="hover">
      <template #header> 账号登录 </template>
      <el-form ref="formRef" :model="form" :rules="loginRules">
        <el-form-item label="账号" prop="name">
          <el-input v-model="form.name" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            show-password
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
import loginRules from '@/utils/validate/login'
import storage from '@/utils/storage'

const form = reactive({
  name: storage.get('name') || '',
  password: storage.get('password') || ''
})

const isSavePwd = ref(false)

const formRef = ref<InstanceType<typeof ElForm>>()

const store = loginStore()

const loginBtn = () => {
  formRef.value?.validate(async (valid) => {
    if (valid) {
      console.log('验证成功')

      // 1.判断是否需要保存账号密码
      if (isSavePwd.value) {
        storage.set('name', form.name)
        storage.set('password', form.password)
      } else {
        storage.delete('name')
        storage.delete('password')
      }

      // 2. 进行登录操作
      const res = await store.accountLogin({ ...form })
    } else {
      console.log('验证失败')
    }
  })
}
</script>

<style scoped lang="less">
.login-panel {
  width: 30%;

  &-title {
    text-align: center;
  }

  .login-btn-container {
    text-align: center;
  }
  .login-btn {
    width: 80%;
  }
}
</style>
