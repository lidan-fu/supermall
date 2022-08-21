<template>
	<div class="detail-goods-info">
		<div class="info-img">
			<p>商品详情图</p>
			<img class="detail-goods-info-img" v-for="(item,index) in goods" :data-src="item" :key=index @load="imgLoad" alt="">
		</div>
	</div>
</template>

<script>
	export default{
		name:"DetailGoodsInfo",
		props:{
			goods:{
				type:Array,
				default(){
					return {}
				}
			}
		},
		data(){
			return{
				observer:null,
				currentIndex:0
			}
		},
		methods:{
			callback(e){
				console.log(e)
				e.forEach(entry=>{
					if(entry.isIntersecting){
						const img=entry.target
						const data_src=img.getAttribute('data-src')
						img.setAttribute('src',data_src)
						this.observer.unobserve(img)
						console.log("********触发了观察事件")
						// const images=[...document.querySelectorAll(".detail-goods-info-img")]
						// this.currentIndex++
						// this.observer.observe(images[this.currentIndex])
						// images=images.shift()
						// console.log(images)
					}
				})
			},
			imgLoad(){
				console.log("图片加载完了")
				
			}
		},
		created(){
			this.observer=new IntersectionObserver(this.callback)
		},
		updated(){
			console.log("goods info updated")
			const images=document.querySelectorAll(".detail-goods-info-img")
			// images.forEach(image=>{
			// 	this.observer.observe(image)
			// })
			this.observer.observe(images[0])
		}
	}
</script>

<style scoped>
	.detail-goods-info{
		padding: 10px 8px;
		border-bottom: 10px solid #f6f6f6;
	}
</style>