import React from 'react';
import createUID from 'create-unique-id';

export const Search = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const updateInput = (event) => {
        props.setInput(event.target.value);
    }

    const addTodo = (event) => {
        props.setTodos( [...props.todos, { 
            name: props.input,
            id: createUID(4),
            completed: false
        }]);
        props.setInput('');
    }
    
    return (
        <form className="searchContainer fade-in" onSubmit={handleSubmit}>
            <input autoComplete="off" id="input" type="text" onChange={updateInput} value={props.input}></input>
            <button className="addButton" type="submit" onClick={addTodo}>
                <i className="fas fa-plus fa-2x"></i>
            </button>
        </form>
    )
}