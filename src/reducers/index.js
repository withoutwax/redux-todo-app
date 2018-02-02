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

let apiTest = (state = {}, action) => {
  switch (action.type) {
    case 'API_TEST':
      console.log("REDUCERS!");
      // THIS IS JUST FOR TESTING PURPOSES, NEED TO UPDATE THE CODE.
      let list =  action.payload.data.data[0].list;
      console.log(action.payload.data.data[0].list); //This is the pathway to reach a single list of item from the API.
      return list
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
