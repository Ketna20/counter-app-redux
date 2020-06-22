import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

//import counterReducer from './store/reducers/counter';
//import resultReducer from './store/reducers/result';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const rootReducer = combineReducers ({
//   ctr: counterReducer,
//   res: resultReducer
// });

// const store = createStore(rootReducer);

ReactDOM.render(
  // <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode> ,
  // </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
