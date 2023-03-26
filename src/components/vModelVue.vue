<!-- vModelVue -->
<script setup lang="ts">
import {ref,reactive, defineProps, defineEmits} from 'vue'
//vue3中的默认值是:modelValue
const props = defineProps<{
  modelValue: boolean,
  textVal:string,
  textValModifiers?: {
    isBt: boolean
  }
}>()

const emit = defineEmits(['update:modelValue', 'update:textVal'])
const close = () => {
  emit('update:modelValue', false)
}
const change = (event) => {
  const target = event.target as HTMLInputElement
  emit('update:textVal',props.textValModifiers ? target.value + '加后缀': target.value)
}
</script>
<template>
<div class='innerbox'>
  {{ modelValue }}
  <input type="text" :value="textVal" @input="change">
  <p v-show="modelValue">文本:{{ textVal }}</p>
  <button @click="close">关闭vModelVue的内容</button>
</div>
</template>

<style lang='scss' scoped>
.innerbox {
  border: 2px solid red;
}
</style>