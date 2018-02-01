import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/index';

class TodoLists extends Component {
  handleDelete(i) {
    console.log(i); // ID
  }

  render() {
    console.log(this.props);
    let listOfItems;

    if (this.props.todo[0] !== undefined) {
      console.log(this.props.todo[0].text.list);
      // console.log('test');
      listOfItems = this.props.todo.map((items, i) => <li key={i} onClick={() => {this.handleDelete(i)}} >{items.text.list}</li>);
    }

    return (
      <div>
        Todo lists:
        <div >{listOfItems}</div>
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
  mapStateToProps, { removeTodo }
)(TodoLists);
