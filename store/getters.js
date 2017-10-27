import _ from 'lodash'

export default {
  getConfig: state => state.config,
  getUser: state => state.user,
  getDisplayName: state => state.displayName,
  getWorkouts: state => state.workouts,
  getTotalPomodoros: state => state.statistics.totalPomodoros,
  isAuthenticated: state => state.user && !state.user.isAnonymous,
  authError: state => state.authError,
  totalPomodoros: state => state.statistics.totalPomodoros,
  todos: state => state.todos,
  activeTodos: state => _.sortBy(_.filter(state.todos, todo => todo.active), 'priority'),
  doneTodos: state => _.filter(state.todos, todo => !todo.active)
}
