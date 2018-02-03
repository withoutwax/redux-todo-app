// APIs
// THINGS TO DO: Best practice - instead of using an Array, need to implement using an Object with a Key. Better practice
export default function apiTest(state = [], action) {
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
