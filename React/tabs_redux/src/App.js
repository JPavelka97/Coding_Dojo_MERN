import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import Form from './components/Form'
import ToDoItem from './components/Display'

function App() {
  const [allTodo, setAllTodo] = useState([])
  const newTodo = (content) => {
    setAllTodo([...allTodo,[content, false]])
  }
  const updateItem = (value) => {
    if(allTodo[value][1]===false){
      allTodo[value][1]=true;
    } else {
      allTodo[value][1]=false;
    }
    console.log(allTodo)
  }

  // const deleteItem = (value) => {
  //   console.log(value)
  //   allTodo[value]
  // }
  
  return (
    <div className="App">
      <Form newTodo={newTodo}></Form>
      <ul>
        { allTodo.map( (item, value) =>
          <li key={value} style={{textDecoration: 'line-through'}}>{item} 
          <input
          type="checkbox" 
          onChange={(e) => updateItem(value)}
          />
          {/* <button onClick={(e) => deleteItem(value)}>Delete</button> */}
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
