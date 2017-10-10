<template>
  <div class="well kittens text-center">
    <img :src="catimgsrc" />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        timestamp: Date.now()
      }
    },
    computed: {
      catimgsrc () {
        return 'http://thecatapi.com/api/images/get?size=med&ts=' + this.timestamp
      }
    },
    created () {
      const INTERVAL = 10000
      setInterval(() => {
        this.timestamp = Date.now()
      }, INTERVAL)
    }
  }
</script>
