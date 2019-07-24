<template>
  <div class="loginMailWrap">
    <div class="top_login">
      <div class="top_img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <label class="input_phone">
        <input type="text" placeholder="邮箱账号">
      </label>
      <label class="input_code">
        <input type="text" placeholder="密码">
      </label>
      <div class="login_help">
        <!-- 错误的信息 -->
      <div class="login_help">
        <div class="err"></div>
        <span class="left">注册账号</span>
        <span class="right">忘记账号</span>
      </div>
      </div>
      <div class="phone_login active">
          <span>登录</span>
      </div>
      <div class="other_login">
        <span>其他账号登录方式</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loginMailWrap
    width 100%
    height 100%
    padding 110px 0 0
    background white
    box-sizing border-box
    .top_login
       .top_img
          width 100%
          height 133px
          display flex
          justify-content center
          align-items center
          margin-bottom 130px
          img
            width 192px
            height 64px
       .input_phone
          margin-top 30px
       .login_tips
        position absolute
        left 50%
        top -100%
        width 50%
        transform translateX(-50%)
        color red
        font-size 28px
    .input_phone,
    .input_code
       display block
       width 675px
       height 90px
       margin 30px auto
       color #bdbdbd
       input
         display block
         width 100%
         height 100%
         outline none
         font-size 27px
         line-height 45px
         border-bottom 1px solid #bdbdbd
    .login_help
          span
            color #bdbdbd
            font-size 27px
          .left
            margin-left 30px
          .right
            float right
            margin-right 30px
          .err
            color #b4282b
            display block
            margin-bottom 30px
    .phone_login,.other_login
      width 679px
      height 98px
      color #b4282d
      margin 32px 0 0
      text-align center
      line-height 98px
      font-size 28px
      border 1px solid #b4282d
      margin-left 30px
      &.active
         background-color #b4282d
         color white
    .other_login
      text-align center
      font-size 28px
      color #b4282d
      margin-top 20px
</style>
