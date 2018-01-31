import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, test } from '../actions/index';

class InputTodo extends Component {
  handleTest() {
    this.props.test();
    console.log(this.props.test());
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
        <div>
          {this.props.testState}
        </div>
        <button onClick={() => {this.handleTest()}}>
          TEST
        </button>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    testState: state.test
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo, test }, dispatch);
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(InputTodo);
