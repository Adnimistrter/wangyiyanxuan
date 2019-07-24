<template>
<!-- profile头部 -->
  <header class="header-slot">
    <i class="iconfont iconshouye" @click="goto('/home')"></i>
    <!-- 使用具名插槽 -->
    <slot name="title"></slot>
    <div>
      <i class="iconfont iconsousuo" @click="goto('/search')"></i>
      <i class="iconfont icongouwuchekong" @click="goto('/shopcart')"></i>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
  export default {
    // 给点击方法操作，进行路由跳转
    methods:{
      /* 通过传入参数来获取正确的路径 */
      goto(path){
        /* 可以回退的，在这里用push */
        this.$router.push(path)
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header-slot
   display flex
   background #eee
   height 88px
   width 100%
   line-height 88px
   position fixed
   top 0
   left 0
   padding 0 24px
   z-index 10
   margin-bottom 1px solid #999
   div
    flex 1
    .iconsousuo
      margin-left 20px
      margin-right 20px
      color #333
    i
      font-size 46px
  .iconshouye
    flex 1
    font-size 51px
  .icongouwuchekong
    margin-right 20px
    color #333
</style>
