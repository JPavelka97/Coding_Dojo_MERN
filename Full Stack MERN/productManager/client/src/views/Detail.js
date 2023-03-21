import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Detail = () => {
    const nav = useNavigate()
    const [product, setProduct] = useState({});
    const { id } = useParams();

    const deleteProduct = (id) => {
        axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .catch((err) => console.error(err));
        nav('/products')
    };

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products/" + id)
            .then((res) => setProduct(res.data.product))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button
                className="btn btn-danger"
                onClick={(e) => {
                    deleteProduct(product._id);
                }}
            >
                Delete
            </button>
        </div>
    );
};

export default Detail;
