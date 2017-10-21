<template>
  <!--顶部tabs-->
  <div class="demo-infinite-container HeaderTabs">
    <mu-tabs class="tabs" :value="activeTab" @change="handleTabChange">
      <mu-tab value="all" title="全部" />
      <mu-tab value="tuike" title="推客" />
      <mu-tab value="pxzj" title="培训专家" />
      <mu-tab value="qcwd" title="汽车问答" />
      <mu-tab value="lyc" title="老爷车" />
      <mu-tab value="kpfw" title="科普服务" />
      <mu-tab value="qcwh" title="汽车文化" />
    </mu-tabs>
    <div class="inloading" v-if="inloading">
      Loading...
    </div>

    <!--列表展示-->
    <mu-list>
      <div id="newsmain">
        <div v-if="activeTab != 'qcwd'" v-for="(item,index) in items" class="news">
          <router-link :to="{path:'/newsdetail',query:{type:item.id}}"
                       tag="div" alt="item.title">
            <p class="title">{{item.title}}</p>
            <img :src="item.author.avatar_url">
            <p class="writer">{{item.author.loginname}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.create_at.substring(0,10)}}</p>
          </router-link>
        </div>

        <div v-if="activeTab == 'qcwd'" v-for="(item,index) in items" class="wd">
          <router-link :to="{path:'/newsdetail',query:{type:item.id}}"
                       tag="div" alt="item.title">
            <div style="height: 3rem;line-height: 3rem;">
              <img :src="item.author.avatar_url">
              <span class="writer">{{item.author.loginname}}</span>
            </div>
            <p class="title">{{item.title}}</p>
            <!--<div v-html="item.content" class="content"></div>-->
          </router-link>
        </div>

        <!--若下拉加载没内容了 显示这个 -->
        <p class="nomore" v-show="nomore">内容到底啦</p>
      </div>
    </mu-list>
    <!--若无item 显示这个  -->
    <div v-if="!items.length">
      <strong>暂无话题</strong>
    </div>
    <!--下拉加载更多的组件-->
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" />
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        loading: false,
        inloading: false,
        scroller: null,
        nomore: false,
        activeTab: 'all', //当前选中tab项
        styleObj: {
          backgroundColor: '#C5C5C7'
        },
        url: 'https://www.vue-js.com/api/v1/topics?tab=all',
        page: 1,
        items:[
          {
            id:"13212123123123k3n12kn1kn",
            title:"吉利登顶 评2017上半年中国品牌销量超预期",
            writer:"匿名",
            date:"2017-10-07"
          },
          {
            id:"13212123123123k3n12kn1kn",
            title:"吉利登顶 评2017上半年中国品牌销量超预期",
            writer:"匿名",
            date:"2017-10-07"
          },
          {
            id:"13212123123123k3n12kn1kn",
            title:"吉利登顶 评2017上半年中国品牌销量超预期",
            writer:"匿名",
            date:"2017-10-07"
          },
          {
            id:"13212123123123k3n12kn1kn",
            title:"吉利登顶 评2017上半年中国品牌销量超预期",
            writer:"匿名",
            date:"2017-10-07"
          },{
            id:"13212123123123k3n12kn1kn",
            title:"吉利登顶 评2017上半年中国品牌销量超预期",
            writer:"匿名",
            date:"2017-10-07"
          },
          {
            id:"13212123123123k3n12kn1kn",
            title:"吉利登顶 评2017上半年中国品牌销量超预期",
            writer:"匿名",
            date:"2017-10-07"
          }
        ]
      }
    },
    // 先导航和渲染组件，然后在组件的 created 钩子中获取数据
     // 组件创建完后获取数据，
    created() {
      this.getData()
    },
    // 挂载完毕
    mounted() {
      this.scroller = this.$el
    },
    methods: {
      // tab切换
      handleTabChange(val) {
        this.page = 1 //切换tab，页数重置为第一页
        this.nomore = false //切换tab，重置
        this.activeTab = val
        this.url = 'https://www.vue-js.com/api/v1/topics?tab=' + val
        if("qcwd" == val){
          this.url = 'https://www.vue-js.com/api/v1/topics?tab=all'
        }
        this.getData()
      },
      // 数据获取
      getData() {
        let that = this
        that.inloading = true
        axios.get(this.url).then(function(response) {
          that.items = response.data.data
          that.inloading=false
          // console.log(that.items)
        })
      },
      getWdData(){

      },
      // 下拉刷新
      loadMore() {
        if (!this.nomore&&!this.inloading) {
          this.loading = true
          this.page += 1
          let url = 'https://www.vue-js.com/api/v1/topics?tab=all' + '&page=' + this.page
          let arr = []
          setTimeout(() => {
            let that = this
            axios.get(url).then(function(response) {
              arr = response.data.data
              if (arr.length === 0) {
                that.loading = false
                that.nomore = true
                return
              }
              for(var i=0;i<arr.length;i++){
                arr[i].create_at = arr[i].create_at.substring(0,10);
              }
              that.items = [...that.items, ...arr]
              arr = []
            })
            this.loading = false
          }, 1000)
        }
      }
    }

  }
</script>

<style >
  .HeaderTabs {
    overflow: auto;
    height: 100vh;
  }

  .HeaderTabs .tabs {
    margin-top: 4rem;
    height: 4rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    background: white;
    justify-content: space-around;
  }

  .HeaderTabs .tabs .mu-tab-text{
    color: grey;
  }

  .mu-tab-link, .mu-tab-active {
    white-space: nowrap;
  }

  .nomore {
    text-align: center;
    padding: 1rem 0;
  }

  #newsmain{width: 100%;margin-top: 7rem;}
  .news{width: 100%;height: 9rem;padding:1rem;margin: 0px;border-bottom: solid 1px grey;}
  .news p{padding: 0px;margin: 0px;}
  .news .title{width: 70%;display: inline-block;height: 5.5rem;}
  .news img{width: 4rem;height: 4rem;float: right;}
  .news .writer{}
  /*.news .writer{position: absolute;bottom: 0px;}*/
  .news .right{width: 30%;float: right;}

  .wd{width: 100%;padding: 1rem;margin: 0px;border-bottom: solid 1px grey;}
  .wd img{width: 3rem;height: 3rem;float: left;border-radius:1.5rem}
  .wd .writer{font-size: 1.5rem;display: block;float: left;margin-left: 10px;}
  .wd .title{font-size: 1.5rem;font-style: oblique;margin: 0px;padding: 0px;}
  .wd .content{font-size: 1.3rem;text-overflow: ellipsis;overflow: hidden;display: -webkit-box;-webkit-line-clamp:3;-webkit-box-orient: vertical;}

</style>
