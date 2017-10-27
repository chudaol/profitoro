<template>
  <a href="#" :class="className" @click="toggleDone">
    {{ description }}
    <span v-if="pomodoros" class="badge badge-success badge-pill">{{ pomodoros }}</span>
  </a>
</template>
<script>
  import { mapActions } from 'vuex'

  const PRIORITIES_CLASSES_MAP = {
    high: 'list-group-item-danger',
    medium: 'list-group-item-warning',
    low: 'list-group-item-light'
  }
  const DONE_CLASS = 'list-group-item-success'

  export default {
    props: ['active', 'priority', 'description', 'pomodoros', 'id'],
    computed: {
      className () {
        const className = this.active ? PRIORITIES_CLASSES_MAP[this.priority] : DONE_CLASS
        return 'list-group-item list-group-item-action ' + className
      }
    },
    methods: {
      ...mapActions(['markToDoAsDone']),
      toggleDone () {
        this.markToDoAsDone(this.id)
      }
    }
  }
</script>
