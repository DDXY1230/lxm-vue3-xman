<!--  -->
<script setup>
import {ref,reactive,useAttrs,useSlots} from 'vue'
let attr = useAttrs() // 这个hooks可以把父组件所有的属性都传过来
console.log(attr)
</script>
<template>
<div class=''>B组件</div>
</template>

<style lang='scss' scoped>

</style>