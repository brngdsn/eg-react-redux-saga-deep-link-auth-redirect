import axios from 'axios'

const create = (baseURL = `http://localhost`) => {
  const api = {
    get: (path = '/', request) => new Promise((resolve, reject) => {
      console.log(path, request)
      setTimeout(() => {
        resolve({data:request,ok:true})
      }, 1000)
    }),
    post: (path = '/', body = {}) => new Promise((resolve, reject) => {
      console.log(path, body)
      setTimeout(() => {
        resolve({data:body,ok:true})
      }, 1000)
    })
  }

  const postAuthentication = (body) => api.post('/api/v2/authentication', body)
  const getSession = (request) => api.get('/api/v2/session', request)

  return {
    postAuthentication,
    getSession
  }
}

export default {
  create
}
