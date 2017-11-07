<template>
  <a href="#" :class="className" @click="onClick" :disabled="!active">
    {{ description }}
    <span
      v-if="active === false"
      class="badge badge-success badge-pill"
      data-toggle="tooltip" data-placement="top" title="Number of pomodoros it took to complete this task"
    >
      {{ pomodoros }}
    </span>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span v-show="active && !progress" aria-hidden="true">&gt;</span>
      <input v-show="progress || !active" type="checkbox" :checked="!active" :disabled="!active">
    </button>
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
    props: ['active', 'progress', 'priority', 'description', 'pomodoros', 'id', 'pomodorosWhenStarted'],
    computed: {
      ...mapGetters(['totalPomodoros']),
      className () {
        const className = this.active ? PRIORITIES_CLASSES_MAP[this.priority] : DONE_CLASS + ' disabled'
        return 'list-group-item list-group-item-action ' + className
      }
    },
    methods: {
      ...mapActions(['markToDoAsDone', 'markToDoAsInProgress', 'setToDoPomodoros', 'setPomodorosWhenStarted']),
      onClick () {
        if (this.progress) {
          this.toggleDone()
        } else if (this.active) {
          this.toggleInProgress()
        }
      },
      toggleDone () {
        let pomodoros = _.isFinite(this.pomodoros) ? this.pomodoros : (this.totalPomodoros - this.pomodorosWhenStarted)
        this.setToDoPomodoros({id: this.id, pomodoros})
        this.markToDoAsDone(this.id)
      },
      toggleInProgress () {
        let pomodoros = this.totalPomodoros
        this.setPomodorosWhenStarted({id: this.id, pomodoros})
        this.markToDoAsInProgress(this.id)
      }
    }
  }
</script>
<style scoped>
  a.list-group-item-success {
    text-decoration: line-through;
  }
  .btn.btn-link {
    color: gray;
  }
  button.close span {
    cursor: pointer;
  }
</style>
