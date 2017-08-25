<template>
  <div>
    <header-component></header-component>
    <div class="container min-full-height">
      <div class="main-content row justify-content-center">
        <div class="col-12 justify-content-center">
          <div>
            <kittens-component></kittens-component>
          </div>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import CountDownTimer from '~/components/timer/CountDownTimer'
  import KittensComponent from '~/components/timer/KittensComponent'
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
        source: require('~/assets/images/pushups.png'),
        chosenWorkout: {name: '', description: '', picture: ''},
        showKittens: true
      }
    },
    computed: {
      ...mapGetters({
        config: 'getConfig',
        totalPomodoros: 'getTotalPomodoros',
        workouts: 'getWorkouts'
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
      CountDownTimer,
      KittensComponent
    },
    methods: {
      ...mapActions(['updateTotalPomodoros']),
      getRandomWorkout () {
        return this.workouts[Math.floor(Math.random() * this.workouts.length)]
      },
      togglePomodoro () {
        beep()
        switch (this.state) {
          case STATE.WORKING:
            // we have switched to the break state, increase the number of pomodoros and choose between long and short break
            this.pomodoros ++
            this.updateTotalPomodoros(this.totalPomodoros + 1)
            this.state = this.pomodoros % this.config.pomodorosTillLongBreak === 0
              ? STATE.LONG_BREAK : STATE.SHORT_BREAK
            this.chosenWorkout = this.getRandomWorkout()
            this.chosenWorkout.picture = this.chosenWorkout.pictures && this.chosenWorkout.pictures.length && this.chosenWorkout.pictures[0]
            alert('Time for kittens!')
            break
          default:
            // time to work!
            this.state = STATE.WORKING
            alert('Time to work!')
            break
        }
        this.$refs.countdowntimer.start()
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../assets/styles/main";

  .title {
    margin: 10px 0;
  }
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
