import Vue from 'vue'
import Router from 'vue-router'
import Teacher from '../components/manage/Teacher/TeacherNav.vue'
import TWelcome from '../components/manage/Teacher/Welcome.vue'
import TManageTeacher from '../components/manage/Teacher/ManageTeacher.vue'
import TManageStudent from '../components/manage/Teacher/ManageStudent.vue'
import TManageCourse from '../components/manage/Teacher/ManageCourse.vue'
import TManageClass from '../components/manage/Teacher/ManageClass.vue'
import Admin from '../components/manage/Admin/AdminNav.vue'
import AManageTeacher from '../components/manage/Admin/ManageTeacher.vue'
import AWelcome from '../components/manage/Admin/Welcome.vue'
import Student from '../components/manage/Student/StudentNav.vue'
import SWelcome from '../components/manage/Student/Welcome.vue'
import SManageTeacher from '../components/manage/Student/ManageTeacher.vue'
import SManageStudent from '../components/manage/Student/ManageStudent.vue'
import SManageClass from '../components/manage/Student/ManageClass.vue'
import SManageCourse from '../components/manage/Student/ManageCourse.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/teacher',
      name:'Teacher',
      component:Teacher,
      children:[
        {
          path:'/teacher',
          component:TWelcome
        },
        {
          path:'/teacher/manageTeacher',
          component:TManageTeacher
        },
        {
          path:'/teacher/manageStudent',
          component:TManageStudent
        },
        {
          path:'/teacher/manageClass',
          component:TManageClass
        },
        {
          path:'/teacher/manageCourse',
          component:TManageCourse
        }
      ]
    },
    {
      path:'/admin',
      name:'Admin',
      component:Admin,
      children:[
        {
          path:'/admin',
          component:AWelcome
        },
        {
          path:'/admin/manageTeacher',
          component:AManageTeacher
        },
        {
          path:'/admin/manageStudent',
          component:TManageStudent
        },
        {
          path:'/admin/manageClass',
          component:TManageClass
        },
        {
          path:'/admin/manageCourse',
          component:TManageCourse
        }
      ]
    },
    {
      path:'/student',
      name:'Student',
      component:Student,
      children:[
        {
          path:'/student',
          component:SWelcome
        },
        {
          path:'/student/manageTeacher',
          component:SManageTeacher
        },
        {
          path:'/student/manageStudent',
          component:SManageStudent
        },
        {
          path:'/student/manageClass',
          component:SManageClass
        },
        {
          path:'/student/manageCourse',
          component:SManageCourse
        }
      ]
    }
  ]
})
