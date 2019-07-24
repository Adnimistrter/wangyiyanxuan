<template>
  <div class="loginphoneWrap">
    <div class="btn-login">
      <!-- 背景图 -->
      <div class="btn-img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <label class="input_phone">
        <!-- 下边部分 输入手机号-->
        <input type="text" placeholder="请输入手机号" >
        <div class="clear">X</div>
      </label>
      <!-- 手机验证码 -->
      <label class="input-code">
         <input type="text" placeholder="请输入手机验证码">
         <div class="get_phoneCode">获取验证码</div>
      </label>
      <!-- 遇到的问题？？ -->
      <div class="login_help">
        <div class="err"></div>
        <span class="left">遇到问题？</span>
        <span class="right">使用密码验证登录</span>
      </div>
      <!-- 登录 -->
      <div class="phone_login active">
        <span>登录</span>
      </div>
      <div class="other_login">
        <span>其他登录方式</span>
      </div>
      <div class="other_register">快速注册&nbsp;&gt;</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
   .loginphoneWrap
     width 100%
     height 100%
     padding 110px 0 0
     background white
     box-sizing border-box
     .btn-login
        width 679px
        height 752px
        color #000
        margin 0 auto
        .btn-img
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
           display flex
           justify-content space-between
           align-items center
           input
             font-size 27px
           .clear
             width 30px
             height 30px
             line-height 30px
             font-size 30px
             color #ffffff
             background #99
             text-align center
             border-radius 4px
             right 0
             top 30px
      .input_phone,
      .input-code
         display block
         width 675px
         height 90px
         margin 30px auto
         input
           display block
           width 100%
           height 100%
           outline none
           border 0 none
           border-bottom 1px solid  #bdbdbd
           font-size 27px
           line-height 45px
      .input-code
          background pink
          position relative


         .get_phoneCode
            position absolute
            right 0
            bottom 15px
            width 173px
            height 56px
            line-height 56px
            text-align center
            font-size 28px
            border 1px solid  #333
            border-radius 10px
      .login_help
          span
            color #bdbdbd
            font-size 27px
          .right
            float right
          .err
            color #b4282b
            display block
            margin-bottom 30px
      .phone_login,.other_login
          width 679px
          height 98px
          color #b4282b
          margin 32px 0 0
          text-align center
          line-height 98px
          border 1px solid #b4282d
          font-size 28px
          &.active
            background #b4282d
            color white
      .other_register
        text-align center
        font-size 28px
        color #000000
        margin-top 20px
</style>
