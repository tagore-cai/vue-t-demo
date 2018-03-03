<template>
  <div class="hello">
    <homeHeader></homeHeader>
    <swiper></swiper>
    <hvideo class="hvideo" src="http://video.bangbangliuxue.com.cn/bangbang/20171119/21799527_%E7%BB%B4%E6%8B%89%E8%AF%BA%E7%93%A6%E5%A4%A7%E5%AD%A6.mp4"></hvideo>
    <h1>{{ msg }}</h1>
    <router-link to="/count">计算</router-link>
  </div>
</template>

<script>
import homeHeader from "@/components/home/HomeHeader";
import swiper from "@/components/base/layout/swiper";
import hvideo from "@/components/base/layout/video";
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    homeHeader,
    swiper,
    hvideo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hvideo{
      box-sizing: border-box;
      padding: 10px 10px 10px 10px;
      width: 100%;
  }
</style>
