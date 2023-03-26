<!--  -->
<script setup lang='ts'>
import {ref,reactive,useCssModule} from 'vue'
import A1 from './A1.vue'
const css = useCssModule('lxm')
console.log(css)
</script>
<template>
<div :class='[lxm.textSty,lxm.boderSty]'>
    样式穿透:vue3 使用 :deep(.el-input__inner) {font-size:12px}
    <A1>
      <p class="text">
      默认插槽
      </p>
    </A1>
</div>
</template>
<style lang='scss' module="lxm">
.textSty {
  color: red
}
.boderSty {
  border-bottom: 4px solid black;
}
</style>