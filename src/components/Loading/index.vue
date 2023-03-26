<!-- loading插件 -->
<script setup lang='ts'>
import {ref,reactive} from 'vue'
const isShow = ref<boolean>(false)
const show = () => isShow.value = true
const hide = () => isShow.value = false
defineExpose({
  isShow,
  show,
  hide
})
</script>
<template>
<div v-if="isShow" class='loading'>
  loading.....
</div>
</template>

<style lang='scss' scoped>
.loading {
  background: black;
  opacity: 0.8;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  color: white;
}
</style>