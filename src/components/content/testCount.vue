<template>
	<div style="height: 100px;width: 100%;top: 100px;position: fixed;color: red;z-index:1002">
		{{count}}
	</div>
</template>
<script>
	// import EventBus from '@/eventBus.js'
	export default{
		name:"test",
		data(){
			return{
				count:0
			}
		},
		methods:{
			countadd(){
				this.count++
			}
		}
	}
</script>
<style>
	
</style>