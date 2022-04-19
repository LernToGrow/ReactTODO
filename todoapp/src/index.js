import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// import ToDoList from './ToDoList';
import Bootstrapex from './bootstrapex'
//import Accordian from './Accordian/Accordian';
//import Card from './card/Card';
ReactDOM.render(
  <React.StrictMode>
    <Bootstrapex />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
