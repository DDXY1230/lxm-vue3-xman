<!--  -->
<script setup lang="ts">
import {ref,reactive,isRef,shallowRef,triggerRef,customRef, defineExpose} from 'vue'
function MyRef<T>(value: T) {
  return customRef((track,trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newVal) {
        value = newVal
        trigger()
      }
    }
  })
}
const obj = MyRef<string>('customRef')
// 父组件传过来的值 只有在ts中才这样设置默认值的方式
withDefaults(defineProps<{title: string,arr:number[]}>(), {
  title: '这是默认的标题',
  arr: () => [1,2,3,4]
})
// 给父组件传值
// const emit = defineEmits(['on-click'])//里面可以加多个
//ts写法 里面可以加多个
const emit = defineEmits<{
  (e:"on-click",name:string):void
}>()
const send = () => {
  emit('on-click', '这是子组件传过来的值')
}
defineExpose({
  name: '子组件的名字叫子组件'
})
</script>
<template>
<div class=''>
  {{ title }}
  {{ arr }}
  <button @click="send">传值给父组件</button>
</div>
</template>

<style lang='scss' scoped>

</style>
// toRefs让解构出来的值继续拥有响应式方式