<template>
	<div class="cart-goods-item">
		<div class="item-check">
			<input type="checkbox" v-model="goods.checked" @click="chkOne">
		</div>
		<div class="item-img">
			<img :src="goods.img" alt="">
		</div>
		<div class="item-info">
			<div class="title">{{goods.title}}</div>
			<div class="other"><span>￥{{goods.price}}</span><span>x{{goods.count}}</span></div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"CartGoodsitem",
		props:{
			goods:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			chkOne(){
				console.log("点击了选中按钮")
				console.log(this.$store.state.cartList)
			}
		}
	}
</script>
<style scoped>
	.cart-goods-item{
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}
	.item-img{
		height: 100px;
		width: 100px;
		overflow: hidden;
	}
	.item-info{
		width: 60%;
		position: relative;
	}
	.other{
		display: flex;
		justify-content: space-between;
		position: absolute;
		bottom: 0;
		width: 100%;
	}
	.item-img img{
		width: 100%;
	}
</style>
