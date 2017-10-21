<template>
  <div style="width: 100%;padding-bottom: 5px; ">
    <div id="searchbar">
      <img @click="back()" :src="require('../assets/icon/back.png')" class="backimg">
      <div class="searchcontent">
        <img :src="require('../assets/icon/search.png')" class="searchimg">
        <input v-model="keywords" class="keyword">
      </div>
      <a class="search">搜索</a>
    </div>
    <div class="googsmain" style="-webkit-overflow-scrolling : touch; ">
      <!--列表展示-->
      <mu-list>
        <div v-for="(item,index) in goodsList">
          <div class="googsitem">
            <router-link :to="{path:'/gooddetail',query:{id:item.id}}"
                         :src="item.img" tag="img" alt="item.goodsName"></router-link>
            <!--<img :src="item.img">-->
            <p class="title">{{item.goodsName}}</p>
            <p class="price">¥{{item.goodsPrice}}</p>
            <span v-for="label in item.labels">
              {{label}}
            </span>
          </div>
        </div>
      </mu-list>
      <!--下拉加载更多的组件-->
      <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" />
    </div>
  </div>
</template>
<script>

  export default {
      data(){
          return {
              curPage:1,
              loading: false,
              scroller: null,
              keyword:'',
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
      // 挂载完毕
      mounted() {
        this.scroller = this.$el
      },
      methods: {
          filterMenus(lineNum){
              return this.menus.slice(4*lineNum-4,4*lineNum);
          },
          onSlideChangeStart (currentPage) {
            console.log('onSlideChangeStart', currentPage);
          },
          onSlideChangeEnd (currentPage) {
            console.log('onSlideChangeEnd', currentPage);
          },
          loadMore(){
            this.goodsList = [...this.goodsList, ...this.goodsList]
          },
          back(){
              this.$router.go(-1);
          }
      }
  }

</script>

<style>
  body{-webkit-overflow-scrolling : touch;}
  @import "../../node_modules/vue-swipe/dist/vue-swipe.css";
  #searchbar{
    position:fixed;
    width: 100%;
    top: 0;
    height: 4rem;
    left: 0;
    background: #ff9800;
    z-index: 1000;
  }
  #searchbar .backimg{width: 1.5rem;height:2rem;margin-top:0.9rem;margin-left: 2rem;float: left; }
  #searchbar .searchcontent{width: 70%;height:3rem;margin-top:0.4rem;margin-left: 1.5rem;background: white;border-radius:5px;border:1px solid white;float: left; }
  #searchbar .searchimg{width: 1.5rem;height:1.5rem;margin-top: 0.6rem; margin-left: 0.6rem; }
  #searchbar .keyword{width:80%;border: 0;padding: 0px;margin: 0px;}
  #searchbar .search{margin: 0px;padding: 0px;padding-left: 1rem; color: white;font-family: "Adobe Caslon Pro Bold";font-size: 1.2em;line-height: 3.5rem; }
  .googsmain{width: 100%;padding: 1%;margin-bottom: 1rem;overflow: scroll;margin-top: 4rem;z-index: 100;}
  .googsmain .googsitem{width: 48%;margin-left: 1%;float: left;border: 1px solid gainsboro;margin-top: 1rem;padding-bottom: 0.5rem; }
  .googsmain .googsitem img{width: 100%;padding: 0px;}
  .googsmain .googsitem p{margin: 0px;padding: 0px;}
  .googsmain .googsitem .title{margin-left:0.5rem;width: 95%;overflow:hidden;text-overflow:ellipsis;-o-text-overflow:ellipsis;white-space:nowrap; }
  .googsmain .googsitem .price{margin-left:0.5rem;font-family: "Adobe Caslon Pro Bold";font-size: 1.2em;color: #ff9800; }
  .googsmain .googsitem span{margin-left: 0.3rem;padding: 3px;font-family: "Adobe Caslon Pro Bold";font-size: 0.9em;color: #ff9800;border-radius:5px;border:1px solid #ff9800;}

/*  .menu{width: 100%;}
  .menu li{float: left; list-style: none;width: 25%;text-align: center;margin: 0px;padding: 0px;display:block;  }
  .menu img{width:5rem; height:5rem;border-radius:2.5rem;padding: 0.8rem;}
  .menu p{margin: auto;padding: 0px;}*/
</style>


