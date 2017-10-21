<template>
  <div>
    <div class="titlebar">
      <titleBar :title="title"></titleBar>
    </div>
    <div style="margin-top: 4rem;width: 100%;">
      <swipe class="banner">
        <swipe-item v-for="item in banner">
          <img :src="item.filePath" width="100%" height="100%" alt="" />
        </swipe-item>
      </swipe>
    </div>
    <div class="goodsproperty">
      <p>{{goodName}}</p>
      <p class="price">¥{{goodPrice}}</p>
      <span v-for="label in labels">
        {{label}}
      </span>
      <p class="choosetype" @click ="showType()">选择类型 <span></span></p>
    </div>

    <div>
      <div class="rmlabel">
        <span style="white-space:pre"></span><span class="line"></span>
        <span style="white-space:pre"></span><span class="txt">商品详情</span>
        <span style="white-space:pre"></span><span class="line"></span>
      </div>
    </div>

    <div v-if="goodtypeshow" id = "dialogbg" @click ="closeType()" ></div>
    <div v-if="goodtypeshow" id = "goodtypes">
      <div>
        <div id="typeheader">
          <img :src="banner[0].filePath">
          <span>
            <span class="title">{{goodName}}</span>
            <span class="price">{{goodPrice}}</span>
          </span>
        </div>
        <div id = "count">
          <span>选择数量</span>
          <div class="add">
            <a class="operator" style="border-right:solid 1px gray;height: 27px; " @click="minus()">-</a>
            <input class="operator" style="border: 1px solid white;" v-model="goodcount">
            <a class="operator" style="border-left:solid 1px gray; " @click="add()">+</a>
          </div>
        </div>
      </div>
      <div id="typebottom">
        <p>取消</p>
        <p style="background: orange ;color: white;">加入购物车</p>
      </div>
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
        title: '商品详情',
        goodName: '小蚁行车记录仪智能高清夜视1080P广角',
        goodPrice:'120.88',
        labels:['自营','特价'],
        goodtypeshow:false,
        goodcount:1,
        banner:[
          {
            id:'123',
            filePath:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1040083342,1057394292&fm=173&s=D9B32FD542C14AE23AACEC7E03009073&w=640&h=358&img.JPEG'
          },{
            id:'456',
            filePath:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1583032798,727522157&fm=173&s=5283F90F4BD378D61521DDE103004023&w=640&h=368&img.JPEG'
          },{
            id:'789',
            filePath:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2577843366,1552951584&fm=173&s=829873C8E072199CB01964B903008052&w=640&h=350&img.JPEG'
          }
        ]
      }
    },
    route: {
      data (transition) {
        var params = this.params = transition.to.params
        this.title = params.name,
        this.curPage = 1,
        this.loading= false,
        this.scroller= null,
        this.goodName='小蚁行车记录仪智能高清夜视1080P广角',
        this.goodPrice='120.88',
        this.labels=['自营','特价'],
        this.banner=[
          {
            id:'123',
            filePath:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1040083342,1057394292&fm=173&s=D9B32FD542C14AE23AACEC7E03009073&w=640&h=358&img.JPEG'
          },{
            id:'456',
            filePath:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1583032798,727522157&fm=173&s=5283F90F4BD378D61521DDE103004023&w=640&h=368&img.JPEG'
          },{
            id:'789',
            filePath:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2577843366,1552951584&fm=173&s=829873C8E072199CB01964B903008052&w=640&h=350&img.JPEG'
          }
        ]
      }
    },
    methods:{
      showType(){
        this.goodtypeshow = true;
      },
      closeType(){
        this.goodtypeshow = false;
      },
      minus(){
          if(this.goodcount > 0){
              //必须转一下，不然会当成字符处理
              this.goodcount = parseInt(this.goodcount) -1;
          }
      },
      add(){
          this.goodcount = parseInt(this.goodcount) + 1;
      }
    },
    // 挂载完毕
    mounted() {
      this.scroller = this.$el
    },
    components:{
      'swipe': Swipe,
      'swipe-item': SwipeItem,
      titleBar: require('../components/Title.vue')
    }
  }

