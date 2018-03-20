// router.js
import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
// import Bar from './components/Bar.vue'

Vue.use(Router)
export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [{ 
      path: '/', 
      component: Home
    }, {
      path: '/bar',
      // 这么写必需安装babel插件: babel-plugin-syntax-dynamic-import
      component: () => import('./components/Bar.vue') 
    }]
  })
}
