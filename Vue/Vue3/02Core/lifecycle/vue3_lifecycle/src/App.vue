<!-- 编写模板结构 -->
<template>
  <!-- Html -->
  <Person v-if="isShow"/>
</template>
<!-- 编写脚本代码 -->
<script setup lang="ts" name="App">
// JS或TS
import Person from "./components/Person.vue"
import  { ref } from 'vue'
import {onBeforeMount,onMounted} from "vue";
let isShow = ref(true)
onBeforeMount(()=>{
  console.log('父-挂载之前')
})
onMounted(()=>{
  console.log('父-挂载完毕')
})
</script>
<!-- 样式 -->
<style scoped>
/* css */
</style>
