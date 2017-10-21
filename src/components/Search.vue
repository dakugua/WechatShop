<template>
  <!--顶部bar-->
  <mu-appbar class="HeaderBar">
    <p class="logo">友益佳</p>
    <div class="searchcontent">
      <img :src="require('../assets/icon/search.png')" class="searchimg">
      <input class="keyword">
    </div>
    <!--<input type="text"/>-->
    <!--<img class="logo" src="../assets/logo.png">-->
    <!--发布帖子 ===未完成-->
    <mu-icon-button  icon="send" to="/goodtypes" slot="right"/>
  </mu-appbar>
</template>

<style scoped>
  .HeaderBar{
    position:fixed;
    top: 0;
    height: 4rem;
    background: #ff9800;
  }
  .appbar-search-field .mu-text-field-hint {
    color: yellow;
  }
  .appbar-search-field .mu-text-field-input {
    color: #FFF;
  }
  .logo{
    height:4rem;
    float: left;
    left:0;
    top:0;
    line-height: 4rem;
    padding-left: 5px;
  }
  .content{width:80%; }

  .searchcontent{width: 70%;height:2.8rem;line-height: 2.8rem;margin-top: 27px;margin-left: 10px;background: white;border-radius:5px;border:1px solid white;float: left; }
  .searchimg{width: 1.5rem;height:1.5rem; margin-left: 0.6rem; }
  .keyword{width:80%;border: 0;padding: 0px;margin: 0px;}
</style>
