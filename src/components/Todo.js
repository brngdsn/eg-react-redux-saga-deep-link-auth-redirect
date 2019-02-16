import React, { Component } from 'react'

import styled from 'styled-components'

const StyledTodoContainer = styled.div``

export default class Todo extends Component {

  render () {
    const { title, done } = this.props.todo
    return (
      <StyledTodoContainer>
        <div>
          <span>{title}</span>
        </div>
        <div>
          <input type={`radio`} value={done} disabled={true}/>
        </div>
      </StyledTodoContainer>
    )
  }
}