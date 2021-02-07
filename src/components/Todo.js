import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Todo = ({ todoText, todoCompleted, todoId }) => {




    return (
        <div className="todo">
            <li className="todo-item">{todoText}&nbsp;
            <button className="complete-btn" type="button"><FontAwesomeIcon icon={faCheck} /></button>&nbsp;
            <button className="trash-btn" type="button"><FontAwesomeIcon icon={faTrash} /></button>
            </li>
        </div>
    );
};

export default Todo;