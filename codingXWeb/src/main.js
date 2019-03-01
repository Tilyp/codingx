// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import common from './assets/js/common';
import serviceUtil from './assets/js/XTServiceUtils';

Vue.config.productionTip = false;
Vue.use(ElementUI, {size: 'small'});
Vue.use(common);
Vue.use(serviceUtil);


Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://localhost:8000';


router.beforeEach((to, from, next) => {
    const user = sessionStorage.getItem('user');
    if (!user && to.path !== '/login') {
        next('/login');
    } else {
        next();
    }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
