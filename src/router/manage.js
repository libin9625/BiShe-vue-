import Vue from 'vue'
import Router from 'vue-router'
import Teacher from '../components/manage/Teacher/TeacherNav.vue'
import Welcome from '../components/manage/Welcome.vue'
import TManageTeacher from '../components/manage/Teacher/ManageTeacher.vue'
import TManageStudent from '../components/manage/Teacher/ManageStudent.vue'
import TManageCourse from '../components/manage/Teacher/ManageCourse.vue'
import TManageClass from '../components/manage/Teacher/ManageClass.vue'
import Admin from '../components/manage/Admin/AdminNav.vue'
import AManageTeacher from '../components/manage/Admin/ManageTeacher.vue'
import Student from '../components/manage/Student/StudentNav.vue'
import SManageTeacher from '../components/manage/Student/ManageTeacher.vue'
import SManageStudent from '../components/manage/Student/ManageStudent.vue'
import SManageClass from '../components/manage/Student/ManageClass.vue'
import SManageCourse from '../components/manage/Student/ManageCourse.vue'
import TNotice from '../components/manage/Teacher/ManageNotice.vue'
import TNoticeAdd from '../components/manage/Teacher/NoticeAdd.vue'
import ANotice from '../components/manage/Admin/ManageNotice.vue'
import ANoticeAdd from '../components/manage/Admin/NoticeAdd.vue'

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
          component:Welcome
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
        },
        {
          path:'/teacher/notice',
          component:TNotice
        },
        {
          path:'/teacher/noticeAdd',
          component:TNoticeAdd
        },
        {
          path:'/teacher/noticeUpdate',
          component:TNoticeAdd
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
          component:Welcome
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
        },
        {
          path:'/admin/notice',
          component:ANotice
        },
        {
          path:'/admin/noticeAdd',
          component:ANoticeAdd
        },
        {
          path:'/admin/noticeUpdate',
          component:ANoticeAdd
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
          component:Welcome
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
