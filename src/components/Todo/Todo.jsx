import React from 'react';

const Todo = (props) => {
    const deleteTodo = (event) => {
        const id = event.target.parentElement.id;
        event.target.parentElement.classList.add('scale');
        props.setTodos(props.todos.filter( (todo) => todo.id !== id ));
    }
    const changeComplete = (event) => {
        const id = event.target.parentElement.id;
        props.setTodos(props.todos.filter( (todo) => todo.id !== id ));
        props.setTodos(props.todos.map((todo) => {
            if (id === todo.id) {
                return {
                    ...todo, completed: !todo.completed
                }
            }
            return todo;
        }));
    }
    return (
        <div className={`todo ${ props.completed ? 'completed' : ''}`} id={props.id}>
            <h3>{props.name}</h3>
            <button className="finishButton" onClick={changeComplete}><i className="fas fa-check fa-lg"></i></button>
            <button className="deleteButton" onClick={deleteTodo}><i className="fas fa-trash fa-lg"></i></button>
        </div>
    );
}

export default Todo;