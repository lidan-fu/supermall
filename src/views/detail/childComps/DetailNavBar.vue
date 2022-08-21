<template>
	<div class="detail-navbar">
		<div class="back" @click="goback">
			<img src="~assets/img/common/back.svg" alt="">
		</div>
		<div class="search-container">
			<div class="search-content" action="">
				<!-- <img src="~assets/img/common/search.svg" alt=""> -->
				<svg t="1654000225062" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8345" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
					<path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6c3.2 3.2 8.4 3.2 11.6 0l43.6-43.5c3.2-3.2 3.2-8.4 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" p-id="8346" fill="currentColor"></path>
				</svg>
				<p>搜索全站商品</p>
			</div>
		</div>
		<ul class="right-entry">
			<li><img src="~assets/img/common/share.svg" alt=""></li>
			<li @click="pushToCart"><img src="~assets/img/common/cart.svg" alt=""></li>
			<li><img src="~assets/img/common/more.svg" alt=""></li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:"DetailNavBar",
		methods:{
			goback(){
				this.$router.go(-1)
			},
			pushToCart(){
				this.$router.push("/shopcart")
			}
		}
	}
</script>
<style scoped>
	.detail-navbar{
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: white;
		height: 60px;
		z-index: 1000;
	}
	.back{
		font-size: 0;
    line-height: 60px;
    width: 60px;
    text-align: center;
	}
	.back img{
		vertical-align: middle;
		width: 23px;
	}
	.title{
		display: flex;
		line-height: 60px;
		justify-content: space-around;
	}
	.title-item.active{
		color: #E66EB2;
	}
	.search-container{
		flex: 1;
		padding: 0 10px;
	}
	.search-content{
		background-color: #f6f6f6;
		display: flex;
		align-items: center;
		height: 34px;
    width: 100%;
    border-radius: 15px;
    line-height: 34px;
	}
	.search-content svg{
		width: 25px;
		height: 25px;
		color: #cccccc;
		margin: 0 8px 0 12px;
	}
	.search-content p{
		color: #c8c8c8;
		font-size: 13px;
		/*letter-spacing: 1px;*/
	}
	.right-entry{
		display: flex;
		margin-right: 6px;
	}
	.right-entry li{
		margin: 0 6px;
	}
	.right-entry li img{
		height: 25px;
	}
</style>