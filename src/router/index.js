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
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: true,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/shophome',
      name: 'shophome',
      component: shophome
    },
    {
      path: '/goodtypes',
      name: 'goodtypes',
      component: goodTypes
    },
    {
      path: '/gooddetail',
      name: 'goodDetail',
      component: goodDetail
    },
    {
      path: '/goodlist',
      name: 'goodList',
      component: goodList
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path:'/newsdetail',
      name:'newsDetail',
      component:newsDetail
    },
    {
      path:'/joinyyj',
      name:'joinYyj',
      component:joinYyj
    },
    {
      path:'/share',
      name:'share',
      component:share
    },
    {
      path:'/shopcart',
      name:'shopcart',
      component:shopcart
    }
  ]
})
