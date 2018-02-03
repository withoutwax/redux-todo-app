// Need to make code more efficient - DRY.
const initialState = {
  list: [],
  listInitiated: false
}

export default function addTodoReducer (state = initialState, action) {

  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_TODO':
      return [
        ...state.slice(0, action.id),
        Object.assign({}, state[action.id], {
          completed: true
        }),
        ...state.slice(action.id + 1)
      ];
    default:
      return state
  }
}
