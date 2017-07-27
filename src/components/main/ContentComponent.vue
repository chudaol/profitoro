<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
<script>
  import {PomodoroTimer, Settings, Statistics} from './sections'
  import {mapState} from 'vuex'
  import router from '@/router'

  export default {
    computed: {
      ...mapState(['user'])
    },
    components: {
      PomodoroTimer,
      Settings,
      Statistics
    },
    router
  }
</script>
<style scoped lang="sass">

</style>
