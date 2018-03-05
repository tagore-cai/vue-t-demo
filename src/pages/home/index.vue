<template>
  <div class="hello" >
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
      imgList: [
        {
          id: "img1",
          url:
            "http://p1.music.126.net/d22ZEE4zWmTaPo6-UCC0hA==/109951163106074160.jpg"
        },
        {
          id: "img3",
          url:
            "http://p1.music.126.net/oShqLbK1hWHbcXCDykbJjg==/109951163106517017.jpg"
        },
        {
          id: "img2",
          url:
            "http://p1.music.126.net/C_E9xkzwxfJHJrcIZ4PtVA==/109951163106930770.jpg"
        }
      ]
    };
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
