<template>
	<div class="detail">
		<!-- <test-count ref="count"></test-count>
			<test-button></test-button> -->
			<!-- <Toast ref="toast" class="toast">
				<p>添加成功，在购物车等亲~</p>
			</Toast> -->
			<detail-nav-bar />
			<detail-nav-bar-sec 
				ref="navsec" 
				@getIndex="ScrollTo"
				class="detail-nav-bar-sec" />
			<detail-bottom-bar @addToCart="addToCart"/>
			<!-- 占位作用 -->
			<detail-plh class="detail-plh" ref="detail-plh"/>
			<!-- 滚动区域 -->
			<scroll ref="scroll" class="scroll">
				<!-- 轮播图 -->
				<detail-swiper :goods="bannerinfo" />
				<!-- 基本信息 -->
				<detail-base-info ref="baseinfo" :goods="baseinfo" />
				<!-- 评价 -->
				<detail-comments ref="comments"/>
				<!-- 商品信息 -->
				<detail-goods-info ref="goodsinfo" :goods="goodsinfo"/>
				<!-- 推荐商品 -->
				<detail-recom ref="recom">
					<goods-list :goods="recomList"></goods-list>
				</detail-recom>
			</scroll>
		</div>
	</template>
	<script>
	// import testCount from "@/components/content/testCount"
	// import testButton from "@/components/content/testButton"
	// import EventBus from '@/eventBus.js'
	import Scroll from "@/components/content/scroll/Scroll"
	// import Toast from "@/components/content/toast/Toast"

	import DetailPlh from "@/views/detail/childComps/DetailPlh"
	import DetailNavBar from "@/views/detail/childComps/DetailNavBar"
	import DetailNavBarSec from "@/views/detail/childComps/DetailNavBarSec"
	import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar"
	import DetailSwiper from "@/views/detail/childComps/DetailSwiper"
	import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo"
	import DetailComments from "@/views/detail/childComps/DetailComments"
	import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo"
	import DetailRecom from "@/views/detail/childComps/DetailRecom"
	import GoodsList from '@/components/content/goods/GoodsList'
	import {getGoodsDetails,Goods,getRecommend} from "@/network/detail.js"
	export default{
		name:"Detail",
		components:{
			Scroll,
			DetailNavBar,
			DetailBaseInfo,
			DetailNavBarSec,
			DetailSwiper,
			DetailGoodsInfo,
			DetailComments,
			DetailRecom,
			GoodsList,
			DetailPlh,
			DetailBottomBar
			// testCount,
			// testButton
		},
		data(){
			return{
				id:null,
				baseinfo:null,
				goodsinfo:null,
				recomList:null,  //推荐商品列表
				bannerinfo:[],
				totoplist:{
					baseinfo:0,
					comments:0,
					goodsinfo:0,
					recom:0
				}
			}
		},
		created(){
			// console.log("***detail created")
			// console.log(this)
			this.id=this.$route.params.id
			getGoodsDetails(this.id).then(res=>{			
				const data=res.data.result
				// console.log("获取到了data数据")
				this.bannerinfo=data.itemInfo.topImages
				this.baseinfo=new Goods(data.itemInfo,data.columns,data.shopInfo)
				this.goodsinfo=data.detailInfo.detailImage[0].list
			})
			getRecommend().then(res=>{
				console.log(res)
				this.recomList=res.data.data.list
			})
		},
		mounted(){
			// console.log("***detail mounted")
			// console.dir(Vue)
		},
		updated(){
			// console.log("detail updated,获取滚动数据")
			this.$refs.scroll.$el.addEventListener('scroll',this.handleScroll)
			this.$refs['detail-plh'].$el.style.display="none"
			this.totoplist.comments=this.$refs.comments.$el.offsetTop
			this.totoplist.goodsinfo=this.$refs.goodsinfo.$el.offsetTop
			this.totoplist.recom=this.$refs.recom.$el.offsetTop
		},
		methods:{
			// 滚动监听函数
			handleScroll(e){
				const scrolltop=e.target.scrollTop
				// console.log(scrolltop)
				if(scrolltop>0){
					this.$refs.navsec.$el.style.opacity=1
				}else{
					this.$refs.navsec.$el.style.opacity=0
				}
			},
			ScrollTo(val){
				switch(val){
					case 0:
					this.$refs.scroll.$el.scrollTop=0
					break
					case 1:
					this.$refs.scroll.$el.scrollTop=this.totoplist.comments-26
					break
					case 2:
					this.$refs.scroll.$el.scrollTop=this.totoplist.goodsinfo-26
					break
					case 3:
					this.$refs.scroll.$el.scrollTop=this.totoplist.recom-26
					break
				}
			},
			// 点击了加入购物车按钮
			addToCart(){
				const product={}
				product.title=this.baseinfo.title
				product.iid=this.id
				product.img=this.bannerinfo[0]
				product.price=this.baseinfo.lowNowPrice
				product.checked=true
				// 将该商品的信息更新到vuex
				this.$store.dispatch('addCart',product).then(res=>{
						console.log("添加成功")
				})
				this.$toast.Show("添加成功~",1000)
				// console.log(this.$toast.methods.show)
			}
		}
	}
</script>
<style scoped>
	*{
		font-size: 12px;
	}
	.toast{
		z-index: 1001;
	}
	.scroll{
		position: fixed;
		top: 60px;
		left: 0;
		right: 0;
		bottom: 60px;
		overflow-y: scroll;
		z-index: 999;
		background-color: white;
	}
	.detail-nav-bar-sec{
		opacity: 0;
		transition: all 0.5s
	}
</style>