import { useState } from "react";
import React from "react";

const Form = (props) => {
    const [content, setContent] = useState("");


    const handleContent = (e) => {
        e.preventDefault();
        props.newTodo(content)
        setContent("")
    }

    return (
        <div>
            <form onSubmit={handleContent}>
                <label>Add to To-Do List</label>
                <input type="text" onChange={(e) => setContent(e.target.value)} />
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form