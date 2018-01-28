const addTodoReducer = (state, action) => {
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
      break;
    default:
      return state
  }
}

export default addTodoReducer;
