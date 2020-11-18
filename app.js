new Vue({
    el: "#app",
    data: {
        title: 'To-Do',
        todos: []
    },
    methods: {
        addTodo({target}){
          this.todos.push({text: target.value, done: false, id: Date.now()})
        target.value = ''
      },
      removeTodo(id) {
          this.todos = this.todos.filter(todo => todo.id !== id)
      }
    }
  })