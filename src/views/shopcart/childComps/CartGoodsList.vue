<template>
	<div class="cart-goods-list">
		<div class="cart-goods-list-container">
			<slot></slot>
		</div>
	</div>
</template>
<script>
	export default{
		name:"CartGoodsList"
	}
</script>
<style scoped>
	.cart-goods-list-container{
		padding: 10px;
		font-size: 12px;
	}
</style>