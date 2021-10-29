<template>
  <h1>im test</h1>
  <h2>{{ message }}</h2>
  <el-button type="danger">hi</el-button>
  <el-input></el-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref('im message')
</script>

<style lang="less"></style>
