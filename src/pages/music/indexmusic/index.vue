<template>
  <div>
    <swiper :datas='imgList'></swiper>
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
            id: 'img2',
            url: "http://p1.music.126.net/oShqLbK1hWHbcXCDykbJjg==/109951163106517017.jpg"
          },
          {
            id: 'img3',
            url: "http://p1.music.126.net/oShqLbK1hWHbcXCDykbJjg==/109951163106517017.jpg"
          },
          {
            id: 'img4',
            url: "http://p1.music.126.net/oShqLbK1hWHbcXCDykbJjg==/109951163106517017.jpg"
          }, {
            id: 'img5',
            url: "http://p1.music.126.net/C_E9xkzwxfJHJrcIZ4PtVA==/109951163106930770.jpg"
          }
        ]
      }
    },
    components: {
      swiper
    },
    methods: {

    },
    mounted() {}
  }

</script>

<style scoped lang='less'>

</style>
