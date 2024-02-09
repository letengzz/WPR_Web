<template>
  <div class="person">
<!--    <h2>{{a}}</h2>-->
<!--    <h2>{{x.a}}</h2>-->
<!--    <h2 >{{list}}</h2>-->
    <ul>
      <li v-for="person in list" :key="person.id">
        {{person.name}}- {{person.age}}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Person">
//defineProps是宏函数，可以直接用，无需引入
// import { defineProps } from 'vue';
import {type Persons} from '@/types'

// todo 只接收a
// defineProps(["a","list"])
// todo 接收所有的接收的数据 并将props保存
// let x = defineProps(['a','list']);
// 由于没有传入c 所以c为undefined
// let x = defineProps(["a", "b", "c"]);
// console.log(x)
// console.log(x.a)
// todo 接收list并限制类型
// defineProps<{list: Persons}>()

// todo 接收+限制类型+指定默认值+限制必要性
let props = withDefaults(defineProps<{list?:Persons}>(),{
  //需要是一个函数 返回值
  list:()=>[{id:'pq',name:'小猪佩奇',age:18}]
})
console.log(props)
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
</style>
