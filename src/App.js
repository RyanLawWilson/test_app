import './App.css';
import React, { useState } from 'react';

//Importing Components:
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  // const[complete, setComplete] = useState(false);

  return (
    <div className="App">
      <h1>This is a test: {inputText}</h1>

      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
