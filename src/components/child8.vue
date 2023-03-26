<!-- hooks -->
<script setup lang="ts">
import {ref,reactive,getCurrentInstance} from 'vue'
import B from './B.vue'
import useBase64 from '../hooks'
const app = getCurrentInstance()
console.log('aap==>', app?.proxy?.$filters.format('mac电脑'))
let imgBaseUrl = ref('')
useBase64({
  el: '#img'
}).then(res => {
  imgBaseUrl.value = res.baseUrl
})
</script>
<template>
<div class=''>
  {{ $env }}
  {{ $filters.format('苹果手机') }}
  <p>src格式的图片</p>
  <img id="img" src="../assets/imgs/1.jpg" alt="">
  <p>base64格式的图片</p>
  <img :src="imgBaseUrl" alt="">
  <B title="标题123" a="56"></B>
</div>
</template>
<style lang='scss' scoped>
</style>