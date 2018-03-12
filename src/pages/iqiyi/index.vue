<template>
  <div>
      <div class="header">
        <a href="#" class="logo"></a>
      </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang='less'>
  .header{
    height: 44px;
    width: 100%;
    background-color: #191919;
    display: flex;
    align-items: center;
    .logo{
      display: inline-block;
      position: absolute;
      left: 13px;
      width: 73px;
      height: 24px;
      background: url(/static/resource/images/iqiyi-logo.png) no-repeat 0 0;
      background-size: 73px 24px;
    }
  }
  .c-glyphicon-searchfine:before {
    content: "\e83a";
    font-size: .2rem;
    color: #b0b0b0;
  }
</style>
