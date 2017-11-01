<template>
  <div>
    <form @submit="onSubmit">
      <div class="form-row">
        <div class="form-group col-md-8">
          <label class="title" for="todo">Add new ToDo</label>
          <input v-model="todo" type="text" class="form-control" id="todo">
        </div>
        <div class="form-group col-md-4">
          <label class="title" for="priority">Priority</label>
          <select v-model="priority" id="priority" class="form-control">
            <option value=2 selected>medium</option>
            <option value=3>low</option>
            <option value=1>high</option>
          </select>
        </div>
      </div>
    </form>
    <h2 class="title">ToDo</h2>
    <div v-show="activeTodos.length === 0 && progressTodos.length === 0">
      <div class="alert alert-success" role="alert">
        Yay! All Done!!! <span>&hearts;</span><span>&hearts;</span><span>&hearts;</span>
      </div>
    </div>
    <div v-show="activeTodos.length !== 0" class="list-group">
      <to-do-item v-for="item in activeTodos"
                  :key="item.id"
                  :active="item.active"
                  :description="item.description"
                  :progress="item.progress"
                  :priority="item.priority"
                  :id="item.id"
                  :pomodorosWhenStarted="item.pomodorosWhenStarted"
                  :pomodoros="item.pomodoros">

      </to-do-item>
    </div>
    <h2 class="title">InProgress</h2>
    <div class="list-group">
      <to-do-item v-for="item in progressTodos"
                  :key="item.id"
                  :active="item.active"
                  :progress="item.progress"
                  :description="item.description"
                  :priority="item.priority"
                  :id="item.id"
                  :pomodoros="item.pomodoros"
                  :pomodorosWhenStarted="item.pomodorosWhenStarted">

      </to-do-item>
    </div>
    <h2 class="title">Done</h2>
    <div class="list-group">
      <to-do-item v-for="item in doneTodos"
                  :key="item.id"
                  :active="item.active"
                  :progress="item.progress"
                  :description="item.description"
                  :priority="item.priority"
                  :id="item.id"
                  :pomodoros="item.pomodoros"
                  :pomodorosWhenStarted="item.pomodorosWhenStarted">

      </to-do-item>
    </div>
    <a class="profitoro-link" v-show="doneTodos.length > 0" href="#" @click="clearDone">Clear Done</a>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import ToDoItem from '~/components/todos/ToDoItem'
  const DEFAULT_PRIORITY = 2

  export default {
    data () {
      return {
        todo: '',
        priority: DEFAULT_PRIORITY
      }
    },
    computed: {
      ...mapGetters(['activeTodos', 'doneTodos', 'progressTodos', 'getTotalPomodoros'])
    },
    components: {
      ToDoItem
    },
    methods: {
      ...mapActions(['addTodo', 'clearDoneTodos']),
      onSubmit (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.addTodo({
          description: this.todo,
          priority: this.priority,
          active: true,
          progress: false,
          pomodorosWhenStarted: this.getTotalPomodoros
        })
        this.todo = ''
        this.priority = DEFAULT_PRIORITY
      },
      clearDone (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.clearDoneTodos()
      }
    }
  }
</script>
<style scoped lang="scss">
  a.profitoro-link {
    color: rgba(241,93,89,.7);
    cursor: pointer;
    &:active, &:hover {
      color: rgb(241,93,89);
    }
  }
</style>
