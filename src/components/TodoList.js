import { React } from "react";

const TodoList = ({ todos }) => {
    return(
        <div className="todo-container">

            <ul className="some-list">
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>

        </div>
    );
};

export default TodoList;