// const ADD_TODO = 'ADD_TODO';
// const TEST = 'TEST';

export function addTodo(list) {
  return {
    type: 'ADD_TODO',
    list,
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
