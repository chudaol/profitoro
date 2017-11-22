<template>
  <div class="landingPage">
    <div class="left">
      <small-tomato></small-tomato>
      <tagline></tagline>
      <logo-with-white-borders></logo-with-white-borders>
    </div>
    <div class="right">
      cenas right
    </div>
    <!--<div class="container row justify-content-center align-items-center">-->
      <!--<div class="col-sm-12 col-md-12">-->
        <!--<logo-text></logo-text>-->
        <!--<tagline></tagline>-->
        <!--<authentication></authentication>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>
<script>
  import {Authentication, LogoText, Tagline} from '~/components/landing'
  import {SmallTomato, LogoWithWhiteBorders} from '~/components/common'
  export default {
    components: {
      Authentication,
      LogoText,
      Tagline,
      SmallTomato,
      LogoWithWhiteBorders
    }
  }
</script>
<style scoped lang="scss">
  .landingPage {
    display: flex;
    justify-content: space-evenly;
    height: 100vh;
  }
  .left {
    text-align: center;
    width: 50%;
    background-image: linear-gradient(45deg, rgb(236,32,83) 0%, rgb(64,86,255) 50%, rgb(2,245,205) 100%);
    background-image: -moz-linear-gradient( 45deg, rgb(236,32,83) 0%, rgb(64,86,255) 50%, rgb(2,245,205) 100%);
    background-image: -webkit-linear-gradient( 45deg, rgb(236,32,83) 0%, rgb(64,86,255) 50%, rgb(2,245,205) 100%);
    background-image: -ms-linear-gradient( 45deg, rgb(236,32,83) 0%, rgb(64,86,255) 50%, rgb(2,245,205) 100%);
  }
  .right {
    width: 50%;
  }
</style>
