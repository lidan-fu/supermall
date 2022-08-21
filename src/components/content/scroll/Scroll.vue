<template>
	<div class="scroll">
		<slot></slot>
	</div>
</template>
<script>
	import EventBus from "@/eventBus.js"
	export default{
		name:"Scroll",
		mounted(){
			console.log("scroll mounted")
		}
	}
</script>
<style scoped>
	.scroll{
		scroll-behavior:smooth;
		overflow: scroll;
	}
</style>