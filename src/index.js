import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import TodoList from "./TodoList";

var indexHTML = document.querySelector('#root');

ReactDOM.render(
    <div>
        <TodoList/>
        
    </div>,
    indexHTML
);

