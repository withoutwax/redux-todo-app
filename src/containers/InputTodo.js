import React, { Component } from 'react';

class InputTodo extends Component {
  render() {
    return (
      <form>
        <lable>Todos:
          <input type="text" value="" />
        </lable>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InputTodo;
