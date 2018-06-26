import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import FilterLink from './containers/FilterLink'
import { VisibilityFilters } from './store/actions'

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <div>
          <span>Show: </span>
          <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            All
          </FilterLink>
          <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
          </FilterLink>
          <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
          </FilterLink>
        </div>
      </div>
    );
  }
}

export default App;
