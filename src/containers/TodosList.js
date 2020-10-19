import React from 'react'
import { connect } from 'react-redux'
import { 
  Switch,
  Route,
  useRouteMatch,
  useParams
 } from 'react-router-dom'
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

const NestedTodosLinks = (props) => {
  const { fetching, payload } = props.todos
  return (
    <StyledTodosListContainer className={`StyledTodosListContainer`} style={{border:'5px solid green', width:'250px'}}>
      {fetching && <Fetching />}
      {!fetching && <StyledTodosList className={`StyledTodosList`}>
        {payload && payload.map(todo => <Todo todo={{id:todo.id}} key={todo.id} />)}
      </StyledTodosList>}
      {payload && !payload.length && <StyledEmptyTodo className={`StyledEmptyTodo`}> - Nothing to See Here - </StyledEmptyTodo>}
    </StyledTodosListContainer>
  )
}

const NestedTodosRoutes = (props) => {
  const { path } = useRouteMatch()
  const { payload } = props.todos
  const { tid } = useParams()
  return (
    <div style={{border:'5px solid blue'}}>
      <pre>tid={tid}</pre>
      <pre>payload.todo={payload && payload.filter(todo => `${todo.id}` === `${tid}`).map(todo => (`${todo.id}=:${todo.title}`))}</pre>
      <pre>payload={payload && JSON.stringify(payload, null, 2)}</pre>
      <Switch>
        <Route path={`${path}/:tid`} component={Todo} />
      </Switch>
    </div>
  )
}

class TodosList extends React.PureComponent {

  render () {
    const { fetching, payload } = this.props.todos
    return (
      <div style={{border:'5px solid red',display:'flex',flexDirection:'row'}}>
        <NestedTodosLinks {...this.props} />
        <NestedTodosRoutes {...this.props} />
      </div>
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