import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoLists extends Component {

  render() {

    let listOfItems;
    
    if (this.props.todo[0] !== undefined) {
      console.log(this.props.todo[0].text.list);
      // console.log('test');
      listOfItems = this.props.todo.map((items, i) => <li key={i} >{items.text.list}</li>);
    }

    return (
      <div>
        Todo lists:
        {listOfItems}
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
