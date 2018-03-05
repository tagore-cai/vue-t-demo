<template>
  <div>
    <header>
      <ul>
        <v-touch tag="li" v-for="item in tabNav" :key="item.id" @tap="routerGo(item.url)" :class="{cur : $route.name == item.title}">{{item.title}}</v-touch>
      </ul>
    </header>
    <div class='discuz-content'>
      <keep-alive>
        <component :is="currComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import duanz from "./duanz";
import faxian from "./faxian";
import jingxuan from "./jingxuan";
import shipin from "./shipin";
export default {
  data() {
    return {
      currComponent: "duanz",
      tabNav: [
        {
          id:'jingxuan',
          title: "精选",
          url: "jingxuan"
        },
        {
          id:'shipin',
          title: "视频",
          url: "shipin"
        },
        {
          id:'duanz',
          title: "段子",
          url: "duanz"
        },
        {
          id:'faxian',
          title: "发现",
          url: "faxian"
        }
      ]
    };
  },
  components: {
    duanz,
    faxian,
    jingxuan,
    shipin
  },
  methods: {
    routerGo(url) {
      this.currComponent = url
    }
  }
};
</script>

<style scoped lang='less'>
header {
  position: fixed;
  background-color: red;
  width: 100%;
  height: 3.125rem;
  display: flex;
  align-items: center;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      text-align: center;
      width: 25%;
    }
  }
}
.discuz-content {
  background-color: #fff;
  position: relative;
  top: 3.125rem;
}
</style>
