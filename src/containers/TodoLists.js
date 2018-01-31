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
    if (this.props.todo.listInitiated) {
      // console.log(this.props.todo[0]);
      console.log("This is working!");
      // listOfItems = this.props.todo.map((items, i) => <li key={i} >{items.text.list}</li>);
    }

    return (
      <div>
        Todo lists:
        {/* {listOfItems} */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todo: state.todos,
    initList: state.initList
  }
}

export default connect(
  mapStateToProps
)(TodoLists);
