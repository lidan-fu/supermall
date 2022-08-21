<template>
	<div ref="toast" class="toast" v-show="isShow">
		<div class="toast-wrap">
			<div class="icon"><img src="~assets/img/common/yes.svg" alt=""></div>
			<div class="text">{{dftMessage}}</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"Toast",
		data(){
			return{
				test:'hahahahahaha',
				dftMessage:"添加成功",
				isShow:false
			}
		},
		mounted(){
			//动态控制toast的左偏移量
			// const moveX=document.body.clientWidth/2-this.$refs.toast.clientWidth/2
			// this.$refs.toast.style.transform=`translate(${moveX}px,-50%)`
		},
		methods:{
			Show(message,duration){
				this.isShow=true
				this.dftMessage=message
				setTimeout(()=>{
					this.isShow=false
					this.dftMessage="添加成功"
				},duration)
			}
		}
	}
</script>
<style scoped>
	.toast{
		position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 6px;
    min-width: 50px;
    max-width: 300px;
    min-height: 70px;
    display: flex;
    align-items: center;
    opacity: 1;
    transition: all 0.1s;
    z-index: 9999;
	}
	.toast .icon{
		text-align: center;
		margin-bottom: 15px;
	}
	.toast .icon img{
		width: 20px;
		height: 20px;
	}
	.toast .text{
		color: white;
    font-size: 14px;
	}
</style>