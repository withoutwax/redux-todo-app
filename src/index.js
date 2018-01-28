import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Redux
import { Provider } from 'react-redux';
// import store from './store';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>, document.getElementById('root'));
