<template>
  <div class="detail-bottom-bar">
    <div class="left">
      <ul>
        <li>店铺</li>
        <li>客服</li>
        <li>收藏</li>
      </ul>
    </div>
    <div class="right">
      <div class="add-cart" @click="addToCart">加入购物车</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods:{
      addToCart(){
        this.$emit("addToCart")
      }
    }
  }
</script>

<style scoped>
  .detail-bottom-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    border-top: 1px solid #D0D0D0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    /*opacity: 0;*/
  }
  .detail-bottom-bar .left ul{
    display: flex;
  }
  .detail-bottom-bar .left ul li{
    margin-right: 20px;
  }
  .add-cart{
    height: 40px;
    width: 100px;
    background-color: #FBE7E8;
    color: #EB5368;
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
  }
</style>
