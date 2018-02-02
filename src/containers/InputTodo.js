import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, test, untest, initiateList, apiTest, axiosCreateList } from '../actions/index';

// Redux-form
import { Field, reduxForm } from 'redux-form';

// var valueEntered = false;

class InputTodo extends Component {
  componentDidMount() {
    console.log("Component Did Mount: ");

    this.props.apiTest();
  }

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

  // API TEST
  handleApiTest() {
    console.log("Ready for API Test!");
    this.props.apiTest();
    console.log(this.props);
  }

  onSubmit(values) {
    // console.log(values);
    this.props.addTodo(values);
    this.props.initiateList();

    // AXIOS POST
    this.props.axiosCreateList(values);
  }

  render() {
    console.log(this.props)
    const { handleSubmit } = this.props;
    // console.log(this.props);

    for (var i = 0; i < this.props.api.length; i++) {
      console.log(this.props.api[i].list);
    }

    let listOfItems;

    listOfItems = this.props.api.map((items, i) => <li key={i} >{items.list}</li>);

    return (
      <div>
        {/* <div>
          {listOfItems}
        </div> */}
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

        {/* API TEST */}

        <div>
          API TEST:
          {/* {this.props.api.toString()} OBJECT FORMAT*/}
          {listOfItems}
        </div>
        <button onClick={() => {this.handleApiTest()}}>
          API_TEST
        </button>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todo: state.todos,
    testState: state.tests,
    api: state.apis
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo, test, untest, initiateList, apiTest, axiosCreateList}, dispatch);
}

export default reduxForm({
  form: 'simpleList'
})(
  connect(
  mapStateToProps, mapDispatchToProps
)(InputTodo)
);
