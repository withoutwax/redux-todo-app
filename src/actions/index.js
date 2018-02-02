// const ADD_TODO = 'ADD_TODO';
// const TEST = 'TEST';

let todoId = 0;

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: todoId++,
    text
  };
}

export function completeTodo(id) {
  return {
    type: 'COMPLETE_TODO',
    id
  }
}

export function initiateList() {
  return {
    type: 'INIT_LIST',
  };
}


export function test() {
  return {
    type: 'TEST',
  };
}

export function untest() {
  return {
    type: 'UNTEST',
  };
}
