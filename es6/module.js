import a,{name} from './module.js'
// 也可以接收所有 、
// 如果有相同的名字 可以用别名
import * as kk from './module.js'
// 默认暴露 必须要有别名 要不然直接用别名
import {default as 12} from './module.js'
import 12 from './module.js'
console.log(name);