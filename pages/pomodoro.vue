<template>
  <div>
    <header-component></header-component>
    <div class="container min-full-height">
      <div class="main-content row">
        <div v-show="currentPomodoroState !== pomodoroState.WORKING" class="col-sm-12 col-md-6 col-lg-5">
          <div v-if="!kittens">
            <img class="img-fluid rounded" :src="workout.picture" :alt="workout.name">
            <h2 class="title">{{ workout.name }}</h2>
            <p class="description">
              {{ workout.description }}
            </p>
          </div>
          <div v-if="kittens">
            <kittens-component></kittens-component>
          </div>
          <div v-if="!kittens">
            <button type="button" class="button button-primary">Done!</button>
            <button type="button" class="button button-primary">Next</button>
          </div>
          <div class="lazy-section">
            <h4 class="title">Feeling <span class="bold">{{ kittens ? 'energetic' : 'lazy' }}</span>?</h4>
            <button type="button" class="button button-primary-faded" @click="toggleKittens">{{ kittens ? showWorkoutsButtonText : showKittensButtonText }}</button>
          </div>
        </div>
        <div class="countdown-holder col-sm-12" v-bind:class="[currentPomodoroState !== pomodoroState.WORKING ? 'col-md-6 col-lg-7' : 'col-md-12']">
          <count-down-timer ref="countdowntimer" @finished="onTimerFinished" :time="time"></count-down-timer>
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

  export default {
    data () {
      return {
        showKittensButtonText: 'Show me some kittens!',
        showWorkoutsButtonText: 'I wanna exercise!'
      }
    },
    computed: {
      ...mapGetters('pomodoro', ['kittens', 'pomodoroState', 'currentPomodoroState', 'workout', 'time'])
    },
    components: {
      FooterComponent,
      HeaderComponent,
      CountDownTimer,
      KittensComponent
    },
    methods: {
      ...mapActions('pomodoro', ['toggleKittens', 'togglePomodoro']),
      onTimerFinished () {
        beep()
        this.togglePomodoro()
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
