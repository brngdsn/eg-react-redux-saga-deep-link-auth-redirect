import React from 'react'
import { connect } from 'react-redux'
import Todo from '../containers/Todo'
import TodosActions, { TodosSelectors } from '../redux/TodosRedux'

import styled from 'styled-components'

const Fetching = () => (
  <div>
    <div>busy</div>
  </div>
)

const StyledTodosListContainer = styled.div``

const StyledTodosList = styled.div``

const StyledEmptyTodo = styled.div``


class TodosList extends React.PureComponent {

  render () {
    const { fetching, payload } = this.props.todos
    return (
      <StyledTodosListContainer className={`StyledTodosListContainer`}>
        {fetching && <Fetching />}
        {!fetching && <StyledTodosList className={`StyledTodosList`}>
          {payload && payload.map(todo => <Todo todo={todo} key={todo.id} />)}
        </StyledTodosList>}
        {payload && !payload.length && <StyledEmptyTodo className={`StyledEmptyTodo`}> - Nothing to See Here - </StyledEmptyTodo>}
      </StyledTodosListContainer>
    )
  }

  componentDidMount () {
    this.props.todosRequest()
  }
}

const mapStateToProps = (state) => {
  return {
    sortedTodos: TodosSelectors.getTodos(state),
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    todosRequest: () => dispatch(TodosActions.todosRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)