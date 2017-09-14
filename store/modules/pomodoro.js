import {leftPad, numberOfSecondsFromNow} from '~/utils/utils'

const POMODORO_STATE = {
  WORKING: 0,
  SHORT_BREAK: 1,
  LONG_BREAK: 2
}

const TIMER_STATE = {
  STARTED: 0,
  STOPPED: 1,
  PAUSED: 2
}

const TOGGLE_KITTENS = 'TOGGLE_KITTENS'
const INCREMENT_POMODOROS = 'INCREMENT_POMODOROS'
const UPDATE_CURRENT_STATE = 'UPDATE_CURRENT_STATE'
const SET_POMODORO_TIME = 'SET_POMODORO_TIME'
const SET_WORKOUT = 'SET_WORKOUT'
const SET_TIMER_TIMESTAMP = 'SET_TIMESTAMP'
const SET_PAUSE_TIME = 'SET_PAUSE_TIME'

export default {
  namespaced: true,
  state: {
    POMODORO_STATE,
    TIMER_STATE,
    currentPomodoroState: POMODORO_STATE.WORKING,
    currentTimerState: TIMER_STATE.STOPPED,
    pomodoroTime: 25,
    showKittens: false,
    pomodoros: 0,
    chosenWorkout: {},
    timestamp: null,
    pauseTime: 0,
    interval: null
  },
  getters: {
    currentState: state => state.currentState,
    pomodoroState: state => state.POMODORO_STATE,
    workout: state => state.chosenWorkout,
    kittens: state => state.showKittens,
    time: state => state.pomodoroTime,
    minutes (state) {
      return Math.floor(state.timestamp / 60)
    },
    seconds (state) {
      return state.timestamp % 60
    },
    angle (state, getters) {
      return 360 - (360 / getters.time * state.timestamp)
    },
    text (state, getters) {
      return `${leftPad(getters.minutes)}:${leftPad(getters.seconds)}`
    }
  },
  mutations: {
    [SET_POMODORO_TIME] (state, value) {
      state.pomodoroTime = value
    },
    [TOGGLE_KITTENS] (state) {
      state.showKittens = !state.showKittens
    },
    [INCREMENT_POMODOROS] (state) {
      state.pomodoros ++
    },
    [UPDATE_CURRENT_STATE] (state, value) {
      state.currentState = value
    },
    [SET_WORKOUT] (state, value) {
      state.chosenWorkout = value
      state.chosenWorkout.picture = value.pictures && value.pictures.length && value.pictures[0]
    },
    [SET_TIMER_TIMESTAMP] (state, value) {
      state.timestamp = value
    },
    [SET_PAUSE_TIME] (state, value) {
      state.pauseTime = value
    }
  },
  actions: {
    toggleKittens ({ state, commit }) {
      commit(TOGGLE_KITTENS)
    },
    togglePomodoro ({ state, commit, dispatch, rootState }) {
      switch (state.currentState) {
        case POMODORO_STATE.WORKING:
          // we have switched to the break state, increase the number of pomodoros and choose between long and short break
          commit(INCREMENT_POMODOROS)
          dispatch('incrementTotalPomodoros', null, {root: true})
          let currentState = state.pomodoros % rootState.config.pomodorosTillLongBreak === 0 ? POMODORO_STATE.LONG_BREAK : POMODORO_STATE.SHORT_BREAK
          let minutes = currentState === POMODORO_STATE.LONG_BREAK ? rootState.config.longBreak : rootState.config.shortBreak
          commit(UPDATE_CURRENT_STATE, currentState)
          commit(SET_POMODORO_TIME, minutes * 60)
          let randomWorkout = rootState.workouts[Math.floor(Math.random() * rootState.workouts.length)]
          commit(SET_WORKOUT, randomWorkout)
          alert('Time for exercise!')
          break
        default:
          // time to work!
          commit(UPDATE_CURRENT_STATE, POMODORO_STATE.WORKING)
          commit(SET_POMODORO_TIME, rootState.config.workingPomodoro * 60)
          alert('Time to work!')
          break
      }
    },
    _resetTimer ({ state, commit, dispatch, rootState }) {
      commit(SET_PAUSE_TIME, null)
      commit(UPDATE_CURRENT_STATE, POMODORO_STATE.STOPPED)
      if (state.interval) {
        clearInterval(state.interval)
      }
    },
    startTimer ({state}) {
      if (state.currentTimerState !== TIMER_STATE.STARTED && state.state !== TIMER_STATE.PAUSED) {
        this.timestamp = this.time
        this.startTime = Date.now()
      }
      this.pauseSeconds += numberOfSecondsFromNow(this.pauseTime)
      this._reset()
      this.state = STATE.STARTED
      this.interval = setInterval(() => {
        // seconds from the start time until now
        let secondsFromStart = numberOfSecondsFromNow(this.startTime)

        this.timestamp = this.time - secondsFromStart + this.pauseSeconds
        if (this.timestamp <= 0) {
          this.stop()
          this.$emit('finished')
        }
      }, 10)
    },
    pauseTimer () {
      this.pauseTime = Date.now()
      clearInterval(this.interval)
      this.state = STATE.PAUSED
    },
    stopTimer () {
      clearInterval(this.interval)
      this.timestamp = this.time
      this.pauseSeconds = 0
      this.state = STATE.STOPPED
    }
  }
}
