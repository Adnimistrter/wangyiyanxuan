<template>
   <div class="login">
      <Header>
          <span slot="title" class="slot">网易严选</span>
      </Header>
      <LoginHome :loginsj="loginsj" :loginyx="loginyx" v-show="!loginhome && !loginhone"/>
      <LoginPhone v-show="loginhome" :loginsj='loginsj'/>
      <LoginMail v-show="loginhone" :loginyx='loginyx'/>
   </div>
</template>

<script type="text/ecmascript-6">
  import Header from '../../components/Header/Header.vue'
  import LoginPhone from './LoginPhone/LoginPhone.vue'
  import LoginHome from './LoginHome/LoginHome.vue'
  import LoginMail from './LoginMail/LoginMail.vue'
  export default {
    data(){
      return{
          loginhome:false,
          loginhone:false
      }
    },
    methods:{
        loginsj(){
          this.loginhome = !this.loginhome
        },
        loginyx(){
          this.loginhone = !this.loginhone
        }
    },

      /* 注册组件 */
      components:{
        Header,
        LoginHome,
        LoginPhone,
        LoginMail
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .login
     background #f2f5f4
     height 100%
     .slot
        font-size 40px
        flex 1
        margin-left 36px
</style>
