import CourseCreate from '@/components/Courses/CreateCourse'
import CourseEdit from '@/components/Courses/EditCourse'
import CourseIndex from '@/components/Courses/Index'
import CourseShow from '@/components/Courses/ShowCourse'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/course/create',
      name: 'course-create',
      component: CourseCreate
    },
    {
      path: '/course/edit/:courseId',
      name: 'course-edit',
      component: CourseEdit
    },
    {
      path: '/course/:courseId',
      name: 'course',
      component: CourseShow
    },
    {
      path: '/courses',
      name: 'courses',
      component: CourseIndex
    },

    

  ]
})
