<template>
  <div>
    <ul>
      <li>
        <router-link tag='a' to='/music/mymusic'>个性推荐</router-link>
      </li>
      <li>
        <router-link tag='a' to='/music/mymusic/musicItems'>歌单</router-link>
      </li>
      <li>
        <router-link tag='a' to='/music/mymusic/preredio'>主播电台</router-link>
      </li>
      <li>
        <router-link tag='a' to='/music/mymusic/lists'>排行榜</router-link>
      </li>
    </ul>
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("GETIMGLIST");
    this.$store.dispatch("music/GETALL");
    this.$store.dispatch("music/ALBUM");
  }
};
</script>

<style scoped lang='less'>
ul {
  display: flex;
  li {
    display: flex;
    width: 25%;
    justify-content: center;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: center;
      text-decoration: none;
      height: 2.1875rem;
      &:link {
        color: blue;
      }
      &:visited {
        color: blue;
      }
      &:hover {
        color: blue;
      }
      &:active {
        color: blue;
      }
    }
  }
}
.router-link-exact-active {
  border-bottom: blue 2px solid;
}
</style>
