<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/home'}"
      @click="goTo('/home')">
      <span class="item_icon">
        <i class="iconfont iconshouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/categorys'}"
      @click="goTo('/categorys')">
      <span class="item_icon">
        <i class="iconfont iconfenlei"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/things'}"
       @click="goTo('/things')">
      <span class="item_icon">
        <i class="iconfont iconshiwu"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/shopcart'}"
      @click="goTo('/shopcart')">
      <span class="item_icon">
        <i class="iconfont icongouwuchekong"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/login'}"
      @click="goTo('/login')">
      <span class="item_icon">
        <i class="iconfont iconpersonnone"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'FooterGuide',
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 100px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 10px
      color #999999
      &.on
        color #b4282d
      span
        font-size 24px
        margin-top 4px
        margin-bottom 4px
        .iconfont
          font-size 40px
          width 80px
          height 80px

</style>
