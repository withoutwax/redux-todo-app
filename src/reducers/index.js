import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = {
  list: [],
  listInitiated: false
}

let addTodoReducer = (state = initialState, action) => {

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
    case 'REMOVE_TODO':
      return // Need to make completed: true.
    default:
      return state
  }
}

let initiateList = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_LIST':
      return Object.assign({}, {listInitiated: true})
    default:
      return state
  }
}

const initialTestState = {
  test: '',
  testBool: false,
}

let testReducer = (state = initialTestState, action) => {
  switch (action.type) {
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
  initList: initiateList,
  tests: testReducer,
  form: formReducer
});

export default rootReducer;
