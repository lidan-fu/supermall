<template>
	<div style="height: 100px;width: 100%;top: 150px;position: fixed;color: white;z-index:1002">
		<button @click="count">点击+1</button>
	</div>
</template>
<script>
	import EventBus from '@/eventBus.js'
	export default{
		name:"mybutton",
		methods:{
			count(){
				EventBus.$emit("addcount","点击了button")
			}
		}
	}
</script>
<style>
	
</style>