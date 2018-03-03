<template>
  <video :class="classes" :src="src" @click="handleClick"  controls="controls" :poster="post"></video>
</template>

<script>
  export default {
    props: {
      src:String,
      post:String,
      classes:String
    },
    methods:{
      handleClick(e){
        let el = e.target
        if (el.paused) {
          el.play()
        } else {
          el.pause()
        }
      }
    },
    computed: {
    },

  }
</script>

<style scoped>

</style>
