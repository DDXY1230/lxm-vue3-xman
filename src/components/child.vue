<!-- 指令简写 鉴权 -->
<script setup lang="ts">
import {ref} from 'vue'
import type {Directive} from 'vue'
const isShow = ref(false)
localStorage.setItem('userId', 'xtl-zm')
const permission = [
  'xtl-zm:shop:create',
  'xtl-zm:shop:edit',
  'xtl-zm:shop:delete',
]
const userId = localStorage.getItem('userId') as string
console.log('userId',userId)
const vHasShow:Directive<HTMLElement,string> = (el,bingding) => {
  console.log(el,bingding)
  if(!permission.includes(userId + ':' + bingding.value)){
    el.style.display = 'none'
  }
}
</script>
<template>
<div class=''>
  <button v-has-show="'shop:create'">创建</button>
  <button v-has-show="'shop:edit'">编辑</button>
  <button v-has-show="'shop:delete'">删除</button>
</div>
</template>

<style lang='scss' scoped>

</style>