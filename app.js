// 类似于工厂函数，创建所需对象
import Vue from 'vue'
import App from './App.vue'

export function createApp () {
  const app = new Vue({
    render: h => h(App)
  })

  return {app}
}