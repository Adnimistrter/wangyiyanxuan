<template>
<!-- home头部 -->
  <div class="home">
    <div class="home-search">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
      <div class="input">
        <i class="iconfont iconsousuo"></i>
        <span class="placholder">搜索商品，共21735款好物</span>
      </div>
      <button class="btn">登录</button>
    </div>
    <!-- home头部分 -->
    <div class="list">
      <span>xxx</span>
    </div>
  </div>
 </template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home
    width 100%
    height 150px

    .home-search
      display flex
      width 100%
      height 88px
      line-height 72px
      vertical-align middle
      justify-content space-around
      align-items center
      background #fff
      position fixed
      img
        width 140px
        height 40px

        justify-content space-between
        align-items center
        margin-left 20px
      .input
        height 56px
        line-height 56px
        width 450px
        font-size 28px
        background-color #ededed
        text-align center
        border-radius 8px
        color #666

        .iconfont
          width 28px
          height 28px
          top 30px
          font-size 35px
      .btn
        height 45px
        margin-left 10px
        font-size 25px
        border-radius 10px
        outline none
        color #b4282d
        border 1px solid #b4282d
        background-color #fff
        margin-right 10px
</style>

