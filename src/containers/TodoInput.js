import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddTodosActions from '../redux/AddTodosRedux'

import styled from 'styled-components'

const StyledTodoInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  > div:first-child {
    flex-grow: 2;
    > input {
      width: 99%;
    }
  }
`

class TodoInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todoInput: ``
    }
  }

  onChange = (event) => {
    const todoInput = event.target.value
    this.setState({
      todoInput: todoInput
    })
  }

  onClick = () => {
    this.props.addTodosRequest({
      title: this.state.todoInput,
      done: false
    })
  }

  render () {
    const { onChange, onClick } = this
    const { fetching } = this.props.addTodos
    const { todoInput } = this.state
    return (
      <StyledTodoInputContainer className={`StyledTodoInputContainer`}>
        <div>
          <input placeholder={`Add todo...`} onChange={onChange} value={todoInput} disabled={fetching} />
        </div>
        <div>
          <button onClick={onClick} disabled={fetching}>
            {fetching && <div>busy</div>}
            {!fetching && <div>add</div>}
          </button>
        </div>
      </StyledTodoInputContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addTodos: state.addTodos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodosRequest: (todo) => dispatch(AddTodosActions.addTodosRequest(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)