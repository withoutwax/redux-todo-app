const initialTestState = {
  test: '',
  testBool: false,
}

export default function testReducer (state = initialTestState, action) {
  switch (action.type) {
    case 'TEST' :
      return Object.assign({}, {test: 'Test is working', testBool: true})
    case 'UNTEST' :
      return Object.assign({}, {test: '', testBool: false})
    default:
      return state
  }
}
