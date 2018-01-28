import React, { Component } from 'react';
import InputTodo from '../containers/InputTodo';
import TodoLists from '../containers/TodoLists';

class App extends Component {
  render() {
    return (
      <div>
        <InputTodo />
        <br />
        <TodoLists />
      </div>
    );
  }
}

export default App;
