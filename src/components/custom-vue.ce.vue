<!-- 这个是自定义的组件 -->
<script setup lang="ts">
import {ref,reactive} from 'vue'
defineProps<{obj:any}>()

</script>
<template>
<div class=''>
  自定义组件,web components
</div>
</template>

<style lang='scss' scoped>

</style>