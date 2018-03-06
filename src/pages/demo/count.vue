<template>
    <div class="input-number">
        <input :value="currentValue" type="text" @change="handleChange" v-focus />
        <button @click="handleDown">-</button>
        <button @click="handleUp">+</button>
    </div>
</template>

<script>
    export default {
      directives:{
        focus:{
          inject:function (el) {
            el.focus()
          }
        }
      },
      props: {
        min: {
          type: Number,
          default: -Infinity
        },
        max:{
          type: Number,
          default: Infinity
        },
        value:{
          type:Number,
          default:1
        }
      },
      data() {
        return {
          currentValue: this.value
        }
      },
      methods: {
        handleDown:function() {
          this.currentValue -= 1
        },
        handleUp:function(){
          this.currentValue += 1
        },
        handleChange:function(e){
          let v = e.target.value.trim()
          this.currentValue = v
        }

      },
    }
</script>

<style scoped lang="less">

</style>
