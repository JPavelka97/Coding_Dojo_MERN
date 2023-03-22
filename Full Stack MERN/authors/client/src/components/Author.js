import React from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const Author = ({ author, removeFromDom }) => {
    const deleteAuthor = (id) => {
        axios
            .delete(`http://localhost:8000/api/authors/${id}`)
            .then((response) => {
                removeFromDom(id);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className='d-flex justify-content-between border mb-2 p-3'>
            <h3>{author.name}</h3>
            <div className="d-flex gap-2">
                <Link
                    to={`/authors/${author._id}`}
                    className="btn btn-primary"
                >Edit</Link>
                <button className='btn btn-danger' onClick={(e) => {
                                deleteAuthor(author._id);
                            }}>Delete</button>
            </div>
        </div>
    );
};

export default Author;
