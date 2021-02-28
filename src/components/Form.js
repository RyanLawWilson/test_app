import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const Form = ({ setStatus, setInputText, todos, setTodos, inputText }) => {


    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };


    const submitTodoHandler = (e) => {
        e.preventDefault();

        // Add a new object to the end of the todos array
        setTodos([
            ...todos, { text: inputText, completed: false, id: parseInt(Math.random() * 1000) },
        ]);

        // Set state of field back to ""
        setInputText("");
    };

    const statusHandler = (e) => {
        // console.log(e.target.value);
        setStatus(e.target.value);
    };

    return(
        <form>
            <h3>This is a form</h3>

            {/* UI of input doesn't change unless it is using a state variable */}
            <input onChange={inputTextHandler} value={inputText} type='text' />

            <button onClick={submitTodoHandler} type="submit">Submit!</button>

            <FontAwesomeIcon icon={faEdit} />

            <select onChange={statusHandler} className="select">
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>
        </form>
    );
}

export default Form;