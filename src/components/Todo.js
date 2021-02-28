import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Todo = ({ todoText, todo, todoCompleted, todoId, todos, setTodos }) => {


    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };

    return (
        <div className="todo">
            <li className="todo-item">{todoText}&nbsp;
            <button className="complete-btn" type="button"><FontAwesomeIcon icon={faCheck} /></button>&nbsp;
            <button onClick={deleteHandler} onclassName="trash-btn" type="button"><FontAwesomeIcon icon={faTrash} /></button>
            </li>
        </div>
    );
};

export default Todo;