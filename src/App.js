import './App.css';
import React, { useState } from 'react';

//Importing Components:
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const[inputText, setInputText] = useState("");

  return (
    <div className="App">
      <h1>This is a test: {inputText}</h1>

      <Form setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
