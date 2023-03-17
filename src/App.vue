<!--  -->
<script setup>
import {ref,reactive} from 'vue'
import {useTestStore} from './store'
const test = useTestStore()

</script>
<template>
<div class=''>
{{ test.current }}-- {{ test.name }}
</div>
</template>

<style lang='scss' scoped>

</style>