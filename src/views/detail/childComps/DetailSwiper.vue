<template>
	<div class="detail-swiper">
		<!-- <div v-show="goods.length==0" class="holder"></div> -->
		<div v-if="goods.length!==0" class="swiper-container">
			<ul>
				<li v-for="(item,index) in goods">
					<img :src="item" alt="" @load="imgLoad">
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:"DetailSwiper",
		props:{
			goods:{
				type:Array,
				default(){
					return []
				}
			},
			testdata:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			imgLoad(){
				// this.$emit("imgLoaded","test")
				console.log("banner加载完成")
			}
		},
		// beforeCreate(){
		// 	console.log(goods)
		// },
		created(){
			// console.log("swiper created")
		},
		updated(){
			// console.log("swiper updated")
		},
		mounted(){
			console.log("swiper mounted")
		}
	}
</script>
<style scoped>
	.detail-swiper{
		/*height: 250px;
		width: 100%;*/
		/*position: relative;*/
		/*width: 100%;*/
		/*background-color: black;*/
	}
	.holder{
		height: 250px;
		width: 100%;
		background-color: #f2f2f2;
		transition: all 1s;
	}
	.swiper-container{
		overflow-x: scroll;
	}
	.swiper-container ul{
		white-space: nowrap;
		font-size: 0;
	}
	.swiper-container ul li{
		height: 400px;
		width: 100%;
		overflow-y: hidden;
		display: inline-block;
	}
	.swiper-container ul li img{
		background-color: beige;
	}
</style>