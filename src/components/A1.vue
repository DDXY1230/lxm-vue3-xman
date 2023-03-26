<!--  -->
<script setup lang='ts'>
import {ref,reactive} from 'vue'
const color = ref('pink')
// 如果是对象的形式
const colorObj = ref({color: 'yellow'})
</script>
<template>
<div class=''>
  <slot></slot>
</div>
</template>

<style lang='scss' scoped>
:slotted(.text) {
  color: v-bind(color);
  border: 3px solid v-bind('colorObj.color')
}
</style>