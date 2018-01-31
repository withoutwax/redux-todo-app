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
