<template>
	<div class="detail-recom">
		<div>热卖推荐</div>
		<div class="recom-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:"DetailRecom"
	}
</script>

<style scoped>
	.detail-recom{
		background-color: white;
		padding: 10px 8px;
	}
	.recom-content ul{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.recom-content ul li{
		width: 30%;
		height: 140px;
		background-color: beige;
		margin-bottom: 15px;
	}
</style>