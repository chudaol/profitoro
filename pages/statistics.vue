<template>
  <div class="container">
    <header-component></header-component>
    <div>
      <h1>Statistics</h1>
      <p>Total Pomodoros: {{totalPomodoros}}</p>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common'
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        totalPomodoros: 'getTotalPomodoros'
      })
    },
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>
<style scoped lang="scss">

</style>
