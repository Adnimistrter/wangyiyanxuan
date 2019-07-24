<template>
  <section class="profile-container">
      <!-- logo -->
      <div class="profile-main">
        <div class="main-logo">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <!-- 登录 -->
        <div class="btnwrap">
          <div class="phone-login active" @click="loginsj()">
            <i class="iconfont iconshouji"></i>
            <span>手机登录</span>
          </div>
          <div class="email-login" @click="loginyx()">
            <i class="iconfont iconyoujian"></i>
            <span>邮箱账号登录</span>
          </div>
          <div class="quck-login" @click="rotoRegister('/profile/register')">
            <span>手机号快捷注册</span>
            <i class="iconfont iconicon-52" ></i>
          </div>
        </div>
        <!-- 底部登陆方式 -->
        <div class="login-type">
          <div class="login-wechat">
            <i class="iconfont iconweixin"></i>
            <span>微信</span>
          </div>
          <div class="login-qq">
            <i class="iconfont iconqq"></i>
            <span>QQ</span>
          </div>
          <div class="login-weibo">
            <i class="iconfont iconweibo"></i>
            <span>微博</span>
          </div>
        </div>
      </div>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    // 接收参数
    props:{
      loginsj:Function,
       loginyx:Function
    },


    methods:{
      gotoLogin(path){
          this.$router.push(path)
          console.log(this.$router);


      },
      rotoRegister(path){
          this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .profile-container
   height 100%
   .profile-main
      height 100%
      background #f2f5f4
      .main-logo
        display flex
        justify-content center
        text-align center
        padding 200px 0
        img
          width 268px
          height 90px
      .btnwrap
        padding 0 40px 380px
        .phone-login,.email-login
           display flex
           align-items center
           justify-content center
           width 670px
           height 100px
           font-size 28px
           color #b4282d
           border 1px solid #b4282d
           margin-bottom 32px

        .phone-login
           background-color #b4282d
           color #ffffff
           .iconfont
             width 40px
             height 40px
             font-size 50px
             margin-right 17px
        .quck-login
            font-size 28px
            color #333
            text-align center
      .login-type
          display flex
          justify-content center
          align-items baseline
          height 40px
          font-size 28px
          width 100%
          color #999
          .login-wechat,.login-qq,.login-weibo
            float left
            display flex
            text-align center
            align-items center
            padding 0 40px
            color #7f7f7f
            border-left 1px solid #7f7f7f
          .login-wechat
              border none
            .iconfont
              font-size 40px
              margin-right 10px
            span
              margin-right 30px
              font-size 30px
              color #7f7f7f
</style>
