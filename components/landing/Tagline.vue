<template>
  <div>
    <p class="tagline">Be a part of our awesome team and have fun with us during the work breaks!</p>
    <nuxt-link class="small know-more" tag="p" to="about">Know more </nuxt-link>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped lang="scss">
  .tagline {
    margin: 0;
    font-weight: lighter;
    letter-spacing: 1px;
    color: white;
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;

    &+.know-more {
      margin-top: 32px;
    }
  }

  .know-more {
    display: inline-block;
    cursor: pointer;
    color: white;
    border-bottom: 1px solid rgba(255,255,255,.5);
    transition: all .2s ease;

    &:hover {
      border-color: rgba(255,255,255,1)
    }
  }
</style>

