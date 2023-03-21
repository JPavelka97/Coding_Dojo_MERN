import React from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const ProductList = (props) => {
    const {removeFromDom} = props
    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res=> {
                removeFromDom(id)
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <h1>All Products</h1>
            <div className="d-flex flex-column gap-3">
                {props.productsList.map((product, idx) => (
                    <div className="d-flex gap-3 justify-content-center align-items-center">
                        <Link to={`/products/${product._id}`}>
                            {product.title} | {product.price} |{" "}
                            {product.description}
                        </Link>
                        <Link className="btn btn-primary" to={`/products/${product._id}/edit`}>
                            Edit
                        </Link>
                        <button className="btn btn-danger"
                            onClick={(e) => {
                                deleteProduct(product._id);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
