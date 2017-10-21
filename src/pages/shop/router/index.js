import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import index from '../pages/index'
import shophome from '../pages/shophome'
import goodTypes from '../pages/goodtypes'
import goodDetail from '../pages/gooddetail'
import goodList from '../pages/goodlist.vue'
import news from '../pages/news.vue'
import newsDetail from '../pages/newsdetail.vue'
import joinYyj from '../pages/joinyyj.vue'
import share from '../pages/share.vue'
import shopcart from '../pages/shopcart.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  scorllBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/dtbd',
      name: 'index',
      component: index
    },
    {
      path: '/dtbd/shophome',
      name: 'shophome',
      component: shophome
    },
    {
      path: '/dtbd/goodtypes',
      name: 'goodtypes',
      component: goodTypes
    },
    {
      path: '/dtbd/gooddetail',
      name: 'goodDetail',
      component: goodDetail
    },
    {
      path: '/dtbd/goodlist',
      name: 'goodList',
      component: goodList
    },
    {
      path: '/dtbd/news',
      name: 'news',
      component: news
    },
    {
      path:'/dtbd/newsdetail',
      name:'newsDetail',
      component:newsDetail
    },
    {
      path:'/dtbd/joinyyj',
      name:'joinYyj',
      component:joinYyj
    },
    {
      path:'/dtbd/share',
      name:'share',
      component:share
    },
    {
      path:'/dtbd/shopcart',
      name:'shopcart',
      component:shopcart
    }
  ]
})
