import { React } from "react";

// Importing Components:
import Todo from "./Todo";

const TodoList = ({ todos }) => {
    console.log(todos);

    return(
        <div className="todo-container">

            <ul className="some-list">
                {todos.map(todo => (
                    <Todo todoText={todo.text} todoCompleted={todo.completed} key={todo.id} />
                ))}
            </ul>

        </div>
    );
};

export default TodoList;