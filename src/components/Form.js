import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const Form = ({ setInputText, todos, setTodos, inputText }) => {


    const inputTextHandler = (e) => {
        console.log(e);
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

        console.log("Hey!");
    };


    return(
        <form>
            <h3>This is a form</h3>

            {/* UI of input doesn't change unless it is using a state variable */}
            <input onChange={inputTextHandler} value={inputText} type='text' />

            <button onClick={submitTodoHandler} type="submit">Submit!</button>

            <FontAwesomeIcon icon={faEdit} />
        </form>
    );
}

export default Form;