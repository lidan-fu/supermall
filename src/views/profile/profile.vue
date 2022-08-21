<template>
	<div class="profile">
		<div>这里是profile</div>
		<!-- <div>{{value}}</div>
		<input type="text" :value="value" @input="value=$event.target.value"> -->
		<add-num v-model="num"></add-num>
		<p>{{num}}</p>
	</div>
</template>

<script>
	import AddNum from "./childComps/addNum"
	export default{
		name:'Profile',
		components:{
			AddNum
		},
		data(){
			return{
				value:'hello',
				num:10
			}
		},
		methods:{
			inputChange(e){
				this.value=e.target.value
			},
			changenum(val){
				this.num=val
				// console.log(val)
			}
		}
	}
</script>

<style scoped>
.profile{
	font-size: 16px;
	color: black;
}
</style>