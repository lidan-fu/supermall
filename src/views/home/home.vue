<template>
	<div id="home" ref="home">
		<!-- navbar -->
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<!-- 回到顶部 -->
		<back-top 
			ref="backtop"
			@click.native="toTop"
			v-show="toTopShow"/>
		<!-- tab-control-clone -->
		<tab-control 
			class="tab-control-clone" 
			v-show="cloneTabShow"
			:currentIndex="currentIndex"
			:tabs="['流行','新款','精选']" 
			@TabClick="TabClick"/>
		<better-scroll 
			class="scroll" 
			ref="scroll" 
			@pullingUp="loadMore"
			@scroll="contentScroll">
			<home-swiper :banners="banners"></home-swiper>
			<recommend-view :recommends="recommend" />
			<feature-view class="feature-view" />
			<tab-control 
				class="tab-control" 
				ref="tabcontrol"
				:currentIndex="currentIndex"
				:tabs="['流行','新款','精选']" 
				@TabClick="TabClick"/>
			<goods-list :goods="goodsList" />
		</better-scroll>
		<!-- swiper -->
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar.vue'
	import RecommendView from './childComps/RecommendView'
	import FeatureView from './childComps/FeatureView'
	import HomeSwiper from './childComps/HomeSwiper'

	import TabControl from '@/components/content/tabControl/TabControl'
	import GoodsList from '@/components/content/goods/GoodsList'
	import BetterScroll from '@/components/content/scroll/BetterScroll'
	import BackTop from '@/components/content/backTop/BackTop'

	import {getHomeMultidata,getHomeGoods} from '@/network/home.js'
	import {debounce} from "@/utils.js";
	import EventBus from '@/eventBus.js'

	export default{
		name:'Home',
		components:{
			NavBar,
			RecommendView,
			FeatureView,
			TabControl,
			GoodsList,
			BetterScroll,
			BackTop,
			HomeSwiper
		},
		data(){
			return {
				banners:null,
				recommend:null,  //推荐商品
				currentType:'pop',  //默认分类
				currentIndex:0,  //默认分类的index
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]},
				},
				toTopShow:false,  //回到顶部
				cloneTabShow:false,
				tabControlTop:0,  
				pageY:0,  //记录页面滚动的位置
				loadMoreFlag:true
			}
		},
		computed:{
			goodsList(){
				return this.goods[this.currentType].list
			}
		},
		// beforeCreate(){
		// 	console.group('%c%s', 'color:red', 'beforeCreate 创建前状态===============组件home》')
		// },
		created(){
			getHomeMultidata().then(res=>{
				this.banners=res.data.data.banner.list    //轮播图数据
				this.recommend=res.data.data.recommend.list    //轮播图底下四个分块的数据
			})
			this.getHomeGoods('pop')  //商品数据-流行
			this.getHomeGoods('new')	//商品数据-新款
			this.getHomeGoods('sell')	 //商品数据-精选
			this.loadMoreFlag=true
		},
		mounted(){
			this.getTabControlTop()  //获取商品分类tab距离页面顶部高度
			this.refreshPage()  //刷新scroll高度
		},
		beforeDestroy(){
			// console.group('%c%s', 'color:red', 'beforeDestroy 销毁前状态===============组件home》')

		},
		activated(){
			//进入页面时刷新滚动区域高度
			this.$refs.scroll.refresh()
			//进入页面时，定位到上次离开时的位置
			this.$refs.scroll.scroll.scrollTo(0,this.pageY,0)  
		},
		deactivated(){
			//离开页面时，记录滚动的位置
			this.pageY=this.$refs.scroll.scroll.y
		},

		methods:{
			/**
		   * 获取商品分类tab距离页面顶部高度
		   */
			getTabControlTop(){
				this.$nextTick(()=>{
					setTimeout(()=>{
						this.tabControlTop=this.$refs.tabcontrol.$el.offsetTop
					},500)
				})
			},
			/**
		   * 每当一个商品mounted之后，scroll就进行一次refresh
		   */
			refreshPage(){
				EventBus.$on("goodsListItemMounted",()=>{
						this.$refs.scroll.refresh()
				})
				// const refresh = debounce(this.$refs.scroll.refresh, 500)
				// EventBus.$on("goodsListItemMounted",()=>{
				// 		refresh()
				// })
			},
			
			TabClick(val){
				switch (val){
					case 0:
					this.currentType='pop'
					break
					case 1:
					this.currentType='new'
					break
					case 2:
					this.currentType='sell'
					break
				}
				this.currentIndex=val
			},

			toTop(){
				this.$refs.scroll.scroll.scrollTo(0,0,100)
			},

			/**
		   * 控制组件'回到顶部'、'次级tab'是否显示
		   */
			contentScroll(val){
				//如果滚动距离大于1000 toTopShow为true 让回到顶部显示
				this.toTopShow=-(val.y)>1000  
				//如果滚动距离到了次级tab位置 让克隆的次级tab出现
				this.cloneTabShow=(-val.y)>=this.tabControlTop
			},

			/**
		   * 请求商品数据
		   */
			getHomeGoods(type){
				this.loadMoreFlag=false
				const page=this.goods[type].page+1
				getHomeGoods(type,page)
				.then(res=>{
					this.goods[type].list.push(...res.data.data.list)
					this.goods[type].page+=1
					this.loadMoreFlag=true
					//要先调用这个方法 下次才能正确进行上拉加载
					if(this.$refs.scroll) this.$refs.scroll.scroll.finishPullUp()
				})
			},

			/**
		   * 上拉加载更多
		   */
			loadMore(){
				if(this.loadMoreFlag) this.getHomeGoods(this.currentType)
			}
			// refreshScroll(){
			// 	debounce(this.$refs.scroll.scroll.refresh,500)
			// 	console.log('scroll 刷新了')
			// },
			//refresh防抖处理
			// debounce(func, delay) {
			// 	let timer = null
			// 	return function (...args) {
			// 		if (timer) clearTimeout(timer)
			// 			timer = setTimeout(() => {
			// 				func.apply(this, args)
			// 			}, delay)
			// 	}
			// }
		}
	}
</script>

<style scoped>
	#home{
		height: 100vh;
		position: relative;
	}
	.home-nav{
		background-color: var(--color-tint);
		color: white;
		position: fixed;
		top: 0;
		font-size: 16px;
	}
	.swiper{
		width: 100%;
		height: 170px;
		border-bottom: 1px solid #eee;
	}
	.feature-view{
		margin-bottom: 20px;
	}
	.tab-control{

	}
	.tab-control-clone{
		position: fixed;
		top: 44px;
		left: 0;
		right: 0;
		z-index: 997;
	}
	.scroll{
		overflow: hidden;
		position: absolute;
		top: 44px;
		bottom: 60px;
		left: 0;
		right: 0;
	}
</style>