</script>

<style>
  body{-webkit-overflow-scrolling : touch;}
  @import "../../node_modules/vue-swipe/dist/vue-swipe.css";

  /*.HeaderBar{position:fixed;top: 0;height: 4rem;background: #ff9800;}*/
  .titlebar {display: flex;flex-direction: column;}

  .content{margin-top: 4rem;}
  .banner {height:22rem;}
  .banner .swipe-item {line-height: 200px;  }
  .banner .swipe-indicator{background-color: #979899;width: 10px;height: 10px;  }
  .banner .swipe-indicator.active{background-color: #fa4b1e;}
  .banner .swipe-indicators{bottom: 15px;}

  .goodsproperty{width: 100%;padding-left: 1rem;padding-bottom: 0.3rem;}
  .goodsproperty p{margin: 0px;padding: 0px;}
  .goodsproperty .price{margin-left:0.5rem;font-family: "Adobe Caslon Pro Bold";font-size: 1.2em;color: #ff9800; }
  .goodsproperty span{margin-left: 0.3rem;padding: 3px;font-family: "Adobe Caslon Pro Bold";font-size: 0.9em;color: #ff9800;border-radius:5px;border:1px solid #ff9800;}
  .goodsproperty .choosetype{margin-top: 5px;padding-top: 0.8rem;padding-bottom: 0.8rem;border-top: 1px solid gainsboro;border-bottom: 1px solid gainsboro;}
  .goodsproperty .choosetype span{float: right;margin-right: 2rem;width: 1.3rem;height: 1.3rem;border:2px solid white;border-top: 2px solid gainsboro;border-right: 2px solid gainsboro; transform: rotate(45deg);}

  .rmlabel .line{display: inline-block;width: 35%;border-top: 1px solid #ccc ;}
  .rmlabel .txt{color: #686868;font-family: Arial, Helvetica, sans-serif;vertical-align: -8%;margin-left: 1rem;margin-right: 1rem}

  .rmlabel{height: 4rem;line-height: 4rem;text-align: center;}
  .rmlabel span{white-space: pre;}

  #dialogbg{height: 100%; position: fixed; top: 0px; left: 0px; right: 0px; z-index: 1000; opacity: 0.5; transition: all 0.3s ease; -webkit-transition: all 0.3s ease; background-color: rgba(0, 0, 0, 0.901961);}
  #goodtypes{overflow: hidden; left: 0px; right: 0px; height: 350px;  position: fixed;bottom: 0px; z-index: 1000; -webkit-transition: all 300ms ease; transition: all 300ms ease ;padding: 1rem;background: white;}
  #typeheader{width: 100%;margin: 0px;padding: 0px;height: 8rem;}
  #typeheader img{width: 8rem;height: 8rem;margin: 0px;padding: 0px;float: left;}
  #typeheader .title{height: 3rem;margin: 0px;padding: 0px;font-size: 1.5rem;display: block;}
  #typeheader .price{color: orange;}

  #count{width: 100%;padding: 1rem;border-bottom: 1px solid gray;padding-bottom: 1.5rem;}
  #count .add{width: 93px; float: right;border: solid 1px gray;padding: 0px;line-height: 27px;}
  #count .add .operator{display:-moz-inline-box;display:inline-block;text-align: center;margin: 0px;padding: 0px;width: 27px;height: 26px; }

  #typebottom {overflow: hidden; left: 0px; right: 0px; height: 40px;line-height: 40px;  position: fixed;bottom: 0px; z-index: 2000; -webkit-transition: all 300ms ease; transition: all 300ms ease ;background: white;border-top:solid 1px gray;}
  #typebottom p{font-size: 1.5rem;text-align: center;float: left;width: 50%;padding: 0px;margin: 0px;}
</style>


