import C from './constants'

let nextTodoId = 0;

export const addTodo = text => ({
  type: C.ADD_TODO,
  id: nextTodoId++,
  text
})
​
export const setVisibilityFilter = filter => ({
  type: C.SET_VISIBILITY_FILTER,
  filter
})
​
export const toggleTodo = id => ({
  type: C.TOGGLE_TODO,
  id
})
​
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}