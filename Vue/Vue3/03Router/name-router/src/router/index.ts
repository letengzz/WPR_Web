// 创建一个路由器，并暴露出去

//第一步：引入createRouter
import {createRouter, createWebHistory} from 'vue-router';
//引入可能要呈现的组件
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import News from "@/views/News.vue";

//第二步：创建路由器
const router = createRouter({
    // 路由器工作模式
    history: createWebHistory(),
    //配置路由规则
    routes: [
        // 配置路由
        {
            // 路由名称
            name:'zy',
            // 路由路径
            path: '/home',
            //组件
            component: Home
        },
        {
            // 路由名称
            name:'gy',
            path: '/about',
            component: About
        },
        {
            // 路由名称
            name:'xw',
            path: '/news',
            component: News
        }
    ]
});

//暴露router
export default router;
