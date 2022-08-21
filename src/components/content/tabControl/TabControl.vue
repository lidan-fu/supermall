<template>
	<div class="tab-control" ref="tabcontrol">
		<div 
		class="tab-control-item"
		@click="changeCurrent(index)"
		v-for="(item,index) of tabs" 
		:key="index"
		:class="{active:index==currentIndex}" >
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'TabControl',
		props:{
			tabs:{
				default(){
					return []
				}
			},
			currentIndex:{
				default:0,
				type:Number
			}
		},
		methods:{
			changeCurrent(index){
				// this.currentIndex=index
				this.$emit('TabClick',index)
			}
		}
	}
</script>

<style>
.tab-control{
	display: flex;
  background-color: white;
  margin-bottom: 10px;
}
.tab-control-item{
	flex: 1;
	
}
.tab-control-item span{
	margin: auto;
	font-size: 14px;
	text-align: center;
	display: block;
	width: 40px;
	padding: 5px 0;
}
.tab-control-item.active span{
	color: var(--color-high-text);
	border-bottom: 3px solid var(--color-high-text);
}
</style>