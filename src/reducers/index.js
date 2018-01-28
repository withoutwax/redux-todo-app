function addTodoReducer(state, action) {
  if (state === undefined) {
    return state = [];
  }

  switch (action.type) {
    case 'ADD_TODO':
      console.log('Adding Todo');
      // return [
      //   ...state,
      //   {
      //     text: action.text
      //   }
      // ]
    case 'TEST':
      console.log('This is a test');
    default:
      return state
  }
}

export default addTodoReducer;
