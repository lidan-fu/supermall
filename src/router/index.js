import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/home.vue')
const Category = () => import('@/views/category')
const Shopcart = () => import('@/views/shopcart/ShopCart')
const Profile = () => import('@/views/profile/profile')
const Detail = () => import('@/views/detail/Detail.vue')


Vue.use(VueRouter)

const routes=[
	{path:'',redirect:'/home'},
	{
		path:'/home',
		component:Home,
		meta:{title:"home"}
	},
	{path:'/category',component:Category},
	{path:'/shopcart',component:Shopcart},
	{
		path:'/profile',
		component:Profile,
		meta:{title:"profile"}
	},
	{
		path:'/detail/:id',
		component:Detail,
		meta:{title:"detail"}
	}
]

const router=new VueRouter({
	routes,
	mode:'history'
	// linkActiveClass:'active'
})

// router.beforeEach((to,from,next)=>{
// 	if(to.meta.title){
// 		console.log("________________________"+to.meta.title)
// 	}
// 	next()
// })

export default router