import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const EditForm = () => {
    const nav = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
            .catch((err) => console.error(err));
    }, []);

    const onUpdateHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/products/${id}/edit`, {
                title,
                price,
                description,
            })
            .then((res) => {
                console.log(res);
                nav("/products");
            })

            .catch((err) => console.log(err));
    };

    return (
        <form onSubmit={onUpdateHandler} className="w-25 mx-auto mt-3">
            <div className="form-floating">
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    id="floatingTitle"
                    placeholder="Bananas"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Title</label>
                <br />
            </div>
            <div className="form-floating">
                <input
                    type="text"
                    className="form-control"
                    value={price}
                    id="floatingPrice"
                    placeholder="5.32"
                    onChange={(e) => setPrice(e.target.value)}
                />
                <label>Price</label>
                <br />
            </div>
            <div className="form-floating">
                <input
                    type="text"
                    className="form-control"
                    value={description}
                    id="floatingDescription"
                    placeholder="5.32"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label>Price</label>
                <br />
            </div>
            <input type="submit" />
        </form>
    );
};

export default EditForm;
