<template>
	<div class="recommend">
		<div class="recommend-item" v-for="(item,index) in recommends" >
			<a :href="item.link"><img :src="item.image" alt=""></a>
			<p>{{item.title}}</p>
		</div>
	</div>
</template>

<script>
export default{
	name:"RecommendView",
	// data(){
	// 	return{

	// 	}
	// }
	props:{
		recommends:{
			type:Array,
			default(){
				return []
			}
		}
	}
}
</script>

<style>
	.recommend{
		display: flex;
		padding: 20px 0;
		border-bottom: 8px solid #eee;
	}
	.recommend-item{
		text-align: center;
		font-size: 0;
	}
	.recommend-item a{
		font-size: 0;
		display: inline-block;
	}
	.recommend-item img{
		width: 80%;
	}
	.recommend-item p{
		font-size: 14px;
		margin-top: 6px;
	}
</style>