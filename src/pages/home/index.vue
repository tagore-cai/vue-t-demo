<template>
  <div class="hello">
    <homeHeader></homeHeader>
    <swiper :datas='imgList'></swiper>
    <hvideo></hvideo>
    <div>
      <router-link to='/music'>音乐</router-link>
      <router-link to='/discuz'>论坛</router-link>
      <router-link to='/count'>测试</router-link>
    </div>
    <radar></radar>
    <linestack></linestack>
  </div>
</template>

<script>
import homeHeader from "@/components/home/HomeHeader";
import swiper from "@/components/base/layout/swiper";
import hvideo from "@/components/base/layout/video";
import radar from "@/components/echarts/radar";
import linestack from "@/components/echarts/linestack";
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      imgList: this.$store.state.imglists
    };
  },
  created(){
    this.$store.dispatch('GETIMGLIST')
  },
  components: {
    homeHeader,
    swiper,
    hvideo,
    radar,
    linestack
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.havideo {
  box-sizing: border-box;
  padding: 10px 10px 10px 10px;
  width: 100%;
}
</style>
