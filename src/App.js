import './App.css';
import React, { useState, useEffect } from 'react';
//useEffect allows you to call a function when a state changes.


//Importing Components:
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  //States

  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState("all");
  const[filteredTodos, setFilteredTodos] = useState([]);
  
  // Use Effect
  // Will run once when the program starts
  useEffect(() => {
    filterHandler();
  }, [todos, status])

  //Functions

  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <h1>This is a test: {inputText}</h1>

      <Form setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
