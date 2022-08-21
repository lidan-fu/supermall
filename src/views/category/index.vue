<template>
	<div class="category-container">
		<div>这里是category</div>
		<div><span v-for="item in arr">{{item}}</span></div>
		<div>{{n}}</div>
		<button @click="selfadd">数字变化</button>
	</div>
</template>

<script>
	export default{
		name:"Category",
		data(){
			return{
				arr:[1,1,1,1,1,1,1],
				n:1
			}
		},
		methods:{
			selfadd(){
				console.log("点击了按钮")
				// this.arr[0]=2
				setInterval(()=>{
					this.$set(this.arr,0,2)
					if(this.arr[0]==2){
						this.arr.shift()
					}
				},1000)
				this.n=2
			}
		}
	}
</script>

<style>
	
</style>