//创建一个路由器并暴露出去
import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router'
//引入可能呈现的组件
import Home from '@/components/views/Home.vue'
import News from '@/components/views/News.vue'
import About from '@/components/views/About.vue' 
import Detail from '@/components/stage2/Detail.vue'

//创建路由器
const router = createRouter({
    history:createWebHistory(),//路由器的工作模式history hash
    routes:[//路由规则
        {
            name:'首页',
            path:'/home',
            component:Home
        },
        {   
            name:'新闻',
            path:'/news',
            component:News,
            children:[
                {
                    name:'详情',
                    path:'detail',//?配置参数必要性
                    component:Detail,
                    // //第一种写法：将路由收到的所有params参数作为props传给路由组件
                    // props:true,

                    //第二种写法：函数写法，可自己决定将什么作为props给路由组件
                    props(route){
                        return route.query
                    }

                    //第三种写法：对象写法，可自己决定将什么作为props给路由组件
                    // props:{
                    //     a:100,
                    //     b:200,
                    //     c:300
                    // }

                }
            ]
        },
        {   
            name:'关于',
            path:'/about',
            component:About
        },
        {
            path:'/',
            redirect:'/home',
        }

    ]
})
//暴露router
export default router