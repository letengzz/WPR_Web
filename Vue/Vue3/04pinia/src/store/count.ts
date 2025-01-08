// 引入defineStore用于创建store
import {defineStore} from "pinia";

// 定义并暴露一个store
// 命名useXxxStore
export const useCountStore = defineStore('count', {
    // 动作
    // actions 放置的一个个的方法 用于响应组件中的"动作"
    actions: {
        increment(value:number) {
            console.log('increment被调用了')
            //修改数据（this是当前的store）
            this.sum += value
        }
    },
    // 状态
    //真正存放数据的地方
    state() {
        return {
            sum: 6,
            address: '河北'
        }
    },
    // 计算
    getters: {
        bigSum(state){
            console.log('getters中的bigSum被调用了',this)
            return state.sum * 10;
        },
        bigSum2:state => state.sum * 20
    }
})
