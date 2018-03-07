import Vue from 'vue'
import Router from 'vue-router'
import IndexBody from '@/components/IndexBody'
import jdxwBody from '@/components/jdxwBody'
import ysjsBody from '@/components/ysjsBody';
import yezsBody from '@/components/yezsBody';

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
    }
  ]
})
