<!--  -->
<script setup>
import {ref,reactive} from 'vue'
import axios from 'axios'
defineProps({
  msg: String
});
axios.get('/api/index/ding.json').then(_d => {
  console.log(_d.data)
})
</script>
<template>
<div class=''>112233</div>
</template>

<style lang='scss' scoped>

</style>