// 引入defineStore用于创建store
import {defineStore} from "pinia";
import axios from "axios";
import {nanoid} from 'nanoid'
import {reactive} from "vue";

// 定义并暴露一个store
// 命名useXxxStore
// export const useTalkStore = defineStore('talk', {
//     // 动作
//     actions: {
//         async getATalk(){
//             // 发请求，下面这行的写法是：连续解构赋值+重命名
//             let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
//             // 把请求回来的字符串，包装成一个对象
//             let obj = {id:nanoid(),title}
//             // 放到数组中
//             this.talkList.unshift(obj)
//         }
//     },
//     // 状态
//     //真正存放数据的地方
//     state() {
//         return {
//             talkList: JSON.parse(localStorage.getItem('talk') as string) || []
//         }
//     },
//     // 计算
//     getters: {}
// })
export const useTalkStore = defineStore('talk', () => {
    //数据
    // talkList 就是state
    const talkList = reactive(JSON.parse(localStorage.getItem('talk') as string) || [])

    //函数
    // getATalk 就是actions
    async function getATalk() {
        // 发请求，下面这行的写法是：连续解构赋值+重命名
        let {data: {content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        // 把请求回来的字符串，包装成一个对象
        let obj = {id: nanoid(), title}
        // 放到数组中
        talkList.unshift(obj)
    }
    return  {talkList,getATalk}
})
