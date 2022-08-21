<template>
	<swiper>
		<!-- 轮播部分 -->
		<swiper-item 
		slot="swiperItem"
		v-for="(item,index) in banners" 
		:key="index"
		:slideindex=index>
			<a :href="item.link"><img :src="item.image" alt=""></a>
		</swiper-item>
	</swiper>
</template>
<script>
	import Swiper from '@/components/common/swiper/Swiper'
	import SwiperItem from '@/components/common/swiper/SwiperItem'
	export default{
		name:'HomeSwiper',
		components:{
			Swiper,
			SwiperItem
		},
		props:{
			banners:{
				type:Array,
				default(){
					return {}
				}
			}
		},
		data(){
			return{
				indicatorCount:0
			}
		},
		updated(){
			this.indicatorCount=this.banners.length
		}
	}
</script>
<style>
	
</style>