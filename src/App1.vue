<!--  -->
<script setup>
import {ref,reactive,h, defineCustomElement} from 'vue'
import customVueCeVue from './components/custom-vue.ce.vue'
const Btn = defineCustomElement(customVueCeVue)
window.customElements.define('lxm-mm', Btn)
const obj = {
  habby: 'coding'
}
</script>
<template>
<div class=''>
  <lxm-mm :obj="JSON.stringify(obj)"></lxm-mm>
</div>
</template>

<style lang='scss' scoped>

</style>