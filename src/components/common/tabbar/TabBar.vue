<template>
	<div class="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name:'tabbar',
		data(){
			return{

			}
		},
		methods:{
			pushtoprofile(){
				this.$router.push({
					path:'/profile',
					query:{
						name:'xiaohong'
					}
				})
			}
		}
	}
</script>

<style>
	.tab-bar{
		display: flex;
		text-align: center;
		height: 60px;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		border-top: 1px solid #E0E0E0;
		padding-top: 4px;
		background-color: white;
		z-index: 998;
	}
</style>