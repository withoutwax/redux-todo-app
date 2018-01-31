const initialState = {
  text: [],
  test: ''
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
      return Object.assign({}, {test: 'Test is working'})
    default:
      return state
  }
}

export default addTodoReducer;
