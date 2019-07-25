<template>
  <div class="category-ontainer">
<!-- category头部 -->
    <section class="categoryHeader">
      <span class="iconfont iconsousuo"></span>
      <span class="input">搜索商品，共xxxx款好物</span>
    </section>
    <!-- 左侧导航 categoryList-->
    <div class="Navleft-container">
      <div class="line"></div>
      <section class="nav-left">
          <ul>
            <li  v-for="(category,index) in categoryData.categoryL1List" :key="index">
              <a href="javascript:;">{{category.name}}</a>
            </li>
          </ul>
          <!-- 右侧导航 category-->
          <section class="container-right" >
            <!-- v-if判断这个dom元素有还是没有，有的话就会显示图片 -->
            <div class="category-main" v-if="categoryData.categoryL1List">
              <img :src="categoryData.categoryL1List[0].wapBannerUrl" alt="">
              <ul>
                <li v-for="(category,index) in categoryData.categoryL2List[1].wapBannerUrl" :key="index">
                  <img :src="categoryData.wapBannerUrl" alt="">
                  <span>{{categoryData.name}}</span>
                </li>
              </ul>
            </div>
          </section>
      </section>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// 读取状态的数据，引一个映射函数--在computed中写
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
  export default {

    computed:{
      ...mapState({
        categoryData:state =>state.category.categoryData
      })
    },

    mounted(){
      // 提交getCategory
      this.$store.dispatch('getCategory',() =>{
        this.$nextTick(() =>{
          new BScroll('.nav-left',{
            click:true
          })
          // 右侧
          new BScroll('.container-right')
        })
      })
    }
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
         height 1220px
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
