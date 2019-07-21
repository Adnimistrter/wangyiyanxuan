<template>

  <div class="home">
    <!-- home头部 -->
    <div class="home-search">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
      <div class="input">
        <i class="iconfont iconsousuo"></i>
        <span class="placholder">搜索商品，共21735款好物</span>
      </div>
      <button class="btn">登录</button>
    </div>
    <!-- home头部导航部分 -->
    <div>
      <section class="homeNav"  ref="homelist" >
          <ul class="homeItem" ref='ulcon'>
            <li class="homeUi" v-for="(item,index) in homelistData" >{{item}}</li>
          </ul>
      </section>

      <!-- 遮罩层 -->
      <section class="all">
        <div class="allTitle">全部频道</div>
        <ul></ul>
      </section>
    </div>
      <!-- 轮播部分 -->
    <div class="firstSwiper swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/ea5fde8d19b12c0e252365e713520cd6.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/8ceaa8053baf2056334e166493e9eaab.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/9a98a10f260bcde62951a36ac43b2f92.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

    <!-- 自营退货退款 -->
    <section class="introduce">
        <ul class="wangyigrow">
          <li>
            <i class="grow-icon"></i>
            <span>网易自营品牌</span>
          </li>
          <li>
            <i class="grow-icon"></i>
            <span>30天无忧退货</span>
          </li>
          <li>
            <i class="grow-icon"></i>
            <span>48小时快速退款</span>
          </li>
        </ul>
    </section>
    <!-- 导航列表1 -->
    <section class="navContainer">
      <ul class="nav-box">
        <li class="nav-item">
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
          <span>新品首发</span>
        </li>
        <li class="nav-item">
          <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
          <span>居家生活</span>
        </li>
        <li class="nav-item">
          <img src="http://yanxuan.nosdn.127.net/fb9dde0c1593536c18c8e12b6f49eb17.png" alt="">
          <span>服饰鞋包</span>
        </li>
        <li class="nav-item">
          <img src="http://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="">
          <span>美食酒水</span>
        </li>
        <li class="nav-item">
          <img src="http://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" alt="">
          <span>个护清洁</span>
        </li>
        <li class="nav-item">
          <img src="http://yanxuan.nosdn.127.net/63682bd2df06963251b2715e20f98a75.png" alt="">
          <span>母婴亲子</span>
        </li>
        <li class="nav-item">
          <img src="http://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png" alt="">
          <span>运动旅行</span>
        </li>
        <li class="nav-item">
          <img src="http://yanxuan.nosdn.127.net/47e953a95e4378907b131205ce3cbc45.png" alt="">
          <span>数码家电</span>
        </li>
        <li class="nav-item">
          <img src="http://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" alt="">
          <span>全球特色</span>
        </li>
        <li class="nav-item">
          <img src="http://yanxuan.nosdn.127.net/861a521a6f53e3399205f18daa23cddc.gif" alt="">
          <span>超级会员</span>
        </li>
      </ul>
    </section>
    <!-- 网易员工精选图 -->
    <div class="bossRecommendModule">
      <a href="javascript:;" class="m-bossRecommendModule">
        <img src="https://yanxuan.nosdn.127.net/9e2248500f961bfe0e872027776b1e79.gif" width="100%" height="60" alt="">
      </a>
    </div>

    <!-- 四个大图 -->
    <section class="manuPictureContainer">
      <ul>
        <li>
            <h4>9.9超值专区首发</h4>
            <h3>180款爆品新定价</h3>
            <div>
              <img src="https://yanxuan.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
              <img src="https://yanxuan.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
            </div>
          </li>
          <li>
            <h4>1元好货抄底</h4>
            <h3>200+好物 5折封顶</h3>
            <div>
              <img src="https://yanxuan.nosdn.127.net/cc814c4063600d56ddf9d654763e9c0a.png?imageView&thumbnail=150x150&quality=75" alt="">
              <img src="https://yanxuan.nosdn.127.net/bdb9997848d1c29e83815ea7e49ee215.png?imageView&thumbnail=150x150&quality=75" alt="">
            </div>
          </li>
          <li>
            <h4>无线回购榜单</h4>
            <h3>快消日用 超值5.9元起</h3>
            <div>
              <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
              <img src="https://yanxuan.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?imageView&thumbnail=150x150&quality=75" alt="">
            </div>
          </li>
          <li>
            <h4>断货补单王</h4>
            <h3>严选必买爆款</h3>
            <div>
              <img src="https://yanxuan.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75" alt="">
              <img src="https://yanxuan.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?imageView&thumbnail=150x150&quality=75" alt="">
            </div>
          </li>
      </ul>
    </section>
    <!-- 类目热销榜 -->
    <section class="popular-container">
      <p>类目热销榜</p>
      <div class="popular-top">
        <ul>
          <li>
            <span>
              热销榜
              <span class="line"></span>
            </span>
            <img src="https://yanxuan.nosdn.127.net/06388e29fad0b7e8a9d6b1f398e5dcd3.png?imageView&quality=65&thumbnail=200x200" alt="">
          </li>
          <li>
            <span>
              好评榜
              <span class="line"></span>
            </span>
            <img src="https://yanxuan.nosdn.127.net/7dd208d4eb386ca3fc0f794963a0d70e.png?imageView&quality=65&thumbnail=200x200" alt="">
          </li>
        </ul>
      </div>
      <div class="popular-bottom">
        <ul>
          <li>
            <h3>居家生活榜</h3>
            <img src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?" alt="">
          </li>
          <li>
            <h3>服饰鞋包榜</h3>
            <img src="http://yanxuan.nosdn.127.net/d84c728c164a77a8c5f0ca153d21fe69.png?" alt="">
          </li>
          <li>
            <h3>美食酒水榜</h3>
            <img src="http://yanxuan.nosdn.127.net/59eb7e52ab114c894a8179bc2991122b.png?" alt="">
          </li>
          <li>
            <h3>数码家电榜</h3>
            <img src="http://yanxuan.nosdn.127.net/cf86ce7b36cc90f5c9b1cbbc5eafd737.png?" alt="">
          </li>
          <li>
            <h3>个护清洁榜</h3>
            <img src="http://yanxuan.nosdn.127.net/ae7f88bdae80b15ac656b0c76f356179.jpg?" alt="">
          </li>
          <li>
            <h3>母婴清洁榜</h3>
            <img src="http://yanxuan.nosdn.127.net/83e9f1b99b484885f88b5c5443f87cec.png?" alt="">
          </li>
          <li>
            <h3>运动旅行榜</h3>
            <img src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?" alt="">
          </li>
          <li>
            <h3>全球特色榜</h3>
            <img src="http://yanxuan.nosdn.127.net/82de8fdea1c8bba21b26099612ff5605.png?" alt="">
          </li>
        </ul>
      </div>
    </section>
