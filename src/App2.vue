<!--  -->
<script setup>
import {ref,reactive} from 'vue'
import {useTestStore} from './store'
const Test = useTestStore()
const change = () => {
  // 方式一
  // Test.current++
  // 方式二
  // Test.$patch({
  //   current: 888,
  //   name: '苹果西红柿'
  // })
  // 方式三
  // Test.$patch((state) => {
  //   state.current = 19999
  // })
  // 方式四 这个修改所有的值,用的不多
  // Test.$state = {
  //   current: 250,
  //   name: 250
  // }
  // 方式五
  Test.setCurrent(8899)
};
</script>
<template>
<div class=''>
{{ Test.current }}-- {{ Test.name }}
<button @click="change">+</button>
</div>
</template>

<style lang='scss' scoped>

</style>