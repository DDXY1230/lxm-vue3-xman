<!--  -->
<script setup>
import {ref,reactive} from 'vue'
const imgObj = import.meta.globEager('../assets/imgs/*')
console.log(imgObj)
const images = []
for(let p in imgObj) {
  images.push(imgObj[p].default)
}
console.log(images)
</script>
<template>
<div class=''>
图片引入的学习
<img v-for="(item,index) in images" :key="index" :src="item"/>
</div>
</template>

<style lang='scss' scoped>

</style>