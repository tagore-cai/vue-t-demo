<template>
  <div>
    <header class="por">
      <p class="iconfont icon-caidan poa caidan"></p>
      <ul>
        <li class="iconfont" v-for="item in tabNav" :key='item.id' :class="[item.addClass,{cur : $route.name == item.title}]" @click="handleClick(item.url)" tag='li'></li>
      </ul>
      <p class="iconfont icon-zhuanjiguangpan guangpan poa"></p>
    </header>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabNav: [{
          id: 'mu1',
          addClass: "icon-music",
          url: "/music",
          title: "音乐首页"
        }, {
          id: 'mu2',
          addClass: "icon-wangyiyunyinlezizhi-copy",
          url: "/music/mymusic",
          title: "我的音乐"
        }, {
          id: 'mu3',
          addClass: "icon-diantai",
          url: "/music/radiomusic",
          title: "我的电台"
        }]
      }
    },
    methods: {
      handleClick(url){
        if (this.$route.path !== url) {
          this.$router.replace(url)
        }
      }
    }
  }

</script>

<style scoped lang='less'>
  header {
    height: 3.125rem;
    background: #C20C0C;
    color: #fff;
    ul {
      overflow: hidden;
      width: 60%;
      margin: 0 auto;
      li {
        float: left;
        width: 33.33%;
        font-size: 1.625rem;
        line-height: 3.125rem;
        height: 3.125rem;
        text-align: center;
      }
      li.cur {
        color: #ff8383;
      }
    }
    .caidan {
      top: 0;
      left: 0;
      height: 3.125rem;
      line-height: 3.125rem;
      font-size: 1.625rem;
      text-align: center;
      width: 3.125rem;
    }
    .guangpan {
      top: 0;
      right: 0;
      height: 3.125rem;
      line-height: 3.125rem;
      font-size: 1.625rem;
      text-align: center;
      width: 3.125rem;
    }
  }

</style>
