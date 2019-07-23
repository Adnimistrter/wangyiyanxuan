<template>
  <div>
    <!-- 中间部分 -->
    <div class="contenter-find">
      <section class="navList">
          <ul>
            <li class="things-li">
              <a href="javascript:;" class="item">推荐</a>
              <a href="javascript:;" class="item">好货内部价</a>
              <a href="javascript:;" class="item">回购榜</a>
              <a href="javascript:;" class="item">晒单</a>
              <a href="javascript:;" class="item">开发者日记</a>
              <a href="javascript:;" class="item">达人</a>
              <a href="javascript:;" class="item">HOME</a>
            </li>
          </ul>
      </section>
      <!-- 中间内容 -->
      <div class="navContentwarp">
        <section class="center">
          <header>
            <div class="style1">
              <Split />
              <section class="warp">
                <div class="left">
                  <h3>
                    <div>
                      <img src="https://yanxuan.nosdn.127.net/a714aeeb574585d3e23d35f1ee2db8b8.png?imageView&quality=65&thumbnail=56y56" alt="">
                    </div>
                    <span>选妹</span>
                  </h3>
                  <p class="big">夏凉用品购置指南，凉席、空调被、凉感四件套每满100立减20</p>
                </div>
                <div class="bottom">
                  <img src="https://yanxuan.nosdn.127.net/ae09169ca36f7adc57458c5a371ab6df.jpg?imageView&quality=65&thumbnail=690y376" alt="">
                </div>
                <section>
                    <!-- 底部的icon图标 -->
                  <i class="iconfont iconyanjing"></i>
                  <span>8.4k人看过</span>
                </section>
              </section>
            </div>
            <!-- 小图部分 -->
            <div class="style2">
                <Split />
                <section class="warp">
                  <div class="left">
                     <h3>
                      <div>
                        <img src="https://yanxuan.nosdn.127.net/1ecf5d57d84b7ae03905404131dc2c10.jpg" alt="">
                      </div>
                      <span>网易文蔓：小惠</span>
                     </h3>
                     <p class="big">大牌最爱的玻尿酸原液，1瓶等于20片面膜</p>
                     <p class="small">赋活原液系列限时7.1折</p>
                     <section>
                      <i class="iconfont iconyanjing"></i>
                      <span>3.7k人看过</span>
                     </section>
                  </div>
                  <div class="right">
                     <img src="https://yanxuan.nosdn.127.net/119ea021198fbc19e7d0cb76c718e324.jpg" alt="">
                  </div>

                </section>
            </div>
          </header>
        </section>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Split from '../../../components/Split/Split.vue'
import BScroll from 'better-scroll'

  export default {

    mounted(){
      new BScroll('.navList',{
        // 横向滑动
        scrollX:true
      })
    },
    // 注册组件
    components:{
      Split
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .contenter-find
    padding-top 90px
    .navList
      width 100%
      overflow hidden
      border-bottom 1px solid #d9d9d9
      border-top 1px solid #d9d9d9
      background-color #fafafa
      position fixed
      top 88px
      left 0
      z-index 10
      ul
        display flex
        flex-wrap wrap
        height 74.5px
        line-height 74.5px
        width 1020px
        li
          font-size 28px
          margin 0 30px
          padding 0 8px
          color #7f7f7f
          .item
             margin 0 20px
    .navContentwarp
       padding-top  80px
       .center
         .style1
           .warp
             padding: 0.426439rem 0.399787rem
             .left
               width 100%
               h3
                display flex
                height 54px
                line-height 54px
                div
                  width 54px
                  height 54px
                  border-radius 50%
                  overflow hidden
                  margin-right 12px
                  box-sizing border-box
                  margin-left 10px
                  img
                    width 54px
                    height 54px
                span
                  font-size 28px
                  color #333
               .big
                  font-size 36px
                  color #333
                  height 80px
                  line-height 50px
                  padding-top 20px
                  text-overflow ellipsis
                  margin-left 10px
             .bottom
                width 100%
                height 375px
                margin-bottom 10px
                overflow hidden
                margin-top 20px
                img
                  display block
                  width 100%
                  height 100%
             section
              color #999
              margin 20px 0 0
              .iconfont
                 font-size 30px
                 margin-left 10px
              span
                margin-left 10px
                font-size 24px
         .style2
           .warp
            padding 20px 30px
            display flex
            .left
               width 420px
               height 270px
               h3
                display flex
                height 54px
                line-height 54px
                margin-bottom 24px
                div
                  width 54px
                  height 54px
                  border-radius 50%
                  overflow hidden
                  margin-right 12px
                  margin 0 10px 0 0
                  img
                    width 54px
                    height 54px
                span
                  font-size 24px
                  color #333
               .big
                  font-size 32px
                  color #333
                  line-height 40px
               .small
                  font-size 27px
                  color #999
                  line-height 40px
               section
                  color #999
                  margin 20px 0 0
                  .iconfont
                    font-size 30px
                    margin-left 10px
            .right
                height 3.626667rem
                width 3.626667rem
                border-radius 0.106667rem
                overflow: hidden
                img
                  height 272px
                  width 272px
</style>
