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

// APIs
// THINGS TO DO: Best practice - instead of using an Array, need to implement using an Object with a Key. Better practice
let apiTest = (state = [], action) => {
  switch (action.type) {
    case 'API_TEST':
      console.log("REDUCERS!");
      // THIS IS JUST FOR TESTING PURPOSES, NEED TO UPDATE THE CODE.
      let list = action.payload.data.data[0].list;
      let todoList = action.payload.data.data;
      // console.log(action.payload.data.data[0].list); //This is the pathway to reach a single list of item from the API.
      console.log(todoList);

      Object.keys(todoList).map(function(key, index){
        todoList[key] = todoList[key]
      });

      console.log(todoList);

      for (var i = 0; i < action.payload.data.data.length; i++) {
        console.log(action.payload.data.data[i].list);
      }

      return todoList

    // case 'CREATE_LIST':
    //   return
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
