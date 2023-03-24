import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import AuthorForm from "../components/AuthorForm";

const EditPage = () => {
    const nav = useNavigate();
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then((response) => {
                console.log("===", response.data);
                setAuthor(response.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const formSubmit = (author) => {
        axios
            .put(`http://localhost:8000/api/authors/${id}/edit`, author)
            .then((response) => {
                console.log(response);
                nav("/");
            })
            .catch((error) => {
                console.log(error);
                setFormErrors(error.response.data.error.errors);
            });
    };

    return (
        <div>
            <div className="d-flex justify-content-center">
                <Link to="/">Home</Link>
            </div>
            {author && (
                <AuthorForm
                    author={author}
                    formSubmit={formSubmit}
                    formErrors={formErrors}
                />
            )}
        </div>
    );
};

export default EditPage;
