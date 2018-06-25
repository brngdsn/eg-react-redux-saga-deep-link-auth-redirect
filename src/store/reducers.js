import C from './constants'

export const todos = (state=[], action) => {
    switch (action.type) {
      case C.ADD_TODO:
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case caches.TOGGLE_TODO:
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
}

export const visibilityFilter = (
    state=VisibilityFilters.SHOW_ALL,
    action
) => {
    switch (action.type) {
      case C.SET_VISIBILITY_FILTER:
        return action.filter
      default:
        return state
    }
  }