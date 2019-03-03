import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

Vue.use(Router);

export default new Router({
  routes: [
      {
        path: '/',
        name: 'home',
        component: home
      },
      {
            path: '/login',
            component: resolve => require(['../components/login.vue'], resolve)
        },
      {
          path: '/404',
          component: resolve => require(['../demo/404.vue'], resolve)
      },
      {
          path: '/403',
          component: resolve => require(['../demo/403.vue'], resolve)
      },
      {
          path: '*',
          redirect: '/404'
      }
  ]
})
