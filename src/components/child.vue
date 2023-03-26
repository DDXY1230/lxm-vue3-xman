<!--  -->
<script setup lang='ts'>
import {ref,reactive,getCurrentInstance} from 'vue'
const instance = getCurrentInstance()
instance?.proxy?.$loading.show()
setTimeout(() => {
instance?.proxy?.$loading.hide()
},5000)
</script>
<template>
<div class=''>
  {{ $filters.format('苹果手机') }}
  使用自定义组件显示出一个loading
   <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
</div>
</template>

<style lang='scss' scoped>

</style>