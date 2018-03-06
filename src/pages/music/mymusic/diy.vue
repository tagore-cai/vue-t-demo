<template>
  <div>
    <swiper classes="img" :datas='$store.state.imglists'></swiper>
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
    <div class="albumList">
      <h3>推荐专辑</h3>
      <ul>
        <li v-for="(item,index) of $store.state.music.player.album" @click="showAlbum(item,index)">
          <img :src="item.albumImage">
          <p>{{item.albumTitle}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import swiper from "@/components/base/layout/swiper";
export default {
  methods: {
    showAlbum(item, index) {
      this.$store.dispatch("SHOWABLM", {
        isShow: true,
        item,
        index
      });
    }
  },
  components: {
    swiper
  }
};
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
      font-size: 0.75rem;
      padding: 0.9375rem;
      i {
        color: #c20c0c;
        font-size: 1.25rem !important;
      }
    }
  }
}
.left-bar {
  border-left: 2px red solid;
  text-align: left;
  line-height: 1;
  font-size: 0.9375rem;
  padding-left: 0.5rem;
}
.img {
  height: 1.5rem;
}

h3 {
  text-align: left;
  font-weight: normal;
  font-size: 18px;
  height: 40px;
  line-height: 40px;
}

h3:before {
  content: "|";
  color: #c20c0c;
  background: #c20c0c;
  font-size: 15px;
  margin: 0 6px;
}
.albumList {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 33.3333%;
      img {
        width: 100%;
        display: block;
      }
      p {
        text-align: center;
        height: 26px;
        line-height: 26px;
      }
    }
  }
}
</style>
