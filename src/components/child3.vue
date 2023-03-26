<!--  -->
<script setup>
import {ref,reactive} from 'vue'
import axios from 'axios'
// import.meta.globEager(`../assets/js/*.js`)// 倒入js的方式,这里显示注释了,实际上是没有影响的
const jsObj = import.meta.globEager("../assets/js/*.js")// 
//--------------简单的封装
const keys = Object.keys(jsObj)
console.log(keys)
for(let path of keys) {
  let n = path.substring(path.lastIndexOf('/')+1,path.lastIndexOf('.js'))
  console.log(n)
  jsObj[n] = jsObj[path].default
  delete jsObj[path]
}
//-----------------
jsObj.a()
jsObj.b()
defineProps({
  msg: String
});
axios.get('/api/index/ding.json').then(_d => {
  console.log(_d.data)
})
</script>
<template>
<div class=''>112233
  <div class="a_div">
    <div class="b_div">
      <div class="c_div">多层嵌套</div>
    </div>
  </div>
  <!-- scss小动画 -->
  <div class="wrap">
    <p>1111</p>
    <p>2222</p>
    <p>3333</p>
  </div>
</div>
</template>

<style lang='scss' scoped>

</style>