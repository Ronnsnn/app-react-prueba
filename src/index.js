import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "./store/index";
import { addUser } from "./actions/index";

window.store = store;
window.addUser = addUser;

ReactDOM.render(
  <Provider store={store}>
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter></div>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
