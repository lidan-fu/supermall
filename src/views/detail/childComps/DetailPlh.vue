<template>
	<div class="placehoolder">
		<div class="plh-nav" style="position:absolute;top: 20px;display: flex;width: 100%;padding:0 10px;justify-content: space-between;">
			<div class="left">
				<span style="padding: 7px 6px;display: inline-block;height:36px;width:36px;border-radius: 20px;background-color:#9E9E9E;">
					<img src="~assets/img/common/back-white.svg" style="width: 20px;" alt="">
				</span>
			</div>
			<div class="right" style="display:flex;">
				<span style="padding: 5px 3px;display: inline-block;height:36px;width:36px;border-radius: 20px;background-color:#9E9E9E;vertical-align: bottom;margin-right: 10px;">
					<img src="~assets/img/common/cart-white.svg" style="width: 28px;" alt="">
				</span>
				<span style="text-align: center;padding-top:8px;display: inline-block;height:36px;width:36px;border-radius: 20px;background-color:#9E9E9E;">
					<img src="~assets/img/common/more-white.svg" style="width: 20px;line-height: 30px;" alt="">
				</span>
			</div>
		</div>
		<div class="pld-banner"></div>
		<div class="pld-baseinfo">
			<p class="title" style="height:16px;width: 100px;background-color: pink;"></p>
			<p class="content" style="height:12px;width: 90px;"></p>
			<p class="content" style="height:16px;width: 85%;"></p>
			<p class="content" style="height:16px;width: 130px;"></p>
		</div>
		<div class="pld-other">
			<div class="pld-other-item">
				<div><span class="left"></span><span style="width: 66%;"></span></div>
				<div><span class="left"></span><span></span></div>
			</div>
			<div class="pld-other-item" style="border-bottom: 0;">
				<div><span class="left"></span><span></span></div>
				<div><span class="left"></span><span style="width: 70%;"></span></div>
			</div>
		</div>
		<div class="pld-cart" style="padding-top: 20px;display: flex;">
			<div class="left" style="width: 35%;">
				<ul style="display: flex;justify-content: space-around;">
					<li style="height: 20px;width: 20px;background-color: #f2f2f2;border-radius: 4px;"></li>
					<li style="height: 20px;width: 20px;background-color: #f2f2f2;border-radius: 4px;"></li>
					<li style="height: 20px;width: 20px;background-color: #f2f2f2;border-radius: 4px;"></li>
				</ul>
			</div>
			<div class="right" style="display: flex;justify-content: space-around;width: 65%;">
				<div style="height:40px;width: 100px;background-color: pink;border-radius: 20px;"></div>
				<div style="height:40px;width: 100px;background-color: #F0557F;border-radius: 20px;"></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"DetailPlh"
	}
</script>
<style>
	.placehoolder{
		position: fixed;
		z-index: 1000;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: white;
	}
	.pld-banner{
		height: 300px;
		width: 100%;
		background-color: #f2f2f2;
	}
	.pld-baseinfo{
		border-bottom: 10px solid #fafafa;
		padding: 10px;
	}
	.pld-other-item{
		border-bottom: 10px solid #fafafa;
		padding-left: 10px;
	}
	.pld-baseinfo p{
		border-radius: 4px;
		margin-bottom: 10px;
	}
	.pld-baseinfo .content{
		background-color: #f2f2f2;
	}
	.pld-other-item span.left{
		width: 20px;
		margin-right: 16px;
	}
	.pld-other-item span{
		display: inline-block;
		height: 12px;
		width: 130px;
		background-color: #f2f2f2;
		border-radius: 4px;
		margin-bottom: 10px;
		margin-top: 10px;
	}
</style>