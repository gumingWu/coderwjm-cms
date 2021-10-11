<template>
  <h1>im test</h1>
  <h2>{{ message }}</h2>
  <el-button type="danger">hi</el-button>
  <el-input></el-input>
</template>

<script setup>
import { ref } from 'vue'

console.log('hhhhhh')
const message = ref('im message')
</script>

<style lang="less"></style>
