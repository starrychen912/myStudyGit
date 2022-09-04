<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo" />
        <MyList
          :todos="todos"
          :checkTodo="checkTodo"
          :deleteTodo="deleteTodo"
        />
        <my-footer
          :todos="todos"
          :checkAllTodo="checkAllTodo"
          :clearAllToDo="clearAllToDo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";

export default {
  name: "App",
  components: {
    MyFooter,
    MyHeader,
    MyList,
  },
  data() {
    return {
      // 如果是第一次使用就是没有数据 会返回null 这个时候没有length就会报错
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 添加一个todo
    addTodo(e) {
      // 拿到值
      this.todos.unshift(e);
    },
    // 修改todo状态
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id == id) {
          todo.done = !todo.done;
          console.log(todo.done);
        }
      });
    },
    // 删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    // 全选or全不选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    // 清除所有已经完成的todo
    clearAllToDo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
    // 更新数据
    updateTODO(id,name) {
      this.todos.forEach((todo) => {
        if (todo.id == id) {
          todo.name = name;
          console.log(todo.done);
        }
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted(){
    this.$bus.$on('updateTodo',((id,name)=>{
      this.todos.forEach((todo) => {
        if (todo.id == id) {
          todo.name = name;
          console.log(todo.done);
        }
      });
    }))
  }
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(83, 129, 148);
  margin-right: 5px;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
