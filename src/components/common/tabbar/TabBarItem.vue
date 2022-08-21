<template>
	<div @click="itemClick" class="tab-bar-item">
		<slot name="item-icon" v-if="!isActive"></slot>
		<slot name="item-icon-active" v-else></slot>
		<div :style="activeStyle" ><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default{
		name:'tabbaritem',
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'#E66EB2'
			}
		},
		data(){
			return{
				
				
			}
		},
		computed:{
			//如果当前路由跟当前item的path相同 则将它作为高亮
			isActive(){
				return this.$route.path==this.path?true:false
			},
			activeStyle(){
				return this.isActive?{color:this.activeColor}:{}
			}
		},
		methods:{
			itemClick(){
				this.$router.push(this.path)
			}
		}
	}
</script>

<style>
	.tab-bar-item{
		display: inline-block;
		flex: 1;
		text-align: center;
		font-size: 14px;
		color: black;
	}

	.tab-bar-item img{
		height: 24px;
		width: 24pxs;
	}
</style>