// 客户端入口
import {createApp} from './app.js'
const {app, router} = createApp()
router.onReady(() => {
  app.$mount('#app')
})
