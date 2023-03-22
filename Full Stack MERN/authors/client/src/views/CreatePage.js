import React, {useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import AuthorForm from "../components/AuthorForm";

const CreatePage = () => {
    const nav = useNavigate()
    const [formErrors, setFormErrors] = useState({})

    const formSubmit = (author) => {
        axios.post('http://localhost:8000/api/authors', author)
            .then((response) => {
                nav('/');
            })
            .catch((error) => {
                console.log(error)
                setFormErrors(error.response.data.error.errors)
            })
    };

    return (
        <div>
            <div className="d-flex justify-content-center">
                <Link to="/">Home</Link>
            </div>
            <AuthorForm author={{ name: "" }} formSubmit={formSubmit} formErrors={formErrors}/>
        </div>
    );
};

export default CreatePage;