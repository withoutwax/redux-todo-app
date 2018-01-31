const initialState = {
  text: []
}

let addTodoReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text
        }
      ]
    case 'TEST' :
      // console.log('This is a test');
      break;
    default:
      return state
  }
}

export default addTodoReducer;
