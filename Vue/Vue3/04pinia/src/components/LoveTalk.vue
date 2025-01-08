<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
<!--      <li v-for="talk in talkStore.talkList" :key="talk.id">{{talk.title}}</li>-->
      <li v-for="talk in talkList" :key="talk.id">{{talk.title}}</li>
<!--      <li v-for="talk in talkStore.$state.talkList" :key="talk.id">{{talk.title}}</li>-->
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
  import {reactive} from 'vue'
  import axios from "axios";
  import {nanoid} from 'nanoid'
  // 引入对应的useXxxxxStore
  import {useTalkStore} from "@/store/talk";
  import {storeToRefs} from "pinia";
  // 数据
  // let talkList = reactive([
  //   {id:'ftrfasdf01',title:'今天你有点怪，哪里怪？怪好看的！'},
  //   {id:'ftrfasdf02',title:'草莓、蓝莓、蔓越莓，今天想我了没？'},
  //   {id:'ftrfasdf03',title:'心里给你留了一块地，我的死心塌地'}
  // ])

  // 调用useXxxxxStore得到对应的store
  const talkStore = useTalkStore();
  //storeToRefs只会关注store中数据，不会对方法进行ref包裹
  const {talkList} = storeToRefs(talkStore);

  //mutate 本次修改的信息 state真正的数据
  talkStore.$subscribe((mutate,state)=>{
    console.log('talkStore保存的数据发生了变化',mutate,state)
    //localStorage里面存的都是字符串 如果不是字符串 底层会将调用toString
    localStorage.setItem('talk',JSON.stringify(talkList.value))
  })
  // 方法
  function getLoveTalk(){
    // 发请求，下面这行的写法是：连续解构赋值+重命名
    // let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    // // 把请求回来的字符串，包装成一个对象
    // let obj = {id:nanoid(),title}
    // // 放到数组中
    // talkList.unshift(obj)
    talkStore.getATalk();
  }
</script>

<style scoped>
  .talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
</style>
