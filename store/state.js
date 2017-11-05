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
      description: 'Start using ToDo list',
      id: 1,
      priority: 1,
      active: true,
      progress: false,
      pomodoros: 0
    }
  ],
  firstTimeTodos: [
    {
      description: 'High priority - learn how to use the ToDo list - start me',
      id: 1,
      priority: 1,
      active: true,
      progress: false,
      pomodoros: 0
    },
    {
      description: 'Low priority - just mark me as done and start creating your task list for today!',
      id: 2,
      priority: 3,
      active: true,
      progress: true,
      pomodoros: 0
    },
    {
      description: 'Medium priority - сonsolidate your knowledge - mark me as done',
      id: 3,
      priority: 2,
      active: true,
      progress: true,
      pomodoros: 0
    }
  ]
}