<!-- 新品首发 -->
    <section class="products-container">
      <Split/>
      <div class="header-products">
        <div class="header-top">
          <span>新品首发</span>
        </div>
        <span class="header-bottom">
          更多
          <i class="iconfont iconicon-52"></i>
        </span>
      </div>
      <ul class="products-list">
        <li>
          <img src="http://yanxuan.nosdn.127.net/6ca5da68fa4e87086126f9a124442da9.jpg" alt="">
          <div class="goode-name">
            <span class="title">严选X颐和园联名款2019年历本</span>
            <span class="price">￥58</span>
          </div>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/bf216b5af1dc8cdb5a70e87b8271028c.png" alt="">
          <div class="goode-name">
            <span class="title">60s锦眠贡缎四件套</span>
            <span class="price">￥469</span>
          </div>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/5351c9bffc8d8c17d7079428c5dd8a9e.jpg" alt="">
          <div class="goode-name">
            <span class="title">酵素去污系列洗衣液3KG</span>
            <span class="price">￥49.9</span>
          </div>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/85b1d637ae9be7518d4616ec40ae5741.png" alt="">
          <div class="goode-name">
            <span class="title">星诞奇遇 圣诞树双层玻璃杯</span>
            <span class="price">￥109</span>
          </div>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/5b874370ef8f63ee41865bbee4de2890.jpg" alt="">
          <div class="goode-name">
            <span class="title">网易智选PTC家用只能暖和机（换新版）</span>
            <span class="price">￥499</span>
          </div>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/eb28be79a5b5e4f8ee7b6a3a9641dae5.png" alt="">
          <div class="goode-name">
            <span class="title">【美好盒子】云朵棉花糖</span>
            <span class="price">￥99</span>
          </div>
        </li>
      </ul>
    </section>
  </div>
 </template>

<script type="text/ecmascript-6">


