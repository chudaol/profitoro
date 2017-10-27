const config = {
  workingPomodoro: 25,
  shortBreak: 5,
  longBreak: 10,
  pomodorosTillLongBreak: 3
}

const user = null
const configRef = null
const statisticsRef = null
const workoutsRef = null
const displayName = ''

const statistics = {
  pomodorosToday: 0,
  pomodorosLastWeek: 0,
  pomodorosLastMonth: 0,
  totalPomodoros: 0,
  workoutsToday: 0,
  workoutLastWeek: 0,
  workoutsLastMonth: 0,
  workoutsTotal: 0
}

export default {
  config,
  user,
  configRef,
  statisticsRef,
  workoutsRef,
  statistics,
  displayName,
  workouts: [],
  authError: '',
  todos: [
    {
      description: 'todo 1',
      id: 1,
      priority: 1,
      active: true
    },
    {
      description: 'todo 2',
      id: 2,
      priority: 3,
      active: true
    },
    {
      description: 'todo 3',
      id: 3,
      priority: 2,
      active: true
    },
    {
      description: 'todo 4',
      id: 4,
      priority: 1,
      active: false,
      pomodoros: 3
    },
    {
      description: 'todo 5',
      id: 5,
      priority: 1,
      active: false,
      pomodoros: 5
    }
  ]
}
