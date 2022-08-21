<template>
	<div class="hy-swiper" id="hy-swiper">
		<!-- 图片区域 -->
		<div class="swiper">
			<slot name="swiperItem"></slot>
		</div>
		<!-- 指示器 -->
		<div class="indicator">
			<ul>
				<slot name="indicatorItem">
					<li 
						slot="indicatorItem"
						v-for="(item,index) in slideCount"
						:key=index
						:class="{active:index==currentIndex-1}"
						></li>
				</slot>
			</ul>
		</div>
	</div>
</template>
<script>
	import EventBus from '@/eventBus.js'
	export default{
		name:'Swiper',
		data(){
			return {	
				currentIndex:1,  
				interval:2500,  //轮播间隔时间
				animDuration:300,  //图片滚动的动画时间
				transWidth:0,  //swiper移动的距离
				swiperStyle:null,  //swiper样式
				slideCount:0,  //轮播图个数
				swiperitemMountedTimer:null  //为了解决防抖的定时器
			}
		},
		mounted(){
			//1、swiperItem全部mounted之后，开始进行初始化操作
			EventBus.$on('swiperitemMounted',()=>{
				if(this.swiperitemMountedTimer!==null){
					clearTimeout(this.swiperitemMountedTimer)
				}
				this.swiperitemMountedTimer=setTimeout(()=>{
					this.handleDom()
				},100)
			})
		},
		beforeDestroy () {
	    EventBus.$off('swiperitemMounted')
	  },
		methods:{
			/**
			 * 初始化操作
			 */
			handleDom(){
				// console.log("调用了handeldom")
				//	获取Dom,获取位移数值,获取swiper样式，获取节点个数
				const swiper=document.querySelector('.swiper')
				const slides=swiper.getElementsByClassName('slide')
				this.transWidth=swiper.clientWidth
				this.swiperStyle=swiper.style
				this.slideCount=slides.length
				//	克隆并插入首尾slide
				const cloneLast=slides[slides.length-1].cloneNode(true)
				const cloneFirst=slides[0].cloneNode(true)
				swiper.insertBefore(cloneLast,slides[0])
				swiper.appendChild(cloneFirst)
				//	将swiper移动到正确的位置
				this.setSwiperTransform(-this.transWidth)
				//	调用定时器
				this.startTimer()
			},

			/**
			 * 自动轮播定时器
			 */
			startTimer(){
				setInterval(()=>{
					// console.log('开启首页轮播图定时器')
					this.currentIndex++
					//	给swiper增加过渡效果，并移动swiper
					this.swiperStyle.transition=`all ${this.animDuration}ms`
					this.setSwiperTransform(-this.transWidth*this.currentIndex)
					//	对临界位置做出判断
					setTimeout(()=>{
						if(this.currentIndex>=this.slideCount+1){
							this.currentIndex=1
							this.swiperStyle.transition='none'
							this.setSwiperTransform(-this.transWidth)
						}
					},this.animDuration)
				},this.interval)
			},

			/**
			 * 移动swiper
			 */
			setSwiperTransform(position){
				this.swiperStyle.transform=`translateX(${position}px)`
			}

			/**
			 * 临界位置处理
			 */
	}
}
</script>
<style scoped>
	.hy-swiper{
		position: relative;
		overflow: hidden;
	}
	.swiper{
		display: flex;
	}
	.indicator{
		position: absolute;
		bottom: 10px;
		left: 50%;
		transform: translateX(-50%);
	}
	.indicator ul{
		display: flex;
	}
	.indicator ul li{
		height: 8px;
		width: 8px;
		border-radius: 5px;
		background-color: #ebedf0;
		opacity: 0.7;
		margin: 0 3px;
	}
	.indicator ul li.active{
		background-color: white;
		opacity: 1;
	}
</style>