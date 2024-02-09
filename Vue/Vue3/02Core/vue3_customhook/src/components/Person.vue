<template>
  <div class="person">
<!--    <h2>当前求和为：{{ sum }}</h2>-->
<!--    <button @click="add">点击+1</button>-->
<!--    <hr>-->
<!--    <img v-for="(dog,index) in dogList" :src="dog" :key="index" alt="dog"><br>-->
<!--    <button @click="getDog">再来一只狗</button>-->
    <h2>当前求和为：{{sum}}，放大10倍后{{bigSum}}</h2>
    <button @click="increment">点我+1</button>
    <button @click="decrement">点我-1</button>
    <hr>
    <img v-for="(u,index) in dogList" :key="index" :src="(u as string)">
    <br>
    <button @click="getDog">再来一只狗</button>
  </div>
</template>

<script setup lang="ts" name="Person">
// import {reactive, ref} from "vue";
// import axios, {AxiosError} from "axios";
//
// //数据
// let sum = ref(0);
// let dogList = reactive<string[]>([])
//
// //方法
// function add() {
//   sum.value++;
// }
//
// async function getDog() {
//   try {
//     // 发请求
//     let {data} = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
//     // 维护数据
//     dogList.push(data.message)
//   } catch (error) {
//     // 处理错误
//     const err = <AxiosError>error
//     console.log(err.message)
//   }
// }
//
//
import useSum from '@/hooks/useSum'
import useDog from '@/hooks/useDog'

let {sum,bigSum,increment,decrement} = useSum()
let {dogList,getDog} = useDog()
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
img{
  width: 100px;
  margin-right: 10px;
}
</style>
