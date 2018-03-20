// 服务端入口
import { createApp } from './app'
export default context => {
  return new Promise((resolve, reject) => {
    const {app, router, store} = createApp()

    router.push(context.url)
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject({code: 404})
      }

      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            store,
            route: router.currentRoute
          })
        }
      })).then(() => {
        context.state = store.state // 赋值状态
        resolve(app)
      }).catch(reject)
            
    }, reject)
  })
}
