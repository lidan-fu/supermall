<template>
	<div class="slide swiper-item">
		<slot></slot>
	</div>
</template>
<script>
	import EventBus from '@/eventBus.js'
	export default{
		name:'SwiperItem',
		props:{

		},
		data(){
			return {
				swiperitemTimer:null
			}
		},
		mounted(){
			// console.log("SwiperItem mounted")
			EventBus.$emit("swiperitemMounted")
		}
	}
</script>
<style>
	.slide{
		flex-shrink: 0;
		width: 100%;
	}
</style>