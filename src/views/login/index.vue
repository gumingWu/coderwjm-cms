<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './cpns/loginPanel.vue'
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  background-image: url('../../assets/img/login-bg.svg');
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
