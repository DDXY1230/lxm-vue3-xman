<!--  -->
<script setup>
import { ref, reactive } from "vue";
const event = "click";
const num = ref(1);
const handle = () => {
  console.log("您点击了一个按钮");
  num.value++;
};
</script>
<template>
  <div class=''>
    <p v-once>v-once修饰的只渲染一次{{ num }}</p>
    <p>{{ num }}</p>
    <button @[event].stop="handle">点击</button>
    <ul>
      <li v-for="item in arr" :key="item" v-memo="[item == 2]"></li>
    </ul>
  </div>
</template>

<style lang='scss' scoped>
</style>
// .stop阻止冒泡
// v-memo一般配合v-for使用
// 