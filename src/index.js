import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import promise from 'redux-promise';

const createStorewithMiddleware = applyMiddleware(promise)(createStore);

// const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={createStorewithMiddleware(rootReducer)}>
    <App />
  </Provider>, document.getElementById('root'));
