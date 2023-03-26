<!-- 自定义指令 -->
<script setup lang="ts">
import {ref,reactive, DirectiveBinding} from 'vue'
const vMove: Directive<any,void> = (el:HTMLElement,bingding:DirectiveBinding ) => {
  let moveElement = el.firstElementChild as HTMLElement
  console.log(moveElement)
  const mouseDown = (e) => {
    let x = e.clientX - el.offsetLeft
    let y = e.clientY - el.offsetTop
    const move =(event) => {
    console.log(event)
      el.style.left = event.clientX - x + 'px'
      el.style.top = event.clientY - y + 'px'
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move)
    })
  }
  moveElement.addEventListener('mousedown', mouseDown)
}
</script>
<template>
<!-- <div class=''> -->
  <div v-move class="box">
    <div class="header"></div>
    <div>内容</div>
  </div>
<!-- </div> -->
</template>

<style lang='scss' scoped>
.box {
  height: 100px;
  width: 100px;
  border: 1px solid red;
  position: fixed;
  .header {
    height: 30px;
    background-color: red;
  }
}
</style>