import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const Form = ({ setInputText }) => {


    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };




    return(
        <form>
            <h3>This is a form</h3>
            <input onChange={inputTextHandler} type='text' />
            <FontAwesomeIcon icon={faEdit} />
        </form>
    );
}

export default Form;