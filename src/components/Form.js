import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const Form = () => {
    return(
        <form>
            <h3>This is a form</h3>
            <FontAwesomeIcon icon={faEdit} />
        </form>
    );
}

export default Form;