import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoLists extends Component {
  render() {

    // let listOfItems;
    //
    // if (valueEntered) {
    //   listOfItems = this.props.todo.map((items, i) => <li key={i} >{items.text.list}</li>);
    // }
    console.log(this.props);

    return (
      <div>
        Todo lists:
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todo: state.todos,
  }
}

export default connect(
  mapStateToProps
)(TodoLists);
