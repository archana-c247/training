import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Task from  './Task2/Task';
import BurgerBuilder from './Container/BurgerBuilder'
import EmployeeList from './Container/EmployeeList'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<EmployeeList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
