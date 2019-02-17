import React from 'react'

import styled from 'styled-components'

const StyledTodoContainer = styled.div``

const StyledTodo = ({ todo, onClickTodoRemove, onClickTodoToggle }) => (
  <StyledTodoContainer className={`StyledTodoContainer`}>
    <div>
      <button onClick={onClickTodoRemove} disabled={todo.busy}>
        {todo.busy && <div>busy</div>}
        {!todo.busy && <div>trash</div>}
      </button>
    </div>
    <div>
      {todo.title}
    </div>
    <div>
      {todo.busy && <div>busy</div>}
      {!todo.busy && <div onClick={onClickTodoToggle}>
        {todo.done && <div>done</div>}
        {!todo.done && <div>!done</div>}
      </div>}
    </div>
  </StyledTodoContainer>
)

export default StyledTodo