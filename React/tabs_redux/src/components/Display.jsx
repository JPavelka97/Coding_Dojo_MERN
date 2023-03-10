import { useState } from "react";
import React from "react";

const ToDoItem = (props) => {
    return(
        <p>{props.content}</p>
    )
}

export default ToDoItem