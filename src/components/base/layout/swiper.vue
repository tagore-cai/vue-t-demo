<template>
  <swiper :options="swiperOption" :not-next-tick='nextTick' ref="mySwiper">
    <swiper-slide v-for="item in datas" @on="testN" :key="item.id">
      <img :src="item.url">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  props: ["datas"],
  data() {
    return {
      notNextTick:true,
      nextTick:true,
      swiperOption: {
        grabCursor: true,
        setWrapperSize: true,
        swiperPerView:1,
        autoplay: {
          delay:2000,
          disableOnInteraction:false
        },
        pagination: ".swiper-pagination",
        paginationType: "bullets",
        paginationClickable: true
      }
    };
  },
  methods: {
    testN(e) {
      alert(e)
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
img {
  width: 100%;
}
</style>
