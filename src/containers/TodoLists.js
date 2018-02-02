import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeTodo } from '../actions/index';

class TodoLists extends Component {
  handleDelete(i) {
    console.log(i); // ID
    this.props.completeTodo(i);
  }

  render() {
    console.log(this.props);

    let listOfItems;
    let listOfCompletedItems;
    if (this.props.todo[0] !== undefined) {
      console.log(this.props.todo[0].completed);
      listOfItems = this.props.todo.map((items, i) => {
        if (!this.props.todo[i].completed) {
          return <li key={i} onClick={() => {this.handleDelete(i)}} >{items.text.list}</li>
        }
      });

      listOfCompletedItems = this.props.todo.map((items, i) => {
        if (this.props.todo[i].completed) {
          return <li>{items.text.list}</li>
        }
      });
    }

    return (
      <div>
        <div>
          Todo lists:
          <div >{listOfItems}</div>
        </div>
        <div>
          Completed lists:
          <div>{listOfCompletedItems}</div>
        </div>
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
  mapStateToProps, { completeTodo }
)(TodoLists);
