<template>
  <div class="category-ontainer">
<!-- category头部 -->
    <section class="categoryHeader">
      <span class="iconfont iconsousuo"></span>
      <span class="input">搜索商品，共xxxx款好物</span>
    </section>
    <!-- 左侧导航 -->
    <div class="Navleft-container">
      <div class="line"></div>
      <section class="nav-left">
          <ul>
            <li  class="active">
              <a href="javascript:;">推荐专区</a>
            </li>
            <li>
              <a href="javascript:;">冬季专区</a>
            </li>
            <li>
              <a href="javascript:;">爆品专区</a>
            </li>
            <li>
              <a href="javascript:;">新品专区</a>
            </li>
            <li>
              <a href="javascript:;">居家</a>
            </li>
            <li>
              <a href="javascript:;">鞋包配饰</a>
            </li>
            <li>
              <a href="javascript:;">服装</a>
            </li>
            <li>
              <a href="javascript:;">电器</a></a>
            </li>
            <li>
              <a href="javascript:;">洗护</a>
            </li>
            <li>
              <a href="javascript:;">饮食</a>
            </li>
            <li>
              <a href="javascript:;">餐厨</a>
            </li>
            <li>
              <a href="javascript:;">婴童</a>
            </li>
            <li>
              <a href="javascript:;">文体</a>
            </li>
            <li>
              <a href="javascript:;">特色区</a>
            </li>
          </ul>
          <!-- 右侧导航 -->
          <section class="container-right">
            <div class="category-main">
              <img src="http://yanxuan.nosdn.127.net/cb225335d4a438564040f00b448e8db8.png" alt="">
              <ul>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
                  <span>丁磊的好货推荐</span>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
                  <span>丁磊的好货推荐</span>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
                  <span>丁磊的好货推荐</span>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
                  <span>丁磊的好货推荐</span>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
                  <span>丁磊的好货推荐</span>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
                  <span>丁磊的好货推荐</span>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
                  <span>丁磊的好货推荐</span>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
                  <span>丁磊的好货推荐</span>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
                  <span>丁磊的好货推荐</span>
                </li>
              </ul>
            </div>
          </section>
      </section>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .category-ontainer
    height 100%
    .categoryHeader
      height 88px
      line-height 72px
      padding 16px 30px
      vertical-align middle
      display flex
      align-items center
      position fixed
      top 0
      left 0
      z-index 30
      background-color #fff
      border-bottom 1px solid #eee


      .iconfont
        width 28px
        height 28px
        top 30px
        font-size 30px
        position absolute
        left 200px
        top 30px
      .input
        height 56px
        line-height 56px
        width 675px
        font-size 28px
        background-color #ededed
        margin 0 8px 0 10px
        text-align center
        border-radius 2px
        color #666
        text-indent 28px
        /* 左侧导航 */
    .Navleft-container
      padding-top 88px

      .line
        width 100%
        height 2px
        background #eeeeee
      .nav-left
        height 1140px
        ul
         width 162px
         float left
         li
          height 50px
          text-align center
          color #7e8c8d
          margin-top 40px
          font-size 28px
         .active
          border-left 6px solid #ab2b2b
          a
           color #ab2b2b
           /* 右侧内容 */
        .container-right

          float right
          width 586px
          .category-main
            height 100%
            margin-top 10px
            padding 30px 30px 120px
            img
              width 528px
              height 192px
              margin-bottom 30px
            ul
             display flex
             width 100%
             flex-wrap wrap
             height 648px
             li
              width 144px
              text-align center
              margin-right 30px
              img
               width 144px
               height 144px
              span
               font-size 28px
               text-align center
               text-overflow ellipsis
               color #333
</style>
