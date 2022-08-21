<template>
	<div class="nav-bar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
  import EventBus from '@/eventBus.js'
  export default {
    name: "NavBar"
   //  created(){
   //    console.log('nav-created')
   //  },
   //  mounted(){
   //    console.log('nav-mounted')
   //    EventBus.$on("homeMounted",()=>{
			// 	console.log('测试触发了')
			// })
   //  },
   //  beforeDestroy(){
   //  	EventBus.$off("homeMounted")
   //  }
  }
</script>

<style scoped>
	.nav-bar{
		display: flex;
		line-height: 44px;
		text-align: center;
		width: 100%;
	}
	.left, .right{
		width: 60px;
	}
	.center{
		flex: 1;
	}
</style>