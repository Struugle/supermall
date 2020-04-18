import Vue from 'vue'
import Router from 'vue-router'

//安装router
Vue.use(Router)

//路由懒加载
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const ShopCart = () => import('views/shopCart/ShopCart')
const ProFile = () => import('views/profile/ProFile')
const Detail = () => import('views/detail/Detail')

//路由映射
const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/shopcart',
    component: ShopCart,
  },
  {
    path: '/profile',
    component: ProFile,
  },
  {
    path: '/detail',
    component: Detail,
  },
]

//创建路由实例
const router = new Router({
  routes,
  mode: 'history'
})

export default router