<template>
  <div>
    <div class="list-group">
      <to-do-item v-for="item in activeTodos"
                  :active="item.active"
                  :description="item.description"
                  :priority="item.priority"
                  :id="item.id"
                  :pomodoros="item.pomodoros">

      </to-do-item>
    </div>
    <div class="list-group">
      <to-do-item v-for="item in doneTodos"
                  :active="item.active"
                  :description="item.description"
                  :priority="item.priority"
                  :id="item.id"
                  :pomodoros="item.pomodoros">

      </to-do-item>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import ToDoItem from './ToDoItem'

  export default {
    computed: {
      ...mapGetters(['activeTodos', 'doneTodos'])
    },
    components: {
      ToDoItem
    }
  }
</script>
