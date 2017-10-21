<template>
  <!--首页-->
  <div class="wrapper">
    <!--顶部搜索-->
    <div id="titlebar">
      <span>购物车</span>
      <a>编辑</a>
    </div>
    <!--底部导航-->
    <FooterNav></FooterNav>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        msg: 'Welcome to YYJ',
        goodsList:[
          {
            id:'1',
            img:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1504348834&di=85d191ce251bb449a4f574bb7e0ba441&src=http://wanzao2.b0.upaiyun.com/system/avatars/362132/original/555.jpg',
            goodsName:'测试商品11111111111111111111111111111111111111111',
            goodsPrice:'279.00',
            labels:[
              '自营','特价'
            ]
          },
          {
            id:'1',
            img:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1504348834&di=85d191ce251bb449a4f574bb7e0ba441&src=http://wanzao2.b0.upaiyun.com/system/avatars/362132/original/555.jpg',
            goodsName:'测试商品',
            goodsPrice:'279.00',
            labels:[
              '自营','特价'
            ]
          },
          {
            id:'1',
            img:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1504348834&di=85d191ce251bb449a4f574bb7e0ba441&src=http://wanzao2.b0.upaiyun.com/system/avatars/362132/original/555.jpg',
            goodsName:'测试商品',
            goodsPrice:'279.00',
            labels:[
              '自营','特价'
            ]
          },
          {
            id:'1',
            img:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1504348834&di=85d191ce251bb449a4f574bb7e0ba441&src=http://wanzao2.b0.upaiyun.com/system/avatars/362132/original/555.jpg',
            goodsName:'测试商品',
            goodsPrice:'279.00',
            labels:[
              '自营','特价'
            ]
          },
          {
            id:'1',
            img:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1504348834&di=85d191ce251bb449a4f574bb7e0ba441&src=http://wanzao2.b0.upaiyun.com/system/avatars/362132/original/555.jpg',
            goodsName:'测试商品',
            goodsPrice:'279.00',
            labels:[
              '自营','特价'
            ]
          },
          {
            id:'1',
            img:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1504348834&di=85d191ce251bb449a4f574bb7e0ba441&src=http://wanzao2.b0.upaiyun.com/system/avatars/362132/original/555.jpg',
            goodsName:'测试商品',
            goodsPrice:'279.00',
            labels:[
              '自营','特价'
            ]
          },
          {
            id:'1',
            img:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1504348834&di=85d191ce251bb449a4f574bb7e0ba441&src=http://wanzao2.b0.upaiyun.com/system/avatars/362132/original/555.jpg',
            goodsName:'测试商品',
            goodsPrice:'279.00',
            labels:[
              '自营','特价'
            ]
          }
        ]
      }
    },
    components: {
      FooterNav: require('../components/FooterNav.vue'),
      SearchNav: require('../components/Search.vue'),
      HeaderTabs:require('../components/Headertabs.vue')
    }
  }
</script>

<style>
  body{-webkit-overflow-scrolling : touch;}
  @import "../../node_modules/vue-swipe/dist/vue-swipe.css";
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  #titlebar {
    position: fixed;
    width: 100%;
    top: 0;
    height: 4rem;
    line-height: 4rem;
    left: 0;
    background: #ff9800;
    z-index: 1000;
  }
  #titlebar span{font-size: 2rem;color: white;display: block;position: absolute;margin: auto;width: 100%;text-align: center;}
  #titlebar a{float: right;margin-right: 2rem;font-size: 1.5rem;line-height: 4rem;color: white; }


</style>


