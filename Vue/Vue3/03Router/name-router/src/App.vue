<template>
  <div class="app">
    <!-- 标题 -->
    <Header />
    <!-- 导航栏 -->
    <div class="navigate">
      <!--简化前：需要写完整的路径（to的字符串写法） -->
<!--      <RouterLink to="/home" active-class="active">首页</RouterLink>-->
<!--      <RouterLink to="/news" active-class="active">新闻</RouterLink>-->
<!--      <RouterLink to="/about" active-class="active">关于</RouterLink>-->

      <!--简化后：直接通过名字跳转（to的对象写法配合name属性） -->
      <RouterLink :to="{name:'zy'}" active-class="active">首页</RouterLink>
      <RouterLink :to="{name:'xw'}" active-class="active">新闻</RouterLink>
      <RouterLink :to="{name:'gy'}" active-class="active">关于</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <!-- 此处根据路径展示各种组件 -->
      <!-- 路由器视图 把路由的内容展示到这-->
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import Header from "@/components/Header.vue";
</script>

<style scoped>
/* App */

.navigate {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
}

.navigate a {
  display: block;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  background-color: rgb(128, 128, 128);
  text-decoration: none;
  color: white;
  font-size: 18px;
  letter-spacing: 5px;
}

.navigate a.active {
  background-color: #259039;
  color: #bcaf14;
  font-weight: 900;
  text-shadow: 0 0 1px black;
  font-family: 微软雅黑, serif;
}

.main-content {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 90%;
  height: 400px;
  border: 1px solid;
}
</style>
