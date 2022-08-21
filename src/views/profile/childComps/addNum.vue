<template>
	<div>
		<input value="加" type="button" @click="play(1)" />
		<!-- <el-button @click="play(-1)">减</el-button> -->
	</div>
</template>
<script>
	export default{
		name:"AddNum",
		props:{
			num:{
				type:Number
			}
		},
		model:{
			prop:'num',
			event:'zard'
		},
		methods:{
			play(step){
				console.log("触发了play")
				var newNum=this.num+step
				this.$emit('zard',newNum)
			}
		}
	}
</script>
<style>
	
</style>