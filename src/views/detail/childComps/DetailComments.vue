<template>
	<div class="detail-comments">
		<div class="com-title">
			<div>评价(30)</div>
			<div>查看全部</div>
		</div>
		<div class="com-tag">
			<ul>
				<li>有图片</li>
				<li>没有色差</li>
				<li>款式好看</li>
				<li>没有气味</li>
				<li>做工满意</li>
			</ul>
		</div>
		<div class="com-content">
			<ul>
				<li></li>
				<li></li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:"DetailComments",
		mounted(){
			console.log("commnets mounted")
		}
	}
</script>
<style scoped>
	.detail-comments{
		background-color: white;
		height: 150px;
		border-bottom: 10px solid #f6f6f6;
		padding: 10px 8px;
	}
</style>