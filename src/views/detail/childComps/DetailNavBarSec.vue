<template>
	<div class="detail-navbar-sec">
		<div class="title">
			<div  class="title-item" 
						@click="titleClick(index)"
						v-for="(item,index) in navList"
						:class="{active: index==currentIndex}">
				<span>{{item}}</span>		
			</div>	
	</div>
</div>
</template>
<script>
	import EventBus from "@/eventBus.js"
	export default{
		name:"DetailNavBarSec",
		data(){
			return{
				navList:['商品','评价','详情','推荐'],
				currentIndex:0
			}
		},
		mounted(){
			// console.log("navsec mounted")
		},
		methods:{
			titleClick(index){
				this.currentIndex=index
				this.$emit("getIndex",index)
			}
		}
	}
</script>
<style scoped>
	.detail-navbar-sec{
		position: fixed;
		top: 60px;
		left: 0;
		right: 0;
		background-color: white;
		padding-bottom: 10px;
		z-index: 1000;
	}
	.title{
		display: flex;
		justify-content: space-around;
		font-size: 14px;
	}
	.title-item{
		text-align: center;
		flex: 1;
	}
	.title-item.active span{
		color: #EA546F;
    border-bottom: 2px solid;
    padding: 0 3px 1px;
	}
</style>