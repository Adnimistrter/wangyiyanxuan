<template>
  <div class="Shopcart-conrainer">
    <header class="cart-header">
      <span>购物车</span>
      <h3>领券</h3>
    </header>
    <div class="shop-cart">
      <ul class="shopCart-list">
        <li>
          <span>30天无忧退货</span>
        </li>
        <li>
          <span>48小时快速退款</span>
        </li>
        <li>
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>
    <div class="cart-image">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
      <span>去添点什么吧~~~</span>
      <button>去登录</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .Shopcart-conrainer
    height 100%
    width 100%
    .cart-header
      height 88px
      display flex
      padding 0 20px
      justify-content space-between
      align-items center
      span
       font-size 40px
       color #333
      h3
       width 90px
       height 88px
       line-height 88px
       font-size 30px
       color #b4282d
    .shop-cart
      width 100%
      height 80px

      .shopCart-list
        background #eeeeee
        width 100%
        height 100%
        display flex
        font-size 30px
        justify-content space-around
        align-items center
        text-align center
        li
         height 40px
         line-height 40px
         font-size 24px
         text-align center
         span
          color #666
    .cart-image
      display flex
      flex-direction column
      justify-content center
      align-items center
      margin-top 380px
      img
        width 240px
        height 240px
      span
        color #666
        font-size 30px
        margin-bottom 30px
      button
        color #fff
        font-size 30px
        width 480px
        height 92px
        background #b4282d
        outline none
        border none
        margin-top 50px

</style>
