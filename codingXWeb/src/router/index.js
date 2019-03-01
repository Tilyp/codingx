import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

export default new Router({
  routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
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
