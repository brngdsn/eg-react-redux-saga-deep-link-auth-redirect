import React, { Component } from 'react'
import './App.css'
import TodosList from './containers/TodosList'
import TodoInput from './containers/TodoInput'

class App extends Component {
  render() {
    return (
      <div>
        <TodoInput />
        <TodosList />
      </div>
    )
  }
}

export default App
