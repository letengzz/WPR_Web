<template>
  <div class="count">
<!--    <h2>当前求和为：{{ sum }}</h2>-->
<!--    <h2>当前求和为：{{ countStore.sum }}，地点：{{countStore.address}}</h2>-->
    <h2>当前求和为：{{ sum }}，地点：{{address}}</h2>
    <h2>放大十倍：{{ bigSum }}，放大二十倍：{{bigSum2}}</h2>
    <!-- 尽可能转换成数字 -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
  import { ref } from "vue";
  // 引入对应的useXxxxxStore
  import {useCountStore} from "@/store/count";
  import {storeToRefs} from "pinia";
  // 数据
  // let sum = ref(1) // 当前求和
  let n = ref(1) // 用户选择的数字

  const countStore = useCountStore()
  console.log('@@@',countStore.sum)
  console.log('@@@',countStore.$state.sum)

  //storeToRefs只会关注store中数据，不会对方法进行ref包裹
  const {sum,address,bigSum,bigSum2} = storeToRefs(countStore);

  // 方法
  function add(){
    // sum.value += n.value
    //第一种修改方式
    // countStore.sum
    //第二种修改方式
    // countStore.$patch({
    //   sum: countStore.sum + n.value,
    //   address:'湖北'
    // })
    //第三种修改方式
    countStore.increment(n.value)
  }
  function minus(){
    // sum.value -= n.value
    // countStore.sum -= n.value
    countStore.$patch({
      sum: countStore.sum - n.value,
      address:'河北'
    })
  }
</script>

<style scoped>
  .count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button {
    margin: 0 5px;
    height: 25px;
  }
</style>
