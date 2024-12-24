<template>
  <ul class="news-list">
<!--    <li>编号：{{ route.query.id }}</li>-->
<!--    <li>标题：{{ route.query.title }}</li>-->
<!--    <li>内容：{{ route.query.content }}</li>-->
    <li>编号：{{ query.id }}</li>
    <li>标题：{{ query.title }}</li>
    <li>内容：{{ query.content }}</li>
  </ul>
</template>

<script setup lang="ts" name="Detail">
import {useRoute} from "vue-router";
import {toRefs} from "vue";

let route = useRoute();
console.log(route)
// 打印query参数
console.log(route.query)
let {query} = toRefs(route);
</script>

<style scoped>
  .news-list {
    list-style: none;
    padding-left: 20px;
  }

  .news-list>li {
    line-height: 30px;
  }
</style>
