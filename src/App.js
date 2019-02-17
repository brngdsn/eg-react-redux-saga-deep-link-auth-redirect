import React, { Component } from 'react'
import './App.css'
import TodosList from './containers/TodosList'
import TodoInput from './containers/TodoInput'
import styled from 'styled-components'

const StyledAppContainer = styled.div`
  // padding: 15px;
  // margin: 15px;
  border: 5px solid #3cc47c; // light green
  > div {
    // padding: 15px;
    // margin: 15px;
    border: 5px solid #1e392a; // dark green
    > div {
      // padding: 15px;
      // margin: 15px;
      border: 5px solid #e9c893; // baise
      > div {
        // padding: 15px;
        // margin: 15px;
        border: 5px solid #828081; // grey
        > div {
          // padding: 15px;
          // margin: 15px;
          border: 5px solid #94618e; // purple
        }
      }
    }
  }
`

class App extends Component {
  render() {
    return (
      <StyledAppContainer className={`StyledAppContainer`}>
        <TodoInput />
        <TodosList />
      </StyledAppContainer>
    )
  }
}

export default App
