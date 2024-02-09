<!-- 编写模板结构 -->
<template>
  <!-- Html -->
  <div class="app">
    <h1>你好 世界</h1>
    <Person/>
  </div>
</template>
<!-- 编写脚本代码 -->
<script setup lang="ts" name="App">
// JS或TS
import Person from "./components/Person.vue"

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
