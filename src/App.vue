<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<!--<style src="./assets/css/bootstrap.min.css" lang="sass"></style>
<style src="./assets/css/postbirdAlertBox.css" lang="sass"></style>-->
<style>
  html{
    font-size: 62.5%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    /*color: #2c3e50;
    margin-top: 60px;*/
  }
  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,.1);
  }
</style>
