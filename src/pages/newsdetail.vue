<template>
  <div>
    <div id="header">
      <img @click="back()" :src="require('../assets/icon/back.png')" class="backimg">
      <p>咨询详情</p>
      <img @click="store()" :src="require('../assets/icon/store.png')" class="storeimg">
    </div>
    <div id="content_top">
      <p class="title">{{title}}</p>
      <span class="date">{{date}}</span>
      <span class="date writer">{{writer}}</span>
    </div>

    <div id="content" >
      <div v-html="htmlcontent"></div>
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
        title: '滴滴强制专车司机买指定矿泉水  否则罚钱扣分',
        date: '2017-10-09',
        writer: '孙昊',
        goodName: '小蚁行车记录仪智能高清夜视1080P广角',
        goodPrice:'120.88',
        labels:['自营','特价'],
        goodtypeshow:false,
        goodcount:1,
        htmlcontent:"<p>根据滴滴公司规定，一辆车内必须配备3瓶矿泉水，而这些水必须到指定地点购买一款指定的矿泉水</p><br><p>  不少专车司机认为这么做侵犯了司机的权益。</p>"
      }
    },
    route: {
      data (transition) {
        var params = this.params = transition.to.params
        this.title = params.name
      }
    },
    methods:{
      back(){
        this.$router.go(-1);
      }
    },
    // 挂载完毕
    mounted() {
      this.scroller = this.$el
    },
    components:{
      titleBar: require('../components/Title.vue')
    }
  }

</script>

<style>
  body{-webkit-overflow-scrolling : touch;}
  @import "../../node_modules/vue-swipe/dist/vue-swipe.css";

  #header{
    position:fixed;
    width: 100%;
    top: 0;
    height: 4rem;
    left: 0;
    background: #ff9800;
    z-index: 1000;
    text-align: center;
  }
  #header .backimg{width: 1.5rem;height:2rem;margin-top:0.9rem;margin-left: 2rem;float: left; }
  #header p{text-align: center;line-height: 4rem; color: white;font-size: 1.8rem;padding: 0px;margin: auto;display: inline-block;}
  #header .storeimg{width: 1.8rem;height:1.8rem;margin-top: 0.9rem; margin-right: 2rem; float: right;}
  #header .keyword{width:80%;border: 0;padding: 0px;margin: 0px;}
  #header .search{margin: 0px;padding: 0px;padding-left: 1rem; color: white;font-family: "Adobe Caslon Pro Bold";font-size: 1.2em;line-height: 3.5rem; }

  #content_top{width: 100%;padding: 1.2rem;margin-top: 4rem;}
  #content_top .title{width: 100%;font-size: 1.4rem;margin: 0px;}
  #content_top .date{width: 100%;font-size: 1.2rem;margin: 0px;margin-top: 10px;margin-right: 15px;font-size: 1.4rem;}
  #content_top .writer{color: orange;}

  #content{width: 100%;padding: 1.2rem;}
  #content p{padding: 0px;margin: 0px;}
</style>


