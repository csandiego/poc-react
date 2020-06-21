import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Ui from './Ui';
import TodoService from './todo-service';
import createDb from './db';

const todoService = new TodoService(createDb());

ReactDOM.render(
  <React.StrictMode>
    <Ui todoService={todoService} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
