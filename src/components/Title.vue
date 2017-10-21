<template>
  <!--顶部bar-->
    <mu-appbar class="HeaderBar">
    <!--<input type="text"/>-->
    <!--<img class="logo" src="../assets/logo.png">-->
      <p>{{title}}</p>
    <!--发布帖子 ===未完成-->
    <!--<mu-icon-button  icon="send" to="/vue-home/dist/publish" slot="right"/>-->
  </mu-appbar>
</template>

<script>
  export default {
    props : ['title']
  }
</script>

<style scoped>
  .HeaderBar{
    position:fixed;
    top: 0;
    height: 4rem;
    background: #ff9800;
  }
  p{text-align: center;}
</style>
