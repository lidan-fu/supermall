<template>
	<div class="carousel">
		<div class="inner"><slot></slot></div>
	</div>
</template>

<script>
	export default{
		name:'Carousel'
	}
</script>

<style>
	.inner{
		width: 100%;
		position: relative;
	}
</style>