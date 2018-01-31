import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, test } from '../actions/index';

class InputTodo extends Component {
  handleTest() {
    // console.log(this.props.test());
    this.props.test();
  }

  handleSubmit(e) {

  }

  render() {
    // console.log(this.props);
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit(input.value)}>
          <lable>Todos:
            <input type="text" />
          </lable>
          <button type="submit">Submit</button>
        </form> */}
        <button onClick={() => {this.handleTest()}}>
          TEST
        </button>
      </div>

    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo, test }, dispatch);
}

export default connect(
  null, mapDispatchToProps
)(InputTodo);
