import Vue from 'vue'
import Router from 'vue-router'
import IndexBody from '../components/index/IndexBody.vue'
import jdxwBody from '../components/index/jdxwBody.vue'
import ysjsBody from '../components/index/ysjsBody.vue'
import yezsBody from '../components/index/yezsBody.vue'
import Login from '../components/index/login.vue'
import Annouce from '../components/index/Annouce.vue'
import NoticeAll from '../components/index/NoticeAll.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexBody',
      component: IndexBody
    },
    {
      path: '/jdxw',
      name: 'jdxwBody',
      component: jdxwBody
    },
    {
      path: '/ysjs',
      name: 'ysjsBody',
      component: ysjsBody
    },
    {
      path: '/yezs',
      name: 'yezsBody',
      component: yezsBody
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/annouce',
      name: 'Annouce',
      component: Annouce
    },
    {
      path: '/noticeAll',
      name: 'NoticeAll',
      component: NoticeAll
    }
  ]
})