import BScroll from 'better-scroll'
import 'swiper/dist/css/swiper.min.css';
import Split from '../../components/Split/Split.vue'
import Swiper from 'swiper';

  export default {
    data(){
       return{
         homelistData:['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','运动旅行','数码家电','全球特色']
       }
    },

    mounted(){
      // 横向滑动
      this.$nextTick(()=>{
       new BScroll(this.$refs.homelist, {
        scrollX: true,

        })
      }),

      new Swiper('.swiper-container',{
        loop:true,//循环模式选项
        autoplay: true,//自动轮播
        speed: 1000,//每一秒循环
        pagination:{
          el:'.swiper-pagination',
          // type:'custom',
        }
      })

    },

    // 注册组件
   components: {
      Split

    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .home
    width 100%
    height 999px
    position relative

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
      z-index 999
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
    .homeNav
      position absolute
      overflow hidden
      top 110px
      left 6px
      width 750px
      .homeItem
        height 100%
        width 1550px
        font-size 28px
        display flex
        justify-content space-around
        padding 10px
        li
          width 112px
          height 50px
          line-height 50px
          /* 轮播 */
    .firstSwiper
      width 750px
      height 400px
      top 160px
      .swiper-pagination-customs{
        width 80px
        height 2px
        background #000
        display inline-block
        opacity .3
        bottom 50px
      }
      img
        width 100%
        height 100%
    .introduce
       position relative
       top 150px
       vertical-align middle
       height 72px
      .wangyigrow
        width 100%
        height 72px
        display flex
        justify-content space-around
        align-items center
        position absolute
        background #e4e4e4

        li
          display flex
          &:nth-of-type(1)
            i
              background-image url ('http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png')
          &:nth-of-type(2)
            i
              background-image url("http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png")
          &:nth-of-type(3)
            i
              background-image url("http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png")
          .grow-icon
            width 30px
            background-image url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
            background-size 30px 30px
            background-repeat no-rapeat
            background-position center
            margin 0 10px
            vertical-align middle
    /* 四个大图 */
    .navContainer
      width 100%
      height 400px

      margin-top 152px
      .nav-box
        width 100%
        height 500px
        overflow hidden
        .nav-item
          float left
          width 110px
          height 156px
          margin 20px
          img
            width 110px
            height 110px
    .manuPictureContainer
      margin-top 40px
      ul
       display flex
       flex-wrap wrap
       justify-content center
       li
        width 343px
        height 260px
        padding 20px 0 0 20px
        background-color #f5f5f5
        margin 5px 0 0 5px
        h4
          color #333
          padding 10px
          font-size 35px
        h3
          color #7f7f7f
          font-size 24px
          padding-left 15px
          margin 10px 0
        div
          img
            float left
            width 150px
            height 150px
    .popular-container
      padding 0 20px 20px 30px
      width 100%
      p
       font-size 34px
       height 100px
       line-height 100px
      .popular-top
        ul
         display flex
         li
          width 340px
          height 200px
          display flex
          /* 给第一个和第二个图片设置样式 */
          &:nth-of-type(1)
            margin 0 10px 10px 10px
            background #F9F3E4

          &:nth-of-type(2)
            margin 0 10px 10px 0
            background #EBEFF6
            margin-left  10px
          span
            display block
            width 150px
            height 5px
            font-size 30px
            padding-left -20px
            margin-top 20px
            padding-left 10px
            .line
              /* 行内元素转换成行内块元素 */
              display block
              width 50px
              height 4px
              background #000
              margin-top 20px
          img
            width 220px
            height 220px
            margin-left -40px
      .popular-bottom
        ul
          clearFix()
          width 100%
          height 500px
          li
            float left
            width 150px
            height 200px
            background #eee
            margin 10px 20px 10px 10px
            display table-cell
            text-align center
            img
              width 120px
              height 120px
              margin-top 10px
            h3
             color #333
             margin-top 20px
             text-align center
             font-size 25px
    .products-container
      height 840px
      .header-products
        display flex
        justify-content space-between
        height 100px
        font-size 30px
        line-height 100px
        padding 0 30px
        .header-top
          display flex
        .header-bottom
          i
           width 30px
           height 30px
           font-size 30px
      .products-list
        margin-left 20px
        li
         float left
         width 216px
         height 290px
         margin-right 20px
         img
          width 216px
          height 216px
          background-color #f5f5f5
         .goode-name
           height 72px
           line-height 30px
           margin-top 10px
           .price
             color red
             margin-left 10px
</style>

