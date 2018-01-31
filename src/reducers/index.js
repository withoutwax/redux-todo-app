import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = {
  text: [],
  test: '',
  testBool: false,
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
      return Object.assign({}, {test: 'Test is working', testBool: true})
    case 'UNTEST' :
      return Object.assign({}, {test: '', testBool: false})
    default:
      return state
  }
}

const rootReducer = combineReducers({
  addTodoReducer,
  form: formReducer
})

export default rootReducer;
