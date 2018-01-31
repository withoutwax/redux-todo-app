import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = {
  list: [],
  test: '',
  testBool: false,
}

let addTodoReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          list: action.list
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
  todos: addTodoReducer,
  form: formReducer
});

export default rootReducer;
