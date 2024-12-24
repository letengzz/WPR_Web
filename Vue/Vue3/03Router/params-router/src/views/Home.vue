<template>
  <div class="home">
    <img src="https://vuejs.org/images/logo.png" alt="Vue logo">
  </div>
</template>
<script setup lang="ts" name="Home">

import {onMounted, onUnmounted} from "vue";

onMounted(()=>{
  console.log('Home组件被挂载了')
})
onUnmounted(()=>{
  console.log('Home组件被卸载了')
})
</script>


<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
