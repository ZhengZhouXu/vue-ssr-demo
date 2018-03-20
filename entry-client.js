// 客户端入口
import Vue from 'vue'
import {createApp} from './app.js'
const {app, router, store} = createApp()

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

// Vue.mixin({
//   beforeRouteUpdate (to, from, next) {
//     const { asyncData } = this.$options
//     if (asyncData) {
//       asyncData({
//         store: this.$store,
//         route: to
//       }).then(next).catch(next)
//     } else {
//       next()
//     }
//   }
// })

// // const { app, router, store } = createApp()

// // prime the store with server-initialized state.
// // the state is determined during SSR and inlined in the page markup.
// if (window.__INITIAL_STATE__) {
//   store.replaceState(window.__INITIAL_STATE__)
// }

// // wait until router has resolved all async before hooks
// // and async components...
// router.onReady(() => {
//   // Add router hook for handling asyncData.
//   // Doing it after initial route is resolved so that we don't double-fetch
//   // the data that we already have. Using router.beforeResolve() so that all
//   // async components are resolved.
//   router.beforeResolve((to, from, next) => {
//     const matched = router.getMatchedComponents(to)
//     const prevMatched = router.getMatchedComponents(from)
//     let diffed = false
//     const activated = matched.filter((c, i) => {
//       return diffed || (diffed = (prevMatched[i] !== c))
//     })
//     const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _)
//     if (!asyncDataHooks.length) {
//       return next()
//     }

//     bar.start()
//     Promise.all(asyncDataHooks.map(hook => hook({ store, route: to })))
//       .then(() => {
//         bar.finish()
//         next()
//       })
//       .catch(next)
//   })

//   // actually mount to DOM
//   app.$mount('#app')
// })

// router.onReady(() => {
//   app.$mount('#app')
//   console.log(1)
// })

// router.onReady(() => {
//   router.beforeResolve((to, from, next) => {
//     console.log(1111)
//     const metched = router.getMatchedComponents(to)
//     const prevMatched = router.getMatchedComponents(from)
//     let diffed = false
//     const activated = metched.filter((c, i) => {
//       return diffed || (diffed = (prevMatched[i] !== c))
//     })

//     if (!activated.length) {
//       return next()
//     }

//     Promise.all(activated.map(c => {
//       if (c.asyncData) {
//         return c.asyncData({store, route: to})
//       }
//     })).then(() => {
//       next()
//     }).catch(next)
//   })

//   router.afterEach((to, from) => {
//     console.log('afterEach')
//     app.$mount('#app')
//   })
// })

// router.onReady(() => {
//   router.beforeResolve((to, from, next) => {
//     const matched = router.getMatchedComponents(to)
//     const prevMatched = router.getMatchedComponents(from)

//     let diffed = false
//     const activated = matched.filter((c, i) => {
//       return diffed || (diffed = (prevMatched[i] !== c))
//     })
//     if (!activated.length) {
//       return next()
//     }

//     Promise.all(activated.map(c => {
//       if (c.asyncData) {
//         return c.asyncData({ store, route: to })
//       }
//     })).then(() => {
//       app.$mount('#app')
//       next()      
//     }).catch(next)
//   })
  
// })

// router.onReady(() => {
//   app.$mount('#app')
//   console.log(1)
// })
