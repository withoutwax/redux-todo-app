import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, test } from '../actions/index';

class InputTodo extends Component {

  render() {
    return (
      <div>
        <form>
          <lable>Todos:
            <input type="text" />
          </lable>
          <button type="submit" onClick={this.props.test}>Submit</button>
        </form>
        <button onClick={this.props.test}>
          TEST
        </button>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addTodoAction: text => {
//       dispatch(addTodo(text))
//     }
//   }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodoAction: addTodo, testAction: test }, dispatch);
}

export default connect(
  mapDispatchToProps
)(InputTodo);
