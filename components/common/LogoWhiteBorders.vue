<template>
  <nuxt-link to="/">
    <img class="logo" :src="src" alt="ProFitOro">
  </nuxt-link>
</template>
<script>
  export default {
    data () {
      return {
        src: require('../../assets/profitoro_logo_white_border.svg')
      }
    }
  }
</script>
<style lang="scss">
  @import "../../assets/styles/vendors/bootstrap/functions";
  @import "../../assets/styles/vendors/bootstrap/variables";
  @import "../../assets/styles/vendors/bootstrap/mixins";
  .logo {
    max-width: 160px;

    @include media-breakpoint-down(md) {
      max-width: 80px;
    }
  }

</style>
