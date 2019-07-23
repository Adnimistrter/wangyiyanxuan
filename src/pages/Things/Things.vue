<template>
  <div class="thingswrap">
    <Header>
      <div slot="title" class="slot">
        <span>发现</span>
        <span>甄选家</span>
      </div>
    </Header>
    <Find/>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '../../components/Header/Header.vue'
import Choose from './Choose/Choose.vue'
import Find from './Find/Find.vue'
  export default {
// 注册组件
   components:{
       Header,
       Choose,
       Find
   }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .thingswrap
    .slot
     flex 2
     justify-content center
     display flex
    span
     font-size 28px
     margin-right 36px
     display block
     height 85px
     color #7F7F7F

</style>
