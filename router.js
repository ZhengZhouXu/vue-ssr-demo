// import Vue from 'vue'
// import Router from 'vue-router'

// Vue.use(Router)
// export function createRouter () {
//   return new Router({
//     mode: 'history',
//     routes: [{
//       path: '/',
//       component: () => require('./components/Home.vue')
//     }, {
//       path: '/bar',
//       component: () => require('./components/Bar.vue')
//     }]
//   })
// }

// router.js
import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Bar from './components/Bar.vue'

Vue.use(Router)
export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [{ 
      path: '/', 
      component: Home
    }, {
      path: '/bar',
      component: Bar
    }]
  })
}
