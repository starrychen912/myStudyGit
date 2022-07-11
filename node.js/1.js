const path = require('path')
const fs = require('fs')

// 定义哦正则表达式 匹配style 和 script
const regStyle = /<style>[\s\S]*<\/style>/

const regScript = /<script>[\s\S]*<\/script>/

// 读取文件
fs.readFile(path.join(__dirname,'././index.html'),'utf8',function(err,data){
    if(err){
        console.log('error');
    }
    // 成功就拆出css js html 自定义这几个方法
    resolveCss(data)
    
})
// 定义方法
function resolveCss(htmldata){
    // 通过正则提取需要的内容
    const r1 = regStyle.exec(htmldata)
    // 替换掉style标签
    const newcss = r1[0].replace('<style>','').replace("</style>",'')
    // 存进新的文件中
    fs.writeFile(path.join(__dirname,'1.css'),newcss,function(err){
        if(err){
            console.log('error');
        }
    })
}