<template>
<!--首页-->
	<div class="wrapper">
    <!--顶部搜索-->
    <SearchNav></SearchNav>
    <!-- 首页商城数据 -->
    <ShopContent></ShopContent>
		<!--底部导航-->
    <FooterNav></FooterNav>
	</div>
</template>
<script>
  import axios from 'axios'
  export default {
      data() {
          return {
            msg: 'Welcome to YYJ'
          }
      },
    components: {
      FooterNav: require('../components/FooterNav.vue'),
      SearchNav: require('../components/Search.vue'),
      ShopContent: require('../components/ShopContent.vue')
    }
  }
</script>
<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
</style>
