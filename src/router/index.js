import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
/*import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'*/

//路由组件的懒加载
const Msite = ()=> import('../pages/Msite/Msite.vue')
const Order = () => import('../pages/Order/Order.vue')
const Search = () => import('../pages/Search/Search.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
import Login from '../pages/login/Login'
import Shop from '../pages/Shop/Shop.vue'
import ShoopGoods from '../pages/Shop/ShoopGoods/ShoopGoods.vue'
import ShopRating from '../pages/Shop/ShopRating/ShopRating.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
export default new VueRouter({
    routes:[
        {
            path:'/msite',
            component:Msite,//只有执行此函数才加载路由组件,这个函数在请求对应的路由路径才会执行（第一次）
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true
            }
        },
        //默认选中
        {
           path:'/',
           redirect:'/msite' 
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/shop',
            component:Shop,
            children:[
                {
                    path:'/shop/info',
                    component:ShopInfo
                },
                {
                    path:'/shop/ratings',
                    component:ShopRating
                },
                {
                    path:'/shop/goods',
                    component:ShoopGoods
                },
                {
                    path:'',
                    redirect:'/shop/goods' 
                 },
            ]
        }
    ]
})