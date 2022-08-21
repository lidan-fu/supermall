<template>
	<div class="shop-cart">
		<!-- 顶部navbar -->
		<cart-nav-bar />
		<!-- 底部结算bar -->
		<cart-btm-bar />
		<!-- 滚动区域-商品列表 -->
		<scroll class="cart-scroll">
			<cart-goods-list>
				<cart-goods-item v-for="(item,index) in goodslist" :goods="item"/>
			</cart-goods-list>
		</scroll>
	</div>
</template>

<script>
	import CartNavBar from "@/views/shopcart/childComps/CartNavBar"
	import CartBtmBar from "@/views/shopcart/childComps/CartBtmBar"
	import Scroll from "@/components/content/scroll/Scroll"
	import CartGoodsList from "@/views/shopcart/childComps/CartGoodsList"
	import CartGoodsItem from "@/views/shopcart/childComps/CartGoodsItem"
	export default{
		name:"ShopCart",
		components:{
			CartNavBar,
			CartBtmBar,
			Scroll,
			CartGoodsList,
			CartGoodsItem
		},
		data(){
			return{
				goodslist:null
			}
		},
		created(){
			// console.log('shopcart created')
			// console.log(this)
			this.goodslist=this.$store.state.cartList
		},
		destroyed(){
			console.log('shopcart销毁了')
		},
		activated(){
			// console.log('激活了user')
			// this.$router.push(this.path)
		}
	}
</script>

<style>
	.cart-scroll{
		position: fixed;
		top: 60px;
		bottom: 120px;
		left: 0;
		right: 0;
	}
</style>