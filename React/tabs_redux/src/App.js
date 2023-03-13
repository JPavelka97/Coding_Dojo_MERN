import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import ToDoItem from "./components/Display";

function App() {
    const [allTodo, setAllTodo] = useState([]);

    const newTodo = (content) => {
        setAllTodo([...allTodo, { content: content, value: false }]);
    };

    const updateItem = (value) => {
        if (allTodo[value].value === false) {
            allTodo[value].value = true;
        } else {
            allTodo[value].value = false;
        }
        console.log(allTodo);
    };

    const deleteItem = (itemToDelete) => {
        setAllTodo(
            allTodo.filter((item) => item.content !== itemToDelete.content)
        );
    };

    return (
        <div className="App">
            <Form newTodo={newTodo}></Form>
            <ul>
                {allTodo.map((item, value) => (
                    <ToDoItem
                        item={item}
                        value={value}
                        updateItem={updateItem}
                        deleteItem={deleteItem}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;
