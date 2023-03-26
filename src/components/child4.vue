<!--  -->
<script setup lang="ts">
import vModelVue from './vModelVue.vue'
let flag = ref<boolean>(false);
let text = ref<string>('父组件传过来的文本')
</script>
<template>
<div class='bigbox'>
  <!-- .isBt是自定义修饰符号,可传可不传, 内置的有lazy trim number -->
  <vModelVue v-model:textVal.isBt="text" v-model="flag" ></vModelVue>
  {{ text }}
  <p v-if="flag">显示隐藏请按下面按钮</p>
  <button @click="() => { flag = !flag}">显示隐藏</button>
</div>
</template>

<style lang='scss' scoped>
.bigbox {
  border: 2px solid green;
}
</style>