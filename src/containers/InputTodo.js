import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, test, untest } from '../actions/index';

// Redux-form
import { Field, reduxForm } from 'redux-form';

var valueEntered = false;
class InputTodo extends Component {


  // TESTING REDUX
  handleTest() {
    // console.log(this.props.testState);
    if (!this.props.testState.testBool) {
      this.props.test();
    } else {
      this.props.untest();
    }
  // console.log(this.props.testState.testBool);
  }

  onSubmit(values) {
    // console.log(values);
    this.props.addTodo(values);
    valueEntered = true;

  }

  render() {
    const { handleSubmit } = this.props;
    // console.log(this.props);

    let listOfItems;

    // if (valueEntered) {
    //   listOfItems = this.props.todo.map((items, i) => <li key={i} >{items.text.list}</li>);
    // }

    return (
      <div>
        <div>
          {listOfItems}
        </div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div>
            <label>List</label>
            <div>
              <Field
                name="list"
                component="input"
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
        <br />
        <div>
          {this.props.testState.test}
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
    todo: state.todos,
    testState: state.tests
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo, test, untest }, dispatch);
}

export default reduxForm({
  form: 'simpleList'
})(
  connect(
  mapStateToProps, mapDispatchToProps
)(InputTodo)
);
