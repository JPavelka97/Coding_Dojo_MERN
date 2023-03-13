import { useState } from "react";
import React from "react";

const ToDoItem = ({ item, value, updateItem, deleteItem }) => {
    const updateOneItem = (value) => {
        updateItem(value);
        console.log(item["value"]);
    };

    const deleteOneItem = () => {
        deleteItem(item);
    };

    return (
        <li
            key={value}
            style={{ textDecoration: item['value'] ? "line-through" : "" }}
        >
            {item.content}

            <input type="checkbox" onChange={(e) => updateOneItem(value)} />
            <button onClick={(item) => deleteOneItem(item)}>Delete</button>
        </li>
    );
};
export default ToDoItem;
