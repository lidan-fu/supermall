<template>
	<div class="back-top">
		<img src="~assets/img/common/top.png" alt="">
	</div>
</template>
<script>
	export default{
		name:'BackTop'
	}
</script>
<style>
	.back-top{
		position: fixed;
		height: 70px;
		width: 70px;
		border-radius: 70px;
		right: 15px;
		bottom: 120px;
		z-index: 999;
	}
	.back-top img{
		height: 100%;
		width: 100%;
	}
</style>