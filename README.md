### 添加router
1. npm i
2. npm run build
3. node server.js

### url
localhost:8989/  
localhost:8989/bar

### 问题
异步组件必需使用babel插件  
1.npm
> npm install --save-dev babel-plugin-syntax-dynamic-import  

2.babelrc
> {
  "plugins": ["syntax-dynamic-import"]
}