const VueRenderer = require('vue-server-renderer')
const fs = require('fs')
const express = require('express')
const path = require('path')
const createApp = require('./dist/built-server-bundle.js').default

const server = express()
server.use(express.static('./dist'))
// const bundle = fs.readFileSync(path.resolve(__dirname, './dist/built-server-bundle.js'), 'utf-8')
const template = fs.readFileSync(path.resolve(__dirname, './dist/index.ssr.html'), 'utf-8')
const renderer = VueRenderer.createRenderer({
  template: template
})

server.get('*', (req, res) => {
  const context = { url: req.url }
  createApp(context).then(app => {
    renderer.renderToString(app, (err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Page not found')
        } else {
          res.status(500).end('Internal Server Error')
        }
      } else {
        res.end(html)
      }
    })
  })
})

server.listen(8989, (err) => {
  if (err) throw err
  
  console.log('启动')
})
