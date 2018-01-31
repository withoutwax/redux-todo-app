// const ADD_TODO = 'ADD_TODO';
// const TEST = 'TEST';

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text: text,
  };
}

export function test() {
  return {
    type: 'TEST',
  };
}
