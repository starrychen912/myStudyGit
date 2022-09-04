<template>
     <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add"/>
      </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default{
    name:'MyHeader',
    props:['addTodo'],
    methods:{
      // 获取输入的内容 可以使用event事件 也可以v-model再设置一个title 因为是input所以双向绑定就是值之前学过的
      add(e){
        // 做空值判断
        if(!e.target.value.trim()) return alert('添加不能为空')
        // console.log(e.target.value)
        // 将用户的输入包装成一个对象
        const todoObj={
          id:nanoid(),
          name:e.target.value,
          done:false,
        }
        // 把值传给app 调用了app上的方法 子传父
        this.addTodo(todoObj)
        // 清空输入框
        e.target.value=''
      }
    }
}
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>