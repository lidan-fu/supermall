<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	import EventBus from '@/eventBus.js'
	export default{
		name:'BetterScroll',
		data(){
			return{
				scroll:null
			}
		},
		// beforeCreate () {
		// 	console.group('%c%s', 'color:green', 'beforeCreate 创建前状态===============组件 scroll》')
		// },
		// created () {
		// 	console.group('%c%s', 'color:green', 'created 创建完毕状态===============组件 scroll》')
		// },
		// beforeMount () {
		// 	console.group('%c%s', 'color:green', 'beforeMount 挂载前状态===============组件 scroll》')
		// },
		mounted () {
			// console.group('%c%s', 'color:green', 'mounted 挂载状态===============组件 scroll》')
			// 配置并初始化scroll对象
			this.scroll=new BScroll(this.$refs.wrapper,{
				click:true,
				probeType:3,
				pullUpLoad: true
			})
			//监听滚动距离
			this.scroll.on('scroll',(posi)=>{
				this.$emit('scroll',posi)
			})
			//监听是否下拉到了最底部
			this.scroll.on('pullingUp',()=>{
				this.$emit('pullingUp')
			})
		},
		// beforeUpdate () {
		// 	console.group('%c%s', 'color:green', 'beforeUpdate 更新前状态===============组件 scroll》')
		// },
		// updated () {
		// 	console.group('%c%s', 'color:green', 'updated 更新状态===============组件 scroll》')
		// },
		// beforeDestroy () {
		// 	console.group('%c%s', 'color:green', 'beforeDestroy 破前状态===============组件 scroll》')
		// },
		// destroyed () {
		// 	console.group('%c%s', 'color:green', 'destroyed 破坏状态===============组件 scroll》')
		// },
		methods:{
			refresh() {
        this.scroll && this.scroll.refresh()
      }
		}
	}
</script>
<style>
</style>