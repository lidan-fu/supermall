<template>
	<div class="cart-btm-bar">
		<div class="left">
			<input 
				:checked="isChkAll" 
				@click="allChange" 
				id="chkAll"
				type="checkbox">
			<label for="chkAll">全选</label>
		</div>
		<div class="center">
			<span>合计: </span>
			<span>￥{{totalAmount}}</span>
		</div>
		<div class="right">
			<div>结算</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"CartBtmBar",
		computed:{
			isChkAll(){
				if(this.$store.state.cartList==0) return false
				return !this.$store.state.cartList.find(item=>item.checked==false)
			},
			// 计算商品总价格
			totalAmount(){
				if(this.$store.state.cartList==0) return 0
				return this.$store.state.cartList.filter(item=>item.checked==true).reduce((sum,item)=>{return sum+item.price*item.count},0)
			}
		},
		methods:{
			allChange(){
				if(this.isChkAll){
					this.$store.state.cartList.forEach(item=>{
						item.checked=false
					})
				}else{
					this.$store.state.cartList.forEach(item=>{
						item.checked=true
					})
				}
			}
		}
	}
</script>
<style scoped>
	.cart-btm-bar{
		font-size: 14px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 60px;
		left: 0;
		right: 0;
		background-color: white;
		height: 60px;
		z-index: 1000;
		border-top: 1px solid #E0E0E0;
		padding:0 10px;
	}
	.right div{
		color: white;
    width: 82px;
    height: 40px;
    text-align: center;
    background: linear-gradient(to right, #FE4466, #FE4490);
    line-height: 40px;
    border-radius: 20px;
    font-size: 13px;
	}
</style>