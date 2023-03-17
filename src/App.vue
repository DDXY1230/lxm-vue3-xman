<!--  -->
<script setup>
import { ref, reactive } from "vue";
import { useTestStore } from "./store";
import { storeToRefs } from "pinia";
const Test = useTestStore();
const { current, name } = storeToRefs(Test); // storeToRefs用这个包裹就有相应式了
const change = () => {
  Test.setCurrent(8899);
};
// 数据发生变化了触发
// Test.$subscribe((args, state) => {
//   console.log('==>1', args)
//   console.log('==>2', state)
// },{datached: true,deep:true,flush: 'post'})
Test.$onAction(args => {
  console.log(args);
  args.after(() => {
    console.log("这个始终最后执行");
  });
},true); // true表示销毁了继续坚挺$onAction
</script>
<template>
  <div class=''>
    {{ Test.current }}-- {{ Test.name }}
    <hr>
    解构出来的值不具有相应式 storeToRefs用这个包裹就有相应式了{{ current}}==={{  name }}
    <button @click="change">+</button>
  </div>
</template>

<style lang='scss' scoped>
</style>