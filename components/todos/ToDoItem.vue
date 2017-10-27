<template>
  <a href="#" :class="className" @click="toggleDone">
    <input type="checkbox" :checked="!active" :disabled="!active">
    {{ description }}
    <span
      v-if="active === false"
      class="badge badge-success badge-pill"
      data-toggle="tooltip" data-placement="top" title="Number of pomodoros it took to complete this task"
    >
      {{ pomodoros }}
    </span>
  </a>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  import _ from 'lodash'

  const PRIORITIES_CLASSES_MAP = {
    1: 'list-group-item-danger',
    2: 'list-group-item-warning',
    3: 'list-group-item-light'
  }
  const DONE_CLASS = 'list-group-item-success'

  export default {
    props: ['active', 'priority', 'description', 'pomodoros', 'id', 'pomodorosWhenStarted'],
    computed: {
      ...mapGetters(['totalPomodoros']),
      className () {
        const className = this.active ? PRIORITIES_CLASSES_MAP[this.priority] : DONE_CLASS
        return 'list-group-item list-group-item-action ' + className
      }
    },
    methods: {
      ...mapActions(['markToDoAsDone', 'setToDoPomodoros']),
      toggleDone () {
        let pomodoros = _.isFinite(this.pomodoros) ? this.pomodoros : (this.totalPomodoros - this.pomodorosWhenStarted)
        this.setToDoPomodoros({id: this.id, pomodoros})
        this.markToDoAsDone(this.id)
      }
    }
  }
</script>
<style scoped>
  a.list-group-item-success {
    text-decoration: line-through;
  }
</style>
