import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Todo = ({ todoText, todo, todoCompleted, todoId, todos, setTodos }) => {


    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };

    const completeHandler = () => {
        // What is (item) doing?
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    // Need more info on what's going on here.
                    ...item, completed: !item.completed
                };
            }
            return item;
        }));
    };

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todoText}&nbsp;
            <button onClick={completeHandler} className="complete-btn" type="button"><FontAwesomeIcon icon={faCheck} /></button>&nbsp;
            <button onClick={deleteHandler} className="trash-btn" type="button"><FontAwesomeIcon icon={faTrash} /></button>
            </li>
        </div>
    );
};

export default Todo;