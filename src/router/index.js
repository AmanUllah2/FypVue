import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import AppLogin from '@/components/AppLogin'
import AppRegister from '@/components/AppRegister'
import UserView from '@/components/UserView';
import AppExtractUrl from '@/components/AppExtractUrl'
import AppVisualize from '@/components/AppVisualize'
import AppSearchIP from '@/components/AppSearchIP'
import AppMonitor from '@/components/AppMostvisited'
import AppError from '@/components/AppLoginError'
import AppClassify from '@/components/AppClassify'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppLogin',
      component: AppLogin
    },
    {
      path: '/home',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/register',
      name: 'AppRegister',
      component: AppRegister
    },
    {
      path: '/extracturl',
      name: 'AppExtractUrl',
      component: AppExtractUrl
    },
    {
      name: 'UserView',
      path: '/users',
      component: UserView
    },
    {
      name: 'AppVisualize',
      path: '/visualize',
      component: AppVisualize
    },
    {
      name: 'AppSearchIP',
      path: '/CSVsearch',
      component: AppSearchIP
    },
    {
      name: 'AppMonitor',
      path: '/most',
      component: AppMonitor
    },
    {
      name: 'AppError',
      path: '/error',
      component: AppError
    },
    {
      name: 'AppClassify',
      path: '/classify',
      component: AppClassify
    }
  ]
})
