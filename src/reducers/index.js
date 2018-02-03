import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import testReducer from './reducer_test';
import addTodoReducer from './reducer_no_API';
import apiTest from './reducer_api';


// Need to make code more efficient - DRY.
// Need to refactor this code.
const initialState = {
  list: [],
  listInitiated: false
}

let initiateList = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_LIST':
      return Object.assign({}, {listInitiated: true})
    default:
      return state
  }
}


const rootReducer = combineReducers({
  todos: addTodoReducer,
  initList: initiateList,
  tests: testReducer,
  apis: apiTest,
  form: formReducer
});

export default rootReducer;
