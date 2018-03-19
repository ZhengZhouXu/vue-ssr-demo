// 类似于工厂函数，创建所需对象
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

export function createApp () {
  const router = createRouter()
  const app = new Vue({
    router,
    render: h => h(App)
  })

  return {app, router}
}