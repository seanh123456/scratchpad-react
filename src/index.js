import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { increment, decrement } from './actions/counter'
import rootReducer from './reducers'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer)

store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
