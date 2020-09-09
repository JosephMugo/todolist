import React from 'react';
import Todo from '../Todo/Todo';

export const TodoList = (props) => {
    return (
        <div className="todoContainer">
            {props.todos.map((todo) => (
                <Todo name={todo.name} key={todo.id} id={todo.id} setTodos={props.setTodos} todos={props.todos} completed={todo.completed}/>
            ))}
        </div>
    )
}