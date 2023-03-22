import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Author from "../components/Author";

const Dashboard = () => {
    const [authorList, setAuthorList] = useState();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((response) => {
                console.log(response.data)
                setAuthorList(response.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const removeFromDom = id => {
        setAuthorList(authorList.filter(author => author._id !== id))
    }

    return (
        <div>
            <div className='mb-2 d-flex justify-content-center'>
                <Link to="/authors/new">Add a new Author</Link>
            </div>
            <div>
                {authorList &&
                    authorList.map((author, i) => <Author key={i} author={author} removeFromDom={removeFromDom}/>)}
            </div>
        </div>
    );
};

export default Dashboard