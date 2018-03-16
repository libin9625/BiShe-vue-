import Vue from 'vue'
import Router from 'vue-router'
import Teacher from '../components/manage/Teacher/TeacherNav.vue'
import Welcome from '../components/manage/Teacher/Welcome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/teacher',
      name:'Teacher',
      component:Teacher,
      children:[
        {
          path:'/welcome',
          component:Welcome
        }
      ]
    }
  ]
})
