<template>
	<div class="car-item">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name:'CarItem',
		created(){
			console.log(this.$refs)
		}
	}
</script>

<style>
	.car-item{
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	img{
		width: 100%;
	}
</style>