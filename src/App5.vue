<!--  -->
<script setup lang="ts">
import child from './child.vue'
import {ref} from 'vue'
const getChildValue = (value) => {
  console.log(value)
  console.log(childCom.value.name)
}
const childCom = ref<InstanceType<typeof child>()
</script>
<template>
<div class=''>
<child ref="childCom" title="你好漂亮" @onClick="getChildValue"></child>
</div>
</template>

<style lang='scss' scoped>

</style>
// toRefs让解构出来的值继续拥有响应式方式