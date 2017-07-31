<template>
  <div class="container">
    <header-component></header-component>
    <div>Workouts</div>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common'
  export default {
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>
<style scoped lang="scss">

</style>
