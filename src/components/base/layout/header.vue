<template>
  <div class='com-header'>
    <i v-if='show'></i>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default:false
      },
    },

  }
</script>

<style scoped lang='less'>
  .com-header{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.875rem;
    i{
      font-size: 1.25rem!important;
    }
    span{
      font-size: 1.25rem;
    }
  }
</style>
