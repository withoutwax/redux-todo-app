import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

class InputTodo extends Component {

  render() {
    // const { handleSubmit: handleSubmit } = this.props;

    return (
      <form>
        <lable>Todos:
          <input type="text" />
        </lable>
        <button type="submit" onClick={this.props.addTodoAction()}>Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoAction: text => {
      dispatch(addTodo(text))
    }
  }
}

const connectInputTodo = connect(
  mapDispatchToProps
)(InputTodo);

export default connectInputTodo;
