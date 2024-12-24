// 创建一个路由器，并暴露出去

//第一步：引入createRouter
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
//引入可能要呈现的组件
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import News from "@/views/News.vue";
import Detail from "@/views/Detail.vue";

//第二步：创建路由器
const router = createRouter({
    // 路由器工作模式
    //在制定路由的之后 一定要想好路由器的工作模式
    history: createWebHistory(),
    //配置路由规则
    routes: [
        // 配置路由
        {
            // 路由名称
            name: 'sy',
            // 路由路径
            path: '/home',
            //组件
            component: Home
        },
        {
            // 路由名称
            name: 'gy',
            path: '/about',
            component: About
        },
        {
            // 路由名称
            name: 'xw',
            path: '/news',
            component: News,
            children: [
                {
                    name: 'detail',
                    //注意 不用写/
                    path: 'detail',
                    // component: () => import('@/views/Detail.vue')
                    component: Detail
                }
            ]
        },
        {
            path:'/',
            redirect:'/about'
        }
    ]
});

//暴露router
export default router;
