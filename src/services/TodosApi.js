import apisauce from 'apisauce'

const create = (baseURL = 'http://localhost:4000/api/v2/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })

  const getTodos = () => api.get('/todos')
  const postTodos = (todo) => api.post('/todos', todo)
  const deleteTodos = (todo) => api.delete(`/todos/${todo.id}`)
  const patchTodos = (todo) => api.patch(`/todos/${todo.id}`, { ...todo })

  return {
    getTodos,
    postTodos,
    deleteTodos,
    patchTodos
  }
}

export default {
  create
}