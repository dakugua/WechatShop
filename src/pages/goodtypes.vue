<template>
  <div>
    <div class="titlecontent">
      <!--顶部搜索-->
      <titleBar :title="title"></titleBar>
    </div>
    <div class="content">
      <div class="leftcontent">
        <p v-for="item in levelone"  @click="changeMenu(item.id)">{{item.name}}</p>
      </div>
      <div class="rightcontent">
        <router-link v-for="item in childMenu" :to="{path:'/goodlist',query:{type:item.id}}"
                     tag="div" alt="类型" class="menuitem">
          <img :src="item.img" />
          <p>{{item.name}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: '商品分类',
        childMenu:[],
        levelone:[
          {
            name:'养护',
            id:'1'
          },{
            name:'快修',
            id:'2'
          },{
            name:'汽配',
            id:'3'
          },{
            name:'门店',
            id:'4'
          },{
            name:'设备',
            id:'5'
          },{
            name:'第三方服务',
            id:'6'
          },
        ],
        leveltwo:[
          {
            name:'饰品',
            id:'11',
            parentId:'1',
            img:require('../assets/icon/养护.png')
          },{
            name:'美容',
            id:'12',
            parentId:'1',
            img:require('../assets/icon/养护.png')
          },{
            name:'美容',
            id:'12',
            parentId:'1',
            img:require('../assets/icon/养护.png')
          },{
            name:'美容',
            id:'12',
            parentId:'1',
            img:require('../assets/icon/养护.png')
          },{
            name:'轮胎',
            id:'13',
            parentId:'2',
            img:require('../assets/icon/养护.png')
          },{
            name:'蓄电池',
            id:'14',
            parentId:'2',
            img:require('../assets/icon/养护.png')
          },{
            name:'智能硬件',
            id:'15',
            parentId:'3',
            img:require('../assets/icon/养护.png')
          },{
            name:'备件',
            id:'16',
            parentId:'3',
            img:require('../assets/icon/养护.png')
          },{
            name:'4S店',
            id:'17',
            parentId:'4',
            img:require('../assets/icon/养护.png')
          },{
            name:'汽车贸易行',
            id:'18',
            parentId:'4',
            img:require('../assets/icon/养护.png')
          }
        ]
      }
    },
    route: {
      data (transition) {
        var params = this.params = transition.to.params
        this.title = params.name
      }
    },
    methods:{
      changeMenu(id){
        this.childMenu = [];
        for(var i=0;i<this.leveltwo.length;i++){
          if(this.leveltwo[i].parentId == id ){
            this.childMenu.push({
              name:this.leveltwo[i].name,
              id:this.leveltwo[i].id,
              img:this.leveltwo[i].img
            });
          }
        }
      }
    },
    components: {
      titleBar: require('../components/Title.vue')
    }
  }
</script>

<style>
  .titlecontent {
    display: flex;
    flex-direction: column;
  }
  .content{width: 100%;margin: 0px;padding: 0px;margin-top: 4.1rem;}
  .leftcontent{width: 30%;overflow: hidden;float: left;border-right: 1px solid gainsboro;}
  .leftcontent p{text-align: center;}
  .rightcontent{width: 69%;overflow: hidden;float: right;}
  /*.rightcontent p{width: 33%;text-align: center;width: 100%;}*/

  .menuitem{width: 32%;text-align: center;margin: 0px;padding: 0px;float: left;padding-top: 0.5rem;}
  .menuitem img{width:5rem; height:5rem;}
  .menuitem p{width: 33%;text-align: center;width: 100%;}
</style>
