const VueRenderer = require('vue-server-renderer')
const fs = require('fs')
const express = require('express')
const path = require('path')

const server = express()
server.use(express.static('./dist'))
const bundle = fs.readFileSync(path.resolve(__dirname, './dist/built-server-bundle.js'), 'utf-8')
const template = fs.readFileSync(path.resolve(__dirname, './dist/index.ssr.html'), 'utf-8')
const renderer = VueRenderer.createBundleRenderer(bundle, {
  template: template
})

server.get('/', (req, res) => {
  const context = {
    url: req.url
  }
  renderer.renderToString((err, html) => {
    if (err) throw err
    else res.end(html)
  })
})

server.listen(8989, (err) => {
  if (err) throw err
  
  console.log('启动')
})
