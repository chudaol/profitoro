<template>
  <div class="container">
    <settings v-if="user && !user.isAnonymous"></settings>
  </div>
</template>
<script>
  import {PomodoroTimer, Settings, Statistics} from './sections'
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['user'])
    },
    components: {
      PomodoroTimer,
      Settings,
      Statistics
    }
  }
</script>
<style scoped lang="sass">

</style>
