<template>
	<div class="cart-navbar">
		<div class="left">
			<div>购物车</div>
			<div>({{cartListLength}})</div>
		</div>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex'
	export default{
		name:"CartNavBar",
		computed:{
			...mapGetters([
				'cartListLength'
			])
		}
	}
</script>
<style scoped>
	.cart-navbar{
		font-size: 14px;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: white;
		height: 60px;
		z-index: 1000;
		border-bottom: 1px solid #E0E0E0;
		padding: 0 10px;
	}
	.left{
		display: flex;
	}
</style>