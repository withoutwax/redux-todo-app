import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, test, untest } from '../actions/index';

class InputTodo extends Component {

  handleSubmit(e) {

  }

  // TESTING REDUX
  handleTest() {
    // this.props.test();
    if (!this.props.testBool) {
      this.props.test();
    } else {
      this.props.untest();
    }
    console.log(this.props);
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
        <div>
          {this.props.testState}
        </div>
        <button onClick={() => {this.handleTest()}}>
          TOGGLE
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    testState: state.test,
    testBool: state.testBool
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo, test, untest }, dispatch);
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(InputTodo);
