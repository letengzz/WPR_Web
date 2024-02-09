<!-- 编写模板结构 -->
<template>
  <!-- Html -->
  <div class="app">
    <h1 ref="title2">hello</h1>
    <button @click="showLog">点我打印内容</button>
    <Person ref="ren"/>
  </div>
</template>
<!-- 编写脚本代码 -->
<script setup lang="ts" name="App">
// JS或TS
import Person from "./components/person.vue"
import {ref} from "vue";
let title2 = ref();
let ren = ref();
function showLog() {
  // console.log(title2.value)
  console.log(ren.value)
}
</script>
<!-- 样式 -->
<style scoped>
/* css */
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
