<template>
	<div v-if="goods!==null" class="detail-base-info">
		<div class="info-title">
			<p>{{goods.title}}</p>
		</div>
		<div class="info-price">
			<span>{{goods.price}}</span>
			<span>{{goods.oldprice}}</span>
			<span>{{goods.discountDesc}}</span>
		</div>
		<div class="info-other">
			<span>{{goods.columns[0]}}</span>
			<span>{{goods.columns[1]}}</span>
			<span>{{goods.shopService[goods.shopService.length-1].name}}</span>
		</div>
		<div><span v-for="item in arr">{{item}}</span></div>
		<!-- <div>{{n}}</div> -->
		<button @click="selfadd">开始变化</button>
		<!-- <div class="info-service">
			<div  class="info-service-item" 
						v-for="index in goods.shopService.length-1" 
						v-if="index!==1" 
						:key=index>
				<img class="icon" :src="goods.shopService[index-1].icon" alt="">
				<span>{{goods.shopService[index-1].name}}</span>
			</div>
		</div> -->
	</div>
</template>
<script>
	import {getGoodsDetails} from "@/network/detail.js"
	export default{
		name:"DetailBaseInfo",
		props:{
			goods:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data(){
			return{
				arr:[1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				n:10
			}
		},
		methods:{
			selfadd(){
				this.arr[0]+=1
				// this.n+=1
			}
		},
		created(){
			// console.log("baseinfo created")
		},
		mounted(){
			console.log("baseinfo mounted")

			// setTimeout(()=>{
			// 	this.arr[0]=2
			// },1000)
		}
	}
</script>
<style scoped>
	.detail-base-info{
		padding: 10px 8px;
		border-bottom: 10px solid #f6f6f6;
		background-color: white;
	}
/*	.info-service-item .icon{
		width: 14px;
    height: 14px;
	}*/
</style>