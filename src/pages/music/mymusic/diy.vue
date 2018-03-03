<template>
  <div>
    <swiper :datas='imgList'></swiper>
    <div class="por music-item">
      <ul>
        <li>
          <i class='iconfont icon-music' />私人FM</li>
        <li>
          <i class='iconfont icon-wangyiyunyinlezizhi-copy' />每日歌曲推荐</li>
        <li>
          <i class='iconfont icon-diantai' />云音乐热歌榜</li>
      </ul>
    </div>
    <div class='left-bar'>
        <span>推荐热歌</span>
    </div>
  </div>
</template>

<script>
  import swiper from "@/components/base/layout/swiper";
  export default {
    data() {
      return {
        imgList: [{
          id: 'img1',
          url: "http://p1.music.126.net/d22ZEE4zWmTaPo6-UCC0hA==/109951163106074160.jpg"
        }, {
          id: 'img3',
          url: "http://p1.music.126.net/oShqLbK1hWHbcXCDykbJjg==/109951163106517017.jpg"
        }, {
          id: 'img2',
          url: "http://p1.music.126.net/C_E9xkzwxfJHJrcIZ4PtVA==/109951163106930770.jpg"
        }]
      }
    },
    components: {
      swiper
    }
  }

</script>

<style scoped lang='less'>
  .music-item {
    ul {
      display: flex;
      justify-content: space-between;
      li {
        display: flex;
        width: 30%;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        padding: 20px;
        i {
          color: #C20C0C;
          font-size: 40px !important;
        }
      }
    }
  }
  .left-bar{
    border-left: 2px red solid;
    text-align: left;
    line-height: 1;
    font-size: 22px;
    padding-left: 10px;
    &:after{
      content:'>';
      padding-left: 10px;
      height: 30px;
    }
  }

</style>
