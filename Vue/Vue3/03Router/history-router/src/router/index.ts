// 创建一个路由器，并暴露出去

//第一步：引入createRouter
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
//引入可能要呈现的组件
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import News from "@/views/News.vue";

//第二步：创建路由器
const router = createRouter({
    // 路由器工作模式
    //在制定路由的之后 一定要想好路由器的工作模式
    history: createWebHashHistory(),
    //配置路由规则
    routes: [
        // 配置路由
        {
            // 路由路径
            path: '/home',
            //组件
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/news',
            component: News,
        }
    ]
});

//暴露router
export default router;
