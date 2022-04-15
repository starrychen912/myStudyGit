//npm init --yes npm的初始化
//npm i express安装express框架

//1.引入express
const { Console } = require('console')
const { response } = require('express')
const express = require('express')
const { request } = require('http')
const { setTimeout } = require('timers/promises')

// 2.创建应用对象
const app = express()

app.all('/json-server', (request, response) => {
    console.log(request)
    // 设置响应头 设置允许跨域
    // 第一下会报错 被占用 ctrl c释放端口
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 自定义响应头 并且把post改成all
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 响应一个数据
    const data = {
        name: 'kary',
        age: '23'
    }
    // 对对象进行字符串的转化
    let str = JSON.stringify(data)
    // 响应体 因为send只能接受buffer 
    response.send(str)
})
// ie
app.get('/ie', (request, response) => {
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置响应体
    response.send('hello ie-2')
})
// 延时响应
app.get('/delay', (request, response) => {
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(()=>{
response.send('延时')
    },3000)
       
    

})
// 4. 监听端口启动服务
app.listen(3000, () => {
    console.log('服务启动');
})