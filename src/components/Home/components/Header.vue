<template>
  <div class="header">
    <div class="header-back">
      <span class="iconfont back-icon">&#xe624</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe504</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-city">
      北京<span class="iconfont">&#xe631;</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  .header
     height:.88rem;
     display:flex;
     background-color:#00bcd4;
     .header-back
       width:.64rem;
       line-height:.88rem;
       text-align:center;
       .back-icon
         color:#ffffff;
         font-weight:blod;
         font-size:.32rem;
     .header-search
        flex:1;
        background-color:#ffffff;
        height:.64rem;
        line-height:.64rem;
        color:#e4e7ea;
        border-radius:0.06rem;
        margin-left:.2rem;
        margin-top:.14rem
        padding:0 .2rem;
     .header-city
       width:1.28rem;
       line-height:.88rem;
       text-align:center;
       color:#ffffff;
</style>
