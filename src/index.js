import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import {Greeting} from './components/Greeting/Greeting';
import {Search} from './components/Search/Search';
import {TodoList} from './components/TodoList/TodoList';

const Main = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    return (
        <div className="mainContainer">
            <Greeting />
            <Search input={input} setInput={setInput} setTodos={setTodos} todos={todos}/>
            <TodoList todos={todos} setTodos={setTodos}/>
        </div>
    )
}

ReactDOM.render(<Main />, document.getElementById('root'));