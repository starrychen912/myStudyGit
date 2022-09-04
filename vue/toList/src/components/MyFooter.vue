<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <!--  被读取也被使用就想到v-model -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "checkAllTodo","clearAllToDo"],
  computed: {
    total() {
      return this.todos.length;
    },
    doneTotal() {
      // let i = 0
      // this.todos.forEach(todo => {
      //   if(todo.done) i++
      // });
      // return i++
      // 使用reduce es6专门做条件统计
      // 第一个值是函数 第二个是初始值类似i 函数的调用根据数组长度
      return this.todos.reduce(
        (pre, current) => pre + (current.done ? 1 : 0),
        0
      );
    },
    isAll: {
      // 只被读取不被修改 才能使用简写 写在v-model里面就得有setter
      // return this.doneTotal === this.todos.length && this.total>0
      get() {
        return this.doneTotal === this.todos.length && this.total > 0;
      },
      set(value) {
        this.checkAllTodo(value);
      },
    },
  },
  methods: {
    checkAll(e) {
      this.checkAllTodo(e.target.checked);
    },
    clearAll(){
      this.clearAllToDo()
    }
  },
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>