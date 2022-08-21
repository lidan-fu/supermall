<template>
	<div class="goods-item" @click="toDetail">
		<img :src="goodsItemImgSrc"  @load="imageLoad" alt="">
		<div class="goods-info">
			<p>{{goodsItem.title}}</p>
		</div>
	</div>
</template>
<script>
	import EventBus from '@/eventBus.js'
export default{
	name:'GoodsListItem',
	props:{
		goodsItem:{
			type:Object,
			default(){
				return null
			}
		}
	},
	data(){
		return{
			imgLoadFlag:false
		}
	},
	computed:{
		goodsItemImgSrc(){
			return this.goodsItem.image||this.goodsItem.show.img
		}
	},
	mounted(){
		// console.log('item-mounted')
		// EventBus.$on("Msg",(value)=>{
		// 	console.log("接收数据")
		// 	console.log(value)
		// 	this.data=value
		// })
		// EventBus.$emit("itemMounted")
	},
	methods:{
		imageLoad() {
      EventBus.$emit('goodsListItemMounted')
    },
    toDetail(){
    	this.$router.push('/detail/'+this.goodsItem.iid)
    }
	}
}
</script>
<style>
	.goods-item{
		width: 46%;
		margin-bottom: 20px;
	}
	.goods-item img{
		border-radius: 4px;
	}
	.goods-info p{
		font-size: 14px;
		overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
	}
</style>