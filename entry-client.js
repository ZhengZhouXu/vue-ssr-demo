// 客户端入口
// import Vue from 'vue'
import {createApp} from './app.js'
const {app, router, store} = createApp()

// 有两种方法，暂时只用一种
router.onReady(() => {
  router.beforeResolve((to, from, next) => {
    const metched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)
    let diffed = false
    const activated = metched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c))
    })

    if (!activated.length) {
      return next()
    }

    Promise.all(activated.map(c => {
      if (c.asyncData) {
        return c.asyncData({store, route: to})
      }
    })).then(() => {
      next()
    }).catch(next)
  })

  app.$mount('#app')
})
