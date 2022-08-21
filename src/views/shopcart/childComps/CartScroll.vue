<template>
	<div class="detail-scroll">
		<slot></slot>
	</div>
</template>
<script>
	import EventBus from "@/eventBus.js"
	export default{
		name:"DetailScroll",
		mounted(){
			console.log("scroll mounted")
			this.$emit("scollMounted","test")
		}
	}
</script>
<style>
	.detail-scroll{
		scroll-behavior:smooth;
	}
</style>