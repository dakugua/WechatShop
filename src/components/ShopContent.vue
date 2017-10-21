<template>
  <div style="margin-top: 4rem;width: 100%; ">
    <swipe class="banner">
      <swipe-item v-for="item in banner">
        <img :src="item.filePath" width="100%" height="100%" alt="" />
      </swipe-item>
    </swipe>
    <div class="menu">
      <table class="nomargin nopadding">
        <tr>
          <td v-for="item in filterMenus(1)">
          <router-link :to="{path:'/goodtypes',query:{type:item.id}}"
                         :src="item.img" tag="img" alt="类型"></router-link>
          <!--<img :src="item.img">-->
          <p>{{item.name}}</p>
          </td>
        </tr>
        <tr>
          <td v-for="item in filterMenus(2)" >
            <router-link :to="{path:'/goodtypes',query:{type:item.id}}"
                         :src="item.img" tag="img" alt="类型"></router-link>
            <!--<img :src="item.img">-->
            <p>{{item.name}}</p>
          </td>
        </tr>
      </table>
    </div>
    <div>
      <div class="rmlabel">
        <span style="white-space:pre"></span><span class="line"></span>
        <span style="white-space:pre"></span><span class="txt">热门商品</span>
        <span style="white-space:pre"></span><span class="line"></span>
      </div>
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
  import { Swipe, SwipeItem } from 'vue-swipe'

  export default {
      data(){
          return {
              curPage:1,
              loading: false,
              scroller: null,
              menus:[
                {
                   id:'menu1',
                   img:require('../assets/icon/养护.png'),
                   name:'养护'
                },
                {
                  id:'menu2',
                  img:require('../assets/icon/快修.png'),
                  name:'快修品'
                },
                {
                  id:'menu3',
                  img:require('../assets/icon/汽配.png'),
                  name:'汽配'
                },
                {
                  id:'menu1',
                  img:require('../assets/icon/门店.png'),
                  name:'门店'
                },
                {
                  id:'menu1',
                  img:require('../assets/icon/设备.png'),
                  name:'设备'
                },
                {
                  id:'menu1',
                  img:require('../assets/icon/第三方.png'),
                  name:'第三方服务'
                },
                {
                  id:'menu1',
                  img:require('../assets/icon/推客.png'),
                  name:'推客'
                },
                {
                  id:'menu1',
                  img:require('../assets/icon/更多.png'),
                  name:'更多'
                }
              ],
            banner:[
              {
                filePath:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1040083342,1057394292&fm=173&s=D9B32FD542C14AE23AACEC7E03009073&w=640&h=358&img.JPEG'
              },{
                filePath:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1583032798,727522157&fm=173&s=5283F90F4BD378D61521DDE103004023&w=640&h=368&img.JPEG'
              },{
                filePath:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2577843366,1552951584&fm=173&s=829873C8E072199CB01964B903008052&w=640&h=350&img.JPEG'
              }
            ],
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
          gotoTypes(type,typename){
            var name = 'goodtypes'
            var params = {
                type:type,
                name:typename
            };
            this.$router.go({name : name, params : params});
          },
          loadMore(){
            this.goodsList = [...this.goodsList, ...this.goodsList]
          }
      },
      components:{
        'swipe': Swipe,
        'swipe-item': SwipeItem
      }
  }

</script>

<style>
  body{-webkit-overflow-scrolling : touch;}
  @import "../../node_modules/vue-swipe/dist/vue-swipe.css";
  .banner {
    height:13rem;
  }
  .banner .swipe-item {
    line-height: 200px;
  }
  .banner .swipe-indicator{
    background-color: #979899;
    width: 10px;
    height: 10px;
  }
  .banner .swipe-indicator.active{
    background-color: #fa4b1e;
  }
  .banner .swipe-indicators{
    bottom: 15px;
  }
  .nomargin {margin: 0px;}
  .nopadding{padding: 0px;}
  table{width: 100%;}
  table tr{width: 100%;}
  table tr td{width: 25%;text-align: center}
  table img{width:5rem; height:5rem;border-radius:2.5rem;padding: 0.8rem;}
  table p{margin: auto;padding: 0px;}

  .rmlabel .line{display: inline-block;width: 35%;border-top: 1px solid #ccc ;}
  .rmlabel .txt{color: #686868;font-family: Arial, Helvetica, sans-serif;vertical-align: -8%;margin-left: 1rem;margin-right: 1rem}

  .rmlabel{height: 4rem;line-height: 4rem;text-align: center;}
  .rmlabel span{white-space: pre;}

  .googsmain{width: 100%;padding: 1%;margin: 0px;margin-bottom: 5rem;}
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


