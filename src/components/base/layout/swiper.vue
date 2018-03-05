<template>
    <swiper :options="swiperOption" :not-next-tick='nextTick' ref="mySwiper">
      <swiper-slide v-for="item in datas" :key="item.id">
        <img :src="item.url">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
  export default {
    props:['datas'],
    data() {
      return {
        nextTick:true,
        swiperOption: {
          grabCursor: true,
          setWrapperSize: true,
          autoplay: 2000,
          autoplayDisableOnInteraction: false,
          pagination: ".swiper-pagination",
          paginationType: "bullets",
          paginationClickable: true
        },
        onTap:(s,e)=>{
          console.log('====================================');
          console.log(e);
          console.log('====================================');
        }
      }
    },
    methods:{

    },
    mounted(){
      console.log('====================================');
      console.log(this.$refs.mySwiper);
      console.log('====================================');
    }
  }

</script>

<style lang="less" scoped>
  img {
    width: 100%;
  }
</style>
