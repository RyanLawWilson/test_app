import { React } from "react";

// Importing Components:
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
    console.log(todos);

    return( 
        <div className="todo-container">

            <ul className="some-list">
                {todos.map(todo => (
                    <Todo todo={todo} todoText={todo.text} todoCompleted={todo.completed} key={todo.id} todos={todos} setTodos={setTodos} />
                ))}
            </ul>

        </div>
    );
};

export default TodoList;