<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  html{
    font-size: 16px;
  }

  * {
    padding: 0;
    margin: 0;
  }

  .clearfix:after {
    content: '';
    clear: both;
    height: 0;
    display: table-cell;
    zoom: 1;
  }

  ul {
    list-style: none;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .por {
    position: relative;
  }

  .poa {
    position: absolute;
  }

  .ovh {
    overflow: hidden;
  }

  .slide-enter-active {
    transition: all .3s ease;
  }

  .slide-leave-active {
    transition: all .3s ease;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateX(100px);
  }

</style>
