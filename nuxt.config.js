module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ProFitOro',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ProFitOro is a Pomodoro timer implementation combined with office workouts. Take breaks during work. Exercise during breaks ' },
      { hid: 'keywords', name: 'keywords', content: 'Pomodoro, workouts, fit, time management, office workouts, pomodoro technique' },
      { hid: 'image', name: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/profitoro-ad0f0.appspot.com/o/assets%2Fsharing.png?alt=media&token=d8687d98-24a7-4a8a-b0c4-06a39b127443' },
      { hid: 'url', name: 'og:url', content: 'https://www.profitorolife.com' },
      { hid: 'title', name: 'og:title', content: 'ProFitOro' },
      { hid: 'ogdescription', name: 'og:description', content: 'ProFitOro is a Pomodoro timer implementation combined with office workouts. Take breaks during work. Exercise during breaks ' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'stylesheet', lang: 'scss', href: '~/assets/styles/main.scss' }
    ],
    script: [
      { type: 'text/javascript', src: '/jquery.js' },
      { type: 'text/javascript', src: '/tether.js' },
      { type: 'text/javascript', src: '/bootstrap.js' }
    ]
  },
  css: [
    '~static/bootstrap.css',
    '~static/main.css'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/loading.vue',
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
