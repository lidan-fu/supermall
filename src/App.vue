<template>
  <div id="app">
    <main-tab-bar v-if="tabbarshow"/>
    <keep-alive exclude="Detail"><router-view/></keep-alive>
    <!-- <router-view/> -->
  </div>
</template>

<script>
  import MainTabBar from '@/components/content/mainTabbar/MainTabBar.vue'
  export default {
    name: 'app',
    components:{
      MainTabBar
    },
    data(){
      return {
        data:0
      }
    },
    computed:{
      //控制底部tabbar是否显示
      tabbarshow(){
        return this.$route.meta.title!=='detail'
        // ['detail','shopcart']
      }
    },
    updated(){
      // console.log("此页面的meta title："+this.$route.meta.title)
      // this.tabbarshow=true
      // if(this.$route.meta.title=="detail"){
      //   this.tabbarshow=false
      // }
    }
    // mounted(){
    //   console.dir(Vue)
    // }
  }
</script> 

<style>
  @import "assets/css/base.css";
</style>

