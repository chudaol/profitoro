<template>
  <div>
    <div v-if="isLoading"><tomato /></div>
    <div v-if="!isLoading">
      <pomodoro v-if="isAuthenticated"></pomodoro>
      <login v-if="!isAuthenticated"></login>
    </div>
  </div>
</template>
<script>
  import login from '~/pages/login'
  import pomodoro from '~/pages/pomodoro'
  import Tomato from '~/components/common/Tomato'
  import { mapActions, mapState } from 'vuex'

  export default {
    data () {
      return {
        isLoading: true
      }
    },
    components: {login, pomodoro, Tomato},
    methods: {
      ...mapActions(['bindAuth', 'bindWorkouts'])
    },
    computed: {
      ...mapState(['user']),
      isAuthenticated () {
        return this.user && !this.user.isAnonymous
      }
    },
    beforeCreate () {
      setTimeout(() => {
        this.isLoading = false
      }, 500)
    },
    created () {
      this.bindWorkouts()
      this.bindAuth()
    }
  }
</script>
