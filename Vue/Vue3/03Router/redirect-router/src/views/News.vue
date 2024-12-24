<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newList" :key="news.id">
        <!--        <RouterLink to="/news/detail">{{news.title}}</RouterLink>-->
        <!-- 或 -->
        <!--        <RouterLink :to="{path:'/news/detail'}">{{news.title}}</RouterLink>-->

        <!-- 跳转并携带query参数（to的字符串写法） -->
<!--        <RouterLink-->
<!--            :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`"-->
<!--        >-->
<!--          {{ news.title }}-->
<!--        </RouterLink>-->

        <!-- 跳转并携带query参数（to的对象写法） -->
        <RouterLink
            :to="{
              path:'/news/detail',
              query:{
                id:news.id,
                title:news.title,
                content:news.content
              }}">
          {{news.title}}
        </RouterLink>

      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script setup lang="ts" name="News">
import {reactive} from "vue";

const newList = reactive([
  {id: 'new001', title: '新闻01', content: '新闻001内容'},
  {id: 'new002', title: '新闻02', content: '新闻002内容'},
  {id: 'new003', title: '新闻03', content: '新闻003内容'},
  {id: 'new004', title: '新闻04', content: '新闻004内容'}
])
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}

.news li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>
