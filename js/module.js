function fi(n){
    return n<=2 ? 1:fi(n-1) + fi(n-2)//递归调用
  }
var onmessage = function(event){
    console.log('分线程接收到主线程的数据',event.data);
    var result = fi(event.data)
    // 分线程向主线程发送数据
    postMessage(result)
    // 分线程的全局对象不是windows，所以不能使用window的全局方法
}