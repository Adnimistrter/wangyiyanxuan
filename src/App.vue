<template>
  <div id="app">
    <router-view />
    <FooterGuide/>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    name:'App',
    data(){
      return{

      }
    },
// 注册组件
  components:{
    FooterGuide
  }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    height 100%
    width 100%
</style>
