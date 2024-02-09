<!-- 编写模板结构 -->
<template>
<!--  :list : 表达式-->
    <Person a="哈哈" b="嘿嘿" :list="personList"/>
<!-- 输入错误时，并没有展示想要的数据 如果v-for写的指定的数字 则循环多少次-->
<!--    <Person a="哈哈" b="嘿嘿" :list="5"/>-->
</template>
<!-- 编写脚本代码 -->
<script setup lang="ts" name="App">
import Person from "./components/person.vue"

//@代表src目录
//PersonInter不是一个具体的值,而是一个接口(类型) 前缀需要添加type
import {type PersonInter,a,type Persons} from '@/types'
import {reactive} from "vue";
console.log(a)
//对person进行限制：定义一个person变量，必须符合PersonInter接口的规范
// let person:PersonInter = {id: "zs1", name:'张三', age: 18, gender: '男'}

//定义一个数组，必须符合PersonInter接口的规范
//方式一：使用Array泛型为PersonInter 每一项都是PersonInter类型
// let personList:Array<PersonInter> = [
//     {id: "zs1", name:'张三', age: 18, gender: '男'},
//     {id: "ls1", name:'李四', age: 20, gender: '女'},
// ]
//方式二：使用自定义类型
// let personList2:Persons = [
//   {id: "zs1", name:'张三', age: 18, gender: '男'},
//   {id: "ls1", name:'李四', age: 20, gender: '女'},
// ]
//响应式 调用函数时传入泛型
let personList = reactive<Persons>( [
  {id: "zs1", name:'张三', age: 18, gender: '男'},
  {id: "ls1", name:'李四', age: 20, gender: '女'},
])
</script>
<!-- 样式 -->
<style scoped>
/* css */
</style>
