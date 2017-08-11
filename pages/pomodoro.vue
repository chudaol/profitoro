<template>
  <div>
    <header-component></header-component>
    <div class="container min-full-height">
      <div class="main-content row">
        <div v-show="state !== 0" class="col-sm-12 col-md-6 col-lg-5">
          <div class="">
            <img src="source" alt="Push Ups">
            <h2 class="title">Push-ups</h2>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div>
              <button type="button" class="button button-primary">Done!</button>
              <button type="button" class="button button-primary">Next</button>
            </div>
            <div class="lazy-section">
              <h4 class="title">Feeling <span class="bold">Lazy</span> today?</h4>
              <button type="button" class="button button-primary-faded">Show me some kittens!</button>
            </div>
          </div>
        </div>
        <div class="countdown-holder col-sm-12" v-bind:class="[state !== 0 ? 'col-md-6 col-lg-7' : 'col-md-12']">
          <count-down-timer ref="countdowntimer" @finished="togglePomodoro" :time="time"></count-down-timer>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import CountDownTimer from '~/components/timer/CountDownTimer'
  import { HeaderComponent, FooterComponent } from '~/components/common'
  import { mapGetters, mapActions } from 'vuex'
  import { beep } from '~/utils/utils'

  const STATE = {
    WORKING: 0,
    SHORT_BREAK: 1,
    LONG_BREAK: 2
  }
  export default {
    data () {
      return {
        state: STATE.WORKING,
        pomodoros: 0,
        source: require('~/assets/images/pushups.png')
      }
    },
    computed: {
      ...mapGetters({
        config: 'getConfig',
        totalPomodoros: 'getTotalPomodoros'
      }),
      time () {
        let minutes

        switch (this.state) {
          case STATE.WORKING:
            minutes = this.config.workingPomodoro
            break
          case STATE.SHORT_BREAK:
            minutes = this.config.shortBreak
            break
          case STATE.LONG_BREAK:
            minutes = this.config.longBreak
            break
          default:
            minutes = this.config.workingPomodoro
            break
        }

        return minutes * 60
      }
    },
    components: {
      FooterComponent,
      HeaderComponent,
      CountDownTimer
    },
    methods: {
      ...mapActions(['updateTotalPomodoros']),
      togglePomodoro () {
        beep()
        switch (this.state) {
          case STATE.WORKING:
            // we have switched to the break state, increase the number of pomodoros and choose between long and short break
            this.pomodoros ++
            this.updateTotalPomodoros(this.totalPomodoros + 1)
            this.state = this.pomodoros % this.config.pomodorosTillLongBreak === 0
              ? STATE.LONG_BREAK : STATE.SHORT_BREAK
            break
          default:
            // time to work!
            this.state = STATE.WORKING
            break
        }
        this.$refs.countdowntimer.start()
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../assets/styles/main";

  .description {
    margin: 20px 0;
    color: #999;
  }
  .button-primary {
    width: 47.5%;
    margin: 0;

    &:first-of-type {
      margin-right: 5%;
      padding: 0;
      float: left;
    }
  }
  .lazy-section {
    margin-top: 40px;

    .title {
      font-size: $font-size-medium;
    }
  }
</style>
