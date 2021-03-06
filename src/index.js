import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Main from './main'
//import TodoApp from './todo';
import Update from './update'
// ReactDOM.render(<TodoApp />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('container'));
ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
if (module.hot){
    module.hot.accept();
}