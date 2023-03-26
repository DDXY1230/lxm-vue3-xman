<!-- 指令学习 -->
<script setup lang="ts">
import {reactive,Directive, DirectiveBinding} from 'vue'
import A from './A.vue'
type Dir = {
  background: string
}
let isShow = ref(false)
const vMove:Directive = {
  created() {
    console.log('创建后')
  },
  beforeMount() {
    console.log('指令绑定元素后')
  },
  mounted(el: HTMLElement,dir:DirectiveBinding<Dir>) {
    console.log('绑定后')
    el.style.background = dir.value.background
  },
  beforeUpdate() {
    console.log('更新前')
  },
  updated() {
    console.log('更新后')
  },
  beforeUnmount() {
    console.log('卸载前')
  },
  unmounted() {
    console.log('卸载完成')
  }
}
</script>
<template>
<div class=''>
<A v-move:aaa.lxm="{background:'red'}" v-if="isShow"></A>
<button @click="() => {isShow = !isShow}">显示隐藏A组件</button>
</div>
</template>

<style lang='scss' scoped>

</style>